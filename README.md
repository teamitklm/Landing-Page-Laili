- Local images, SVGs, and Montserrat font files, without temporary Figma asset URLs at runtime.
- Keyboard focus styles, labelled carousel controls, and reduced-motion styling.

## Run locally

### Open directly

Open `index.html` in a modern browser. Keep the CSS, JavaScript, and `assets/` folder beside it so relative paths continue to work. No package installation is required.

### Use a local server

For development, open a terminal inside this folder and run:

```sh
python -m http.server 8080
```

On Windows, you can also use the Python launcher:

```powershell
py -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Press `Ctrl+C` in the terminal to stop the server. Python is only needed for this optional server, not for the website itself.

## Project structure

```text
laili-landing-page/
├── index.html       # Content, sections, navigation, and image references
├── styles.css       # Base styling translated from Figma layers
├── layout.css       # Responsive layouts and component overrides
├── app.js           # Carousel interactions and artwork scaling
├── assets/          # Local PNG/SVG images and font files
│   ├── Montserrat.ttf
│   └── Montserrat-OFL.txt
└── README.md
```

`styles.css` loads before `layout.css`. Preserve this order: the second stylesheet adapts the exported layer styles into responsive content groups.

## Customize

### Text and sections

Edit the content in `index.html`. Section IDs and `data-node-id` attributes help identify elements. Preserve anchor IDs unless you also update the links pointing to them.

### Colors and spacing

The main color variables are defined in `styles.css`:

```css
:root {
  --brand: #9f1a1a;
  --blush: #ffdada;
}
```

Some exported gradients contain literal colors, so changing these variables alone will not recolor every layer. Use `layout.css` for layout, spacing, and responsive adjustments.

The mobile breakpoint is 760px. Intermediate widths use scaling based on the original 1440px composition. Layered illustrations use JavaScript and `ResizeObserver` to maintain their proportions.

### Images and logos

Replace files in `assets/`, or update their `src` attributes in `index.html`. Several images use positioned crop wrappers; replacements with different proportions may need CSS changes.

Avoid applying rectangular `box-shadow` effects to transparent cutout wrappers. Those shadows have been removed from the header logo, hero product cutouts, and seminar presenter image.

### Contact links

Search `index.html` for the current destinations:

| Channel | Destination |
| --- | --- |
| WhatsApp | `https://wa.me/6281234226384` |
| Instagram | `https://www.instagram.com/lailibrand/` |
| Facebook | `https://www.facebook.com/lailibrand` |
| TikTok | `https://www.tiktok.com/@lailibrand` |

The seminar link includes a prefilled registration message. Update every occurrence when changing a destination, including the footer.

### Fonts

Montserrat is bundled locally, with its license in `assets/Montserrat-OFL.txt`. Apple Garamond and Poppins were not supplied as font files. Serif headings fall back to Garamond/Georgia, and Poppins falls back to Montserrat. Add appropriately licensed font files and update the CSS to match the original typography more closely.

## Current scope and unfinished integrations

This is a promotional landing page. It does not include checkout, accounts, inventory management, form submission services, or payment processing.

| Item | Current behavior |
| --- | --- |
| Marketplace | Scrolls to the product showcase; no store is connected. |
| Seminar registration | Opens WhatsApp with a prefilled message. |
| Partnership and consultation | Open WhatsApp rather than submitting an on-site form. |
| Pillars “Learn more” | Links to the pillars section; no separate details page exists. |
| Footer utilities | Shipping & Return, Privacy Policy, Term of Use, Wishlist, Compare, and Subscribe remain text labels without destination pages or functionality. |

Confirm the phone number, social accounts, address, product information, and testimonials before publishing.

## Publish

Upload the contents of this folder to a static web host, keeping the directory structure intact. Use `index.html` as the entry document. No build command is required.

After deployment, check that images, fonts, stylesheets, scripts, navigation anchors, and external links resolve correctly at the published URL.

## Verification and maintenance

The implementation has been checked in Chrome at 1440px and 390px widths for image loading, JavaScript errors, page-wide horizontal overflow, and product carousel navigation. Targeted browser checks were also used for the subsequent shadow and paragraph-spacing fixes. This is not a full cross-browser or accessibility audit.

After changes, verify:

1. Desktop and mobile text wrapping, spacing, and artwork crops.
2. Catalogue links and section navigation.
3. Both carousels using buttons, scrolling, and keyboard focus.
4. Contact and social destinations.
5. Missing asset requests and browser console errors.

If an edit does not appear, reload the page or use a hard refresh to bypass cached stylesheets.

## Asset rights

Brand imagery and design content originate from the supplied Figma file. This README does not grant a license for those materials; confirm usage rights with the owner before redistribution. Montserrat's bundled license applies to the font separately.
