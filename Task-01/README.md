# ClinicCare Static Website

Multi-page clinic website prototype built with plain HTML, CSS, and vanilla JavaScript. Blue & white theme showcasing multiple complex responsive layouts (hero split, sidebar grids, masonry gallery, tabs, carousel, accordion).

## Pages
- `index.html` – Home (hero, appointment form, services preview, testimonials carousel, FAQ preview)
- `about.html` – About (sidebar facts, values grid, timeline)
- `services.html` – Services (filterable service cards + sidebar)
- `doctors.html` – Doctors (filterable specialty profiles)
- `departments.html` – Departments (tabbed panels per department)
- `appointment.html` – Appointment booking (full form + sidebar guidance)
- `testimonials.html` – Extended testimonial carousel + cards
- `gallery.html` – Masonry-style gallery (CSS columns + SVG placeholders)
- `blog.html` – Health tips articles (card grid + sidebar)
- `contact.html` – Contact info, map placeholder, message form
- `faq.html` – Accordion FAQ

## Features / Components
- Responsive navigation with mobile toggle
- Design system: CSS variables, grid utilities, cards, pills, badges
- Carousel (autoplay + manual navigation + pagination dots)
- Filter system (services, doctors) via `data-filter-*` attributes
- Tabs (departments) via `data-tab-*` attributes
- Form validation (appointment & contact forms) with inline error messaging
- Accordion (FAQ)
- Masonry gallery using CSS multi-columns

## Technology
Pure front-end: no build tools. All assets are inline or embedded SVG placeholders (replace with real images as needed).

## Running Locally (Windows PowerShell)
```powershell
# Change into project directory
cd "c:\Users\ajity\OneDrive\Desktop\Developers-Arena\Task-01"

# Open index in default browser
start index.html
```
Or serve via a lightweight local server (optional):
```powershell
python -m http.server 8000
start http://localhost:8000/index.html
```

## Customization Tips
- Update color palette by editing CSS variables in `style.css`.
- Add more departments by duplicating tab buttons/panels in `departments.html`.
- Extend carousel slides by appending `.carousel-slide` elements inside `.carousel-track`.
- Replace SVG placeholders in `gallery.html` with actual image files.

## Accessibility Notes
- Buttons include `aria-label` where icon-like.
- Carousel pagination uses focusable buttons; consider adding keyboard arrow handling for enhancement.
- Forms provide `aria-live` region for submission status.

## Next Enhancements (Ideas)
- Add keyboard support for carousel (left/right arrows)
- Persist selected filters via URL parameters
- Lazy-load gallery images
- Add search across blog articles
- Integrate a map embed (Google Maps / OpenStreetMap iframe) on `contact.html`

---
© ClinicCare Prototype