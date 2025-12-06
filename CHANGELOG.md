# Changelog
All notable changes to this project will be documented in this file.

## 0.4.3
- Fixed npm i rule to run after version update instead of before commit

## 0.4.2
- Added `npm i` rule to `.cursorrules` workflow
- Updated workflow to include dependency installation before build

## 0.4.1
- Added mobile-first design rule to `.cursorrules`
- Made all pages responsive for mobile devices
- Added mobile menu drawer to Sidebar component
- Optimized spacing and padding for mobile screens
- Updated landing page, login page, and dashboard layout for mobile responsiveness

## 0.4.0
- Added landing page with white background design
- Created login page with Google SSO integration
- Restructured dashboard pages under `/dashboard` route
- Moved all dashboard pages (genetics, plans, groups, profile) to `/dashboard/*` routes
- Updated layout to show Sidebar only in dashboard pages
- Updated Sidebar navigation links to point to new dashboard routes

## 0.3.0
- Translate all component texts to Persian
- Persian translation for Genetics component
- Persian translation for Plans component
- Persian translation for Groups component
- Persian translation for Profile component

## 0.2.0
- Added `.cursorrules` file with comprehensive workflow rules
- Integrated RiseStyle logo into Sidebar
- Applied Vazir font and set up RTL layout for the project
- Renamed the application from "AthleteDNA" to "RiseStyle"
- Fixed TypeScript errors in `calendar.tsx` and `chart.tsx`
- Resolved `darkMode` configuration error in `tailwind.config.ts`
- Fixed build errors
- Updated Cursor rules to enforce separate type definitions for each component
- Added a rule to run and fix build errors before committing

## 0.1.0
- Migrated the project to Next.js App Router with `app/` structure and added pages `/genetics`, `/plans`, `/groups`, `/profile`
- Updated Sidebar to use Next.js `Link` and `usePathname` instead of state management
- Fixed PostCSS configuration for Tailwind CSS v4
- Moved global styles to `styles/globals.css` and used the path alias `@/`
