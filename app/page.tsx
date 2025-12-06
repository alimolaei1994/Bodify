import { Metadata } from 'next';
import { HomeFeed } from '@/components/home/HomeFeed';

export const metadata: Metadata = {
  title: 'RiseStyle | صفحه اصلی',
  description: 'داشبورد اصلی اپلیکیشن RiseStyle',
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-right">داشبورد من</h1>
      <HomeFeed />
    </main>
  );
}
