# FindDoc Next.js + Tailwind CSS Conversion

## ✅ What's Been Created

### Configuration Files
- `package.json` - Dependencies for Next.js, React, TypeScript, Tailwind
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind with custom colors (primary: #0077B5, secondary: #00A86B, accent: #FF6B35)
- `postcss.config.js` - PostCSS configuration
- `next.config.js` - Next.js config with static export

### Components
- `src/components/Header.tsx` - Navigation with mobile menu
- `src/components/Footer.tsx` - Footer with 5 columns
- `src/app/layout.tsx` - Root layout with metadata
- `src/app/globals.css` - Global styles + Tailwind directives

### Pages Created
1. ✅ `src/app/page.tsx` - Homepage
2. ✅ `src/app/about/page.tsx` - About Us
3. ✅ `src/app/login/page.tsx` - Login

## 📝 Pages Still to Create (12 pages)

Create these files in `src/app/[page-name]/page.tsx`:

### Main Pages
- `signup/page.tsx` - Registration
- `contact/page.tsx` - Contact form
- `careers/page.tsx` - Job listings
- `sitemap/page.tsx` - Site map

### Doctor Pages
- `doctors/page.tsx` - Doctor directory
- `specialties/page.tsx` - Medical specialties
- `video-consultation/page.tsx` - Telemedicine
- `doctor-profile/page.tsx` - Doctor profile

### Content Pages
- `learn/page.tsx` - Health topics
- `covid-test/page.tsx` - COVID assessment
- `terms/page.tsx` - Terms of Use
- `privacy/page.tsx` - Privacy Policy

## 🚀 How to Run

```bash
cd finddoc-next
npm install
npm run dev
```

Then open http://localhost:3000

## 📁 Project Structure

```
finddoc-next/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              ✅ Homepage
│   │   ├── about/
│   │   │   └── page.tsx          ✅ About
│   │   ├── login/
│   │   │   └── page.tsx          ✅ Login
│   │   ├── signup/               ⏳ TODO
│   │   ├── contact/              ⏳ TODO
│   │   ├── careers/              ⏳ TODO
│   │   ├── doctors/              ⏳ TODO
│   │   ├── specialties/          ⏳ TODO
│   │   ├── video-consultation/   ⏳ TODO
│   │   ├── doctor-profile/       ⏳ TODO
│   │   ├── learn/                ⏳ TODO
│   │   ├── covid-test/           ⏳ TODO
│   │   ├── terms/                ⏳ TODO
│   │   └── privacy/              ⏳ TODO
│   └── components/
│       ├── Header.tsx            ✅
│       └── Footer.tsx            ✅
├── public/
│   └── images/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🎨 Tailwind Classes Reference

### Colors
- `text-primary` / `bg-primary` - Medical Blue (#0077B5)
- `text-secondary` / `bg-secondary` - Medical Green (#00A86B)
- `bg-accent` / `hover:bg-accent-dark` - Orange (#FF6B35)

### Common Patterns
```tsx
// Container
<div className="container mx-auto px-5">

// Page Header
<section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">

// Card
<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">

// Button Primary
<button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">

// Button Outline
<a className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">

// Form Input
<input className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
```

## 📖 Tips for Converting HTML to Next.js

1. **Copy HTML content** from the original `finddoc-clone/*.html` files
2. **Convert `class` to `className`**
3. **Replace `<a href="page.html">` with `<Link href="/page">`** (import from 'next/link')
4. **Add `export const metadata`** for SEO
5. **Use Tailwind classes** instead of inline styles
6. **Create reusable components** for repeated elements (cards, buttons, etc.)

## 🔧 Build for Production

```bash
npm run build
```

This creates a static export in the `dist/` folder.
