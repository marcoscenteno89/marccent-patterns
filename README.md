# Marccent patterns

The patterns: arrangements of marccent-theme's components and classes with nothing of their own (no CSS, no JS, no
markup a component doesn't write). The list, with each pattern's parts and the admin data it needs, is marccent-theme's
[docs/PATTERNS.md](docs/PATTERNS.md); each pattern's markup, the reference every output builds it from, is a file in
[patterns/](patterns/).

A pattern that needs a kit's data lives in that kit (marccent-kits, [docs/KITS.md](docs/KITS.md)).

`npm test` fails on a class the theme doesn't define or a `data-component` nothing writes, against the theme this repo
pins (`package.json`); marccent-theme's `npm test` runs it against the theme as it's being changed. Converting each
pattern to each output's blocks and tags is after 1.0 (docs/TICKETS.md T-037).

`docs/` links to marccent-theme's docs: the rules and this repo's work list (`docs/todo/marccent-patterns.md`).
