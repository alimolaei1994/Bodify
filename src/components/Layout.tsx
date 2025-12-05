'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Activity, Dna, Calendar, Users, User } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navigation: NavItem[] = [
  { name: 'خانه', href: '/', icon: Home },
  { name: 'ژنتیک', href: '/genetics', icon: Dna },
  { name: 'برنامه من', href: '/my-plan', icon: Calendar },
  { name: 'گروه‌ها', href: '/groups', icon: Users },
  { name: 'پروفایل', href: '/profile', icon: User },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/profile-setup') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Main content */}
      <main className="flex-1 overflow-y-auto pb-16">
        {children}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-around h-16">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 ${
                  isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon
                  className={`h-6 w-6 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`}
                  aria-hidden="true"
                />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
