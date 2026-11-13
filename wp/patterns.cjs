/*
 * The look-only patterns' WordPress versions (marccent-theme#99): each one's blocks beside its markup in patterns/, read
 * by marccent-wp's tools/patterns.js, which writes its patterns/*.php from them. A pattern that reads a kit's data (a
 * local business's hero, services, questions, contact, locations) is that kit's (marccent-kits).
 *
 * [ slug, title, categories, description, keywords, blocks ]
 */
const { B, h, p, section, grid, stack, card, icon, button, buttons, loop, field } = require( './blocks.cjs' );

// The header's two ends: the logo and name; the Primary menu folding behind a button on phones, and what Appearance →
// Marccent theme, Visitors allows.
const brand = () => grid( { layout: 'auto-cols', gap: 'gap-sm', alignItems: 'items-center' }, [
	B( 'core/site-logo', { width: 40 } ),
	B( 'core/site-title', { level: 0, className: 'fw-bold' } ),
] );
const navigation = () => grid( { layout: 'auto-cols', gap: 'gap-sm', alignItems: 'items-center' }, [
	B( 'marccent/menu', { location: 'primary', layout: 'auto-cols', fold: true, className: 'menu-quiet' } ),
	B( 'marccent/mini-theme-editor', { visitors: true } ),
] );

module.exports = [
	// Header (docs/PATTERNS.md, patterns/header.html).
	[ 'header', 'Header: logo, main menu and theme controls', [ 'header', 'marccent' ], 'The site’s header, sticky at the top: the logo and name, the menu in the Primary location (Appearance → Menus) folding behind a menu button on phones, and what Appearance → Marccent theme, Visitors allows. Add a button for a call to action.', [ 'header', 'menu', 'navigation' ], [
		section( { as: 'header', verticalPadding: 'pad-y-sm', surface: 'bg', className: 'border-bottom sticky-top' }, [
			grid( { layout: 'auto-cols', gap: 'gap-sm', alignItems: 'items-center', className: 'cols-between' }, [ brand(), navigation() ] ),
		] ),
	] ],
	// Floating header (patterns/header-floating.html): a pill over the hero, see-through until the page scrolls.
	[ 'header-floating', 'Header: floating over the hero', [ 'header', 'marccent' ], 'The header as a pill floating over the top of the page: see-through while the page is at its top, solid once it scrolls; the first section (a hero) starts under it. The same parts as the Header.', [ 'header', 'menu', 'navigation', 'floating' ], [
		section( { as: 'header', verticalPadding: 'pad-y-sm', className: 'fixed-top pe-none' }, [
			grid( { layout: 'auto-cols', gap: 'gap-sm', alignItems: 'items-center', className: 'cols-between pill pad-x pad-y-sm bg border shadow solid-on-scroll pe-auto' }, [ brand(), navigation() ] ),
		] ),
	] ],
	[ 'features', 'Why us: three points with icons', [ 'marccent', 'text' ], 'Three reasons to choose the business, each with an icon.', [ 'features', 'benefits', 'icons' ], [
		section( { surface: 'bg' }, [
			h( 2, 'Why customers choose us' ),
			grid( { columns: 3, gap: 'gap-lg' }, [
				[ 'shield-halved', 'Licensed and insured', 'Say what that means for the customer.' ],
				[ 'clock', 'On time', 'A promise the business keeps.' ],
				[ 'star', 'Rated by neighbors', 'A number people can check.' ],
			].map( ( [ ic, title, text ] ) => card( [ icon( ic, title ), h( 3, title ), p( text ) ] ) ) ),
		] ),
	] ],
	[ 'gallery', 'Gallery: a field group’s photos', [ 'gallery', 'marccent' ], 'The gallery page’s Photos rows (a repeating field group: image, caption), in a grid, with a filter visitors can use. Needs the Photos group on the gallery page.', [ 'gallery', 'photos', 'loop' ], [
		section( {}, [
			h( 2, 'Our work' ),
			loop( { source: 'photos', from: 'gallery', perPage: 24, columns: 3, gap: 'gap-sm', paginate: true }, [
				field( 'image' ),
				field( 'caption', { tag: 'p' } ),
			] ),
		] ),
	] ],
	[ 'cta', 'Call to action band', [ 'call-to-action', 'marccent' ], 'A band asking for the next step, in the brand color.', [ 'cta', 'quote', 'call' ], [
		section( { surface: 'bg-primary' }, [
			grid( { columns: 2, gap: 'gap-lg', alignItems: 'items-center' }, [
				stack( [ h( 2, 'Ready to start?' ), p( 'Free estimates, an answer within a day.' ) ] ),
				buttons( button( 'Request a quote', '#form', 'file-signature', 'light' ), button( 'Call (555) 555-0100', 'tel:+15555550100', 'phone', 'secondary' ) ),
			] ),
		] ),
	] ],
	// Footer (patterns/footer.html, marccent-theme#103): the brand and a line beside link columns (a menu each), then the
	// legal row and the social icons. id="footer", so the theme pauses its animations while it's scrolled away.
	[ 'footer', 'Footer: brand, link columns, legal row and social icons', [ 'footer', 'marccent' ], 'The site’s footer: the logo, name and a line about the site beside columns of links (a menu each, Appearance → Menus), then the copyright with the legal links and the social icons. Every part is optional: delete what the site doesn’t have.', [ 'footer', 'menu', 'links', 'social', 'legal' ], [
		section( { as: 'footer', anchor: 'footer', verticalPadding: 'pad-y-lg', surface: 'bg', gap: 'gap-lg', className: 'border-top' }, [
			grid( { layout: 'cols', columns: 2, gap: 'gap-lg', className: 'layout-1-2' }, [
				stack( [
					B( 'core/site-logo', { width: 48 } ),
					B( 'core/site-title', { level: 0, className: 'fw-bold' } ),
					B( 'core/site-tagline', { className: 'opacity-75' } ),
				] ),
				grid( { layout: 'cols', columns: 2, minimumColumnWidth: '10rem', gap: 'gap-lg' }, [
					stack( [ h( 2, 'Services', { className: 'h6' } ), B( 'marccent/menu', { menu: 'footer-services', label: 'Services', layout: 'fixed', className: 'cols-1 gap-0' } ) ] ),
					stack( [ h( 2, 'Company', { className: 'h6' } ), B( 'marccent/menu', { menu: 'footer-company', label: 'Company', layout: 'fixed', className: 'cols-1 gap-0' } ) ] ),
				] ),
			] ),
			grid( { layout: 'auto-cols', gap: 'gap-sm', alignItems: 'items-center', className: 'layout-ends border-top pad-y' }, [
				p( '<small>© 2026 The business name</small>', 'fs-sm opacity-75' ),
				B( 'marccent/menu', { menu: 'footer-legal', label: 'Footer legal', layout: 'auto-cols', className: 'fs-sm' } ),
				B( 'marccent/menu', { menu: 'social', label: 'Social', layout: 'auto-cols', iconOnly: true, className: 'col-last' } ),
			] ),
		] ),
	] ],
	// Call bar (patterns/call-bar.html, marccent-theme#137): Call and Get a quote along the bottom on phones only.
	[ 'call-bar', 'Call bar: Call and Get a quote on phones', [ 'footer', 'marccent' ], 'Two buttons fixed along the bottom of the window on phones only: Call (the business’s number) and Get a quote. Put it at the end of the footer; replace the number and the quote page.', [ 'call', 'phone', 'quote', 'mobile', 'sticky' ], [
		B( 'core/spacer', { height: '4.5rem', className: 'd-md-none' } ),
		grid( { layout: 'cols', columns: 2, gap: 'gap-sm', className: 'fixed-bottom d-md-none bg border-top pad-sm' }, [
			B( 'marccent/button', { label: 'Call', href: 'tel:+15555550100', icon: 'phone', color: 'secondary', className: 'w-100' } ),
			B( 'marccent/button', { label: 'Get a quote', href: '/contact/', icon: 'file-signature', color: 'primary', className: 'w-100' } ),
		] ),
	] ],
];
