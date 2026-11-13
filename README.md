# Marccent patterns

The patterns: arrangements of marccent-theme's components and classes with nothing of their own (no CSS, no JS, no
markup a component doesn't write). The list, with each pattern's parts and the admin data it needs, is marccent-theme's
[docs/PATTERNS.md](docs/PATTERNS.md); each pattern's markup, the reference every output builds it from, is a file in
[patterns/](patterns/).

A pattern that needs a kit's data lives in that kit (marccent-kits, [docs/KITS.md](docs/KITS.md)).

The WordPress versions of the look-only ones (Header, Floating header, Features, Gallery, Call to action, Footer, Call
bar) are blocks in [wp/patterns.cjs](wp/patterns.cjs), beside their markup; marccent-wp's `tools/patterns.js` writes its
`patterns/*.php` from them.

`npm test` fails on a class the theme doesn't define or a `data-component` nothing writes, against the theme this repo
pins (`package.json`); marccent-theme's `npm test` runs it against the theme as it's being changed. Converting each
pattern to each output's blocks and tags is after 1.0 (T-037, marccent-theme issue #32).

`docs/` links to marccent-theme's docs: the rules. This repo's work is the marccent-theme issues labeled `project: marccent-patterns`, on the [Marccent board](https://github.com/users/marcoscenteno89/projects/1).
