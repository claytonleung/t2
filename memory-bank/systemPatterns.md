# System Patterns - FindDoc Clone

## Architecture
Static HTML website with multi-page navigation. No backend required for this clone.

## Page Structure Pattern
Each page follows consistent structure:
1. **Header/Navigation** - Logo, main nav, login/signup, language selector
2. **Main Content** - Page-specific content
3. **Footer** - Multi-column links, copyright, social media

## Component Patterns

### Navigation Header
- Fixed/sticky at top
- Logo on left
- Main menu items: Find a Doctor, Specialties, Video Consultation, Learn, About
- Right side: Language selector, Login/Sign up button

### Hero Section (Homepage)
- Large headline: "Find and Book Doctors in Hong Kong"
- Subheadline/tagline
- Prominent search bar with filters
- Background image or gradient

### Doctor Card Pattern
- Doctor photo (circular)
- Name (Dr. prefix)
- Specialty badge
- Location tag(s)
- Action buttons: Book Now, View Profile, WhatsApp

### Specialty Card Pattern
- Icon representing specialty
- Specialty name
- Brief description
- Common conditions list
- "Book Doctor" button

### Footer Pattern
- 4-5 column layout
- Categories: Log In/Sign up, Find a Doctor, Learn, Resources, About
- Copyright and legal links at bottom
- Social media icons

## Responsive Patterns
- Mobile: Single column, hamburger menu
- Tablet: 2-column grid
- Desktop: 3-4 column grid, full navigation

## Interactive Patterns
- Hover effects on cards (lift/shadow)
- Button states (default, hover, active)
- Form focus states
- Smooth scrolling