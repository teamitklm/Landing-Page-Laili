# Laili Brand landing page

Open `index.html` in a browser. No installation or build step is required.

To serve it locally, run `python -m http.server 8080` from this folder and open http://localhost:8080.

Generated from Figma file `qxtxokmFowVKcoGkR9hY46`, screen `1:2` (the supplied link points to its parent page). Includes locally downloaded Figma images and SVGs, a local Montserrat variable font, responsive layouts, catalogue navigation, horizontal product and testimonial carousels, and contact links.

- `styles.css`: translated Figma layer styling, with node IDs retained in HTML for traceability.
- `layout.css`: responsive flow layouts, typography, and interactive controls.
- `app.js`: carousel controls and responsive scaling of composed artwork.
- `assets/`: original exported assets and the Montserrat font/license.

Apple Garamond and Poppins were not supplied as font files. Serif headings fall back to Garamond/Georgia; Poppins falls back to Montserrat. Supply licensed font files to match the original typography more closely.

The design supplies a WhatsApp number and social handles. Partnership and seminar buttons open WhatsApp using that number. Confirm those destinations before publishing. Marketplace currently navigates to the product section. Footer policy/shipping/wishlist/compare/subscribe labels remain text because the design includes no destination pages or service integration.

Verified in Chrome at 1440px and 390px: all image resources load, no JavaScript errors, no page-wide horizontal overflow, and product carousel navigation advances. Desktop composition follows the source; mobile layout is adapted because the Figma file supplies only a desktop frame.
