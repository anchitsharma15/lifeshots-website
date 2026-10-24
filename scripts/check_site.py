"""Dependency-free integrity checks; does not claim browser or SEO coverage."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys
from prepare_media import prepare_media
prepare_media()

root = Path(__file__).resolve().parents[1] / "dist"
errors = []
class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            if attrs["id"] in self.ids:
                errors.append("Duplicate id: " + attrs["id"])
            self.ids.add(attrs["id"])
        for key in ("src", "href"):
            if attrs.get(key):
                self.refs.append(attrs[key])

for path in root.rglob("*.html"):
    page = Page()
    page.feed(path.read_text())
    for ref in page.refs:
        parsed = urlsplit(ref)
        if parsed.scheme or parsed.netloc:
            continue
        if parsed.path:
            target = root / unquote(parsed.path.lstrip("/")) if parsed.path.startswith("/") else path.parent / unquote(parsed.path)
            if not target.exists():
                errors.append(f"{path.name}: missing local resource {ref}")
        elif parsed.fragment and unquote(parsed.fragment) not in page.ids:
            errors.append(f"{path.name}: missing anchor {ref}")

# Portfolio filenames are dynamically interpolated by app.js.
app = (root / "app.js").read_text()
for name in re.findall(r"file:\s*['\"]([a-f0-9]+)['\"]", app):
    if not (root / "assets" / (name + ".jpg")).is_file():
        errors.append("Missing portfolio image: " + name)
for path in root.rglob("*.css"):
    for ref in re.findall(r"url\([\"']?([^\)\"']+)", path.read_text()):
        parsed = urlsplit(ref)
        if not parsed.scheme and not parsed.netloc and not ref.startswith("#"):
            target = root / unquote(parsed.path.lstrip("/")) if parsed.path.startswith("/") else path.parent / unquote(parsed.path)
            if not target.is_file():
                errors.append(f"{path.name}: missing CSS resource {ref}")
if errors:
    print("\n".join(errors), file=sys.stderr)
    sys.exit(1)
print("PASS: local HTML assets, anchors, unique IDs, CSS assets, and dynamic portfolio images")
print("Not covered: browser interactions, accessibility, remote URLs, SEO, backups, or deployment")
