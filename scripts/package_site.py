"""Package the static website with cache-safe assets and explicit preview indexing rules."""
from argparse import ArgumentParser
from hashlib import sha256
from pathlib import Path
import re
import shutil

parser = ArgumentParser()
parser.add_argument('--output', required=True)
parser.add_argument('--preview', action='store_true')
parser.add_argument('--base-path', default='/')
args = parser.parse_args()
source = Path(__file__).resolve().parents[1] / 'dist'
out = Path(args.output).resolve()
if out == source or source in out.parents:
    parser.error('Output must be outside dist/')
if not args.base_path.startswith('/') or not args.base_path.endswith('/'):
    parser.error('Base path must begin and end with /')
shutil.copytree(source, out, dirs_exist_ok=True)
versions = {}
for name in ('style.css', 'app.js', 'page.js'):
    asset = out / name
    version = sha256(asset.read_bytes()).hexdigest()[:12]
    versioned = asset.with_name(f'{asset.stem}.{version}{asset.suffix}')
    versioned.write_bytes(asset.read_bytes())
    versions[name] = versioned.name
for page in out.rglob('*.html'):
    html = page.read_text()
    for name, versioned in versions.items():
        html = html.replace(name + '"', versioned + '"')
    if page.name == '404.html':
        # A 404 can be served at any unknown nested URL; use deployment-root paths.
        html = re.sub(r'((?:href|src)=")/(?!/)', lambda m: m.group(1) + args.base_path, html)
    if not args.preview:
        html = html.replace('Independent redesign preview', 'Lifeshots Photography')
    if args.preview:
        html = re.sub(r'<meta name="robots"[^>]*>', '', html)
        html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow"></head>')
    page.write_text(html)
if args.preview:
    (out / 'robots.txt').write_text('User-agent: *\nDisallow: /\n')
print(f'Packaged {len(list(out.rglob("*.html")))} HTML files with versioned assets; preview={args.preview}')
