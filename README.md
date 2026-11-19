# Lauro Calabria | Portfolio

Personal portfolio of **Lauro Calabria**, a junior full-stack developer based in Porto, Portugal. The site presents his skills, projects, experience, courses and certificates, and lets companies get in touch through a contact form.

The live site is linked in the **Website** field of this repository.

## Features

- **Sections:** About, Skills, Projects, Experience and education, Courses and certificates, Contact.
- **Two languages:** English (default) and Portuguese, switched without reloading the page. The choice is remembered.
- **Light and dark themes:** follows the system preference by default; can be switched manually and is remembered.
- **"Hire me" contact form:** messages are delivered to the owner's email through [Formspree](https://formspree.io).
- **Downloadable CV** in PDF.
- **Back-to-top button** that appears after scrolling.
- **Responsive and accessible:** works from small phones to wide screens, with keyboard navigation, visible focus, a skip link, screen-reader friendly form messages and reduced-motion support.
- **Privacy friendly:** no analytics, no cookies, no third-party fonts or scripts.

## Tech stack

| Area | Choice |
| --- | --- |
| Markup | HTML5 (semantic landmarks) |
| Styling | CSS3 with custom properties (design tokens), no framework |
| Behavior | Vanilla JavaScript (ES2017), no dependencies, no build step |
| Contact form | [Formspree](https://formspree.io) |
| Hosting | GitHub Pages |

## Project structure

```
.
├── index.html                  Page structure and default (English) content
├── css/
│   └── styles.css              All styles, organized by section, with light and dark tokens
├── js/
│   ├── theme.js                Light/dark theme (runs before first paint)
│   ├── translations.js         English and Portuguese texts
│   ├── i18n.js                 Language switcher
│   └── main.js                 Contact form, back-to-top button, profile photo fallback
├── assets/
│   ├── img/                    Profile photo and favicon
│   └── docs/                   CV and certificates (PDF)
├── .nojekyll                   Tells GitHub Pages to skip Jekyll processing
├── .gitignore
└── README.md
```

## Running locally

No installation or build is needed. Clone the repository and either open `index.html` in a browser, or serve the folder with any static server:

```bash
git clone <repository-url>
cd <repository-folder>
python3 -m http.server 8000
# open http://localhost:8000
```

## How it works

### Internationalization

The English text is written directly in `index.html`. Elements with a `data-i18n="key"` attribute are translated at runtime by `js/i18n.js`, using the dictionaries in `js/translations.js`. Attributes such as `aria-label` use `data-i18n-attr="attribute:key"`. Translations are inserted with `textContent`, never as HTML.

### Themes

All colors are CSS variables defined at the top of `css/styles.css`, once for the light theme and once for the dark theme (`:root[data-theme="dark"]`). `js/theme.js` sets the `data-theme` attribute on `<html>` before the page is painted to avoid a flash of the wrong theme.

### Contact form

The form sends the message with `fetch()` to Formspree and shows a translated status message. Before sending, it applies the browser's built-in validation and a hidden honeypot field to discard bot submissions. If the form endpoint is ever invalid, it falls back to opening the visitor's email app with the message pre-filled.

## Security

- **Content Security Policy** (`<meta>` tag in `index.html`): only the site's own scripts and styles can run, there is no inline code, and the only external host allowed is `formspree.io`. GitHub Pages cannot send custom HTTP headers, so protections that require headers (for example `frame-ancestors`) are not available.
- All external links use `rel="noopener noreferrer"`.
- User input and translations are inserted with `textContent`, never `innerHTML`.
- The form endpoint is checked against a strict pattern before use.
- The Formspree form ID is public by design. No secrets or API keys are stored in this repository.

## Accessibility

- Semantic landmarks and a logical heading order.
- Skip link, visible keyboard focus and labels on every form field.
- Form status messages are announced to screen readers (`aria-live`).
- Language and theme controls expose their state (`aria-pressed`).
- Text and controls meet WCAG AA contrast in both themes.
- Smooth scrolling is disabled for visitors who prefer reduced motion.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari.

## Content and reuse

The personal content of this site (texts, photo, CV and certificates) belongs to Lauro Calabria and is not meant to be reused. Feel free to read the code to see how the site is built.

## Contact

Use the "Hire me" form on the live site, or reach out on [LinkedIn](https://www.linkedin.com/in/lauro-calabria/) or [GitHub](https://github.com/LauroCalabria).
