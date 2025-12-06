# Changelog
All notable changes to this project will be documented in this file.

## 0.3.0
- ترجمه تمام متن‌های کامپوننت‌ها به فارسی
- فارسی‌سازی Genetics component
- فارسی‌سازی Plans component
- فارسی‌سازی Groups component
- فارسی‌سازی Profile component

## 0.2.0
- اضافه کردن فایل `.cursorrules` با قوانین workflow کامل
- اضافه کردن لوگوی RiseStyle به Sidebar
- اعمال فونت وزیر و راست‌چین کردن پروژه
- تغییر نام اپلیکیشن از AthleteDNA به RiseStyle
- رفع خطاهای TypeScript در `calendar.tsx` و `chart.tsx`
- رفع خطای `darkMode` در `tailwind.config.ts`
- رفع خطاهای build
- به‌روزرسانی قوانین Cursor برای type definitions جداگانه
- اضافه کردن قانون build قبل از commit

## 0.1.0
- Migrated the project to Next.js App Router with `app/` structure and added pages `/genetics`, `/plans`, `/groups`, `/profile`
- Updated Sidebar to use Next.js `Link` and `usePathname` instead of state management
- Fixed PostCSS configuration for Tailwind CSS v4
- Moved global styles to `styles/globals.css` and used the path alias `@/`
