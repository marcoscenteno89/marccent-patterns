/*
 * Blocks for the patterns' WordPress versions, as Marccent Blocks' serializer takes them: [ name, attributes, inner ].
 * The serializer saves each with the block's own save(), so the editor opens it as valid blocks (marccent-wp's
 * tools/patterns.js writes its patterns/*.php from them). Attribute names are the settings' full words
 * (marccent-theme's markup/settings.json): verticalPadding, columns. The same helpers as marccent-kits' lib/blocks.cjs.
 */
const B = ( name, attributes = {}, inner = [] ) => [ name, attributes, inner ];
const h = ( level, content, attributes = {} ) => B( 'core/heading', { level, content, ...attributes } );
const p = ( content, className ) => B( 'core/paragraph', className ? { content, className } : { content } );
const section = ( attributes, inner ) => B( 'marccent/section', { verticalPadding: 'pad-y-lg', ...attributes }, inner );
const grid = ( attributes, inner ) => B( 'marccent/grid', attributes, inner );
const stack = ( inner, gap = 'gap-sm' ) => grid( { columns: 1, gap, alignItems: 'items-start' }, inner );
const card = ( inner, attributes = {} ) => B( 'marccent/card', { hover: '', ...attributes }, inner );
const icon = ( name, about, surface = 'bg-primary' ) => B( 'marccent/icon', { icon: name, family: 'fa-solid', surface, label: `${ about } icon` } );
const button = ( label, href, ic = 'arrow-right', color = 'primary' ) => B( 'marccent/button', { label, href, icon: ic, color } );
const buttons = ( ...list ) => grid( { layout: 'row-wrap', gap: 'gap-sm' }, list );
const loop = ( attributes, item ) => B( 'marccent/loop', attributes, item );
const field = ( key, attributes = {} ) => B( 'marccent/field', { key, ...attributes } );

module.exports = { B, h, p, section, grid, stack, card, icon, button, buttons, loop, field };
