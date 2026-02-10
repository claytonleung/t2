# Technical Context - FindDoc Clone

## Technology Stack

### Original (finddoc-clone/)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome or inline SVG
- **Fonts**: System fonts + Google Fonts (if needed)
- **No Backend**: Static HTML site for demonstration

### Next.js (finddoc-next/)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React functional components
- **SEO**: Automatic sitemap generation via `sitemap.ts`

## Color Scheme (Based on Medical/Healthcare Standard)
- **Primary**: #0077B5 (Medical Blue)
- **Secondary**: #00A86B (Medical Green)
- **Accent**: #FF6B35 (Orange for CTAs)
- **Background**: #FFFFFF (White)
- **Text Primary**: #333333 (Dark Gray)
- **Text Secondary**: #666666 (Medium Gray)
- **Border**: #E0E0E0 (Light Gray)
- **Success**: #28A745 (Green)

## Design Patterns
- Clean, minimalist medical aesthetic
- Card-based layout for doctor listings
- Sticky navigation header
- Hero section with prominent search
- Grid layout for specialties
- Responsive breakpoints: 320px, 768px, 1024px, 1440px

## File Structure
```
finddoc-clone/
├── index.html              # Homepage
├── specialties.html        # Specialties listing
├── doctors.html           # Doctor directory
├── about.html             # About us page
├── video-consultation.html # Telemedicine page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript
└── images/                # Image assets
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)