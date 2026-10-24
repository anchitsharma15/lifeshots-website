"""Restore versioned media packs before local preview or a production build."""
from pathlib import Path
from hashlib import sha256
import io,json,zipfile

def prepare_media():
    root=Path(__file__).resolve().parents[1]
    manifest=json.loads((root/'media/manifest.json').read_text())
    destination=root/'dist'
    if all((destination/path).is_file() for path in manifest['files']):
        return
    chunks=[]
    for part in manifest['parts']:
        data=(root/'media'/part['file']).read_bytes()
        if sha256(data).hexdigest()!=part['sha256']:
            raise ValueError('Media pack integrity check failed: '+part['file'])
        chunks.append(data)
    with zipfile.ZipFile(io.BytesIO(b''.join(chunks))) as archive:
        if set(archive.namelist())!=set(manifest['files']):
            raise ValueError('Unexpected files in media pack')
        for name in archive.namelist():
            if not (destination/name).resolve().is_relative_to(destination.resolve()):
                raise ValueError('Invalid media path')
        archive.extractall(destination)
    print('Prepared',len(manifest['files']),'photography assets')

if __name__=='__main__':
    prepare_media()
