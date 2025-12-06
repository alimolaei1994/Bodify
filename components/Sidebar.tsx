'use client'

import { useState } from 'react'
import { Home, Dna, ClipboardList, Users, User, Crown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function Sidebar() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	const menuItems = [
		{ id: 'dashboard', label: 'خانه', icon: Home, href: '/dashboard', free: true },
		{ id: 'genetics', label: 'ژنتیک', icon: Dna, href: '/dashboard/genetics', premium: true },
		{ id: 'plans', label: 'برنامه‌های من', icon: ClipboardList, href: '/dashboard/plans', premium: true },
		{ id: 'groups', label: 'گروه‌ها', icon: Users, href: '/dashboard/groups', premium: true },
		{ id: 'profile', label: 'پروفایل', icon: User, href: '/dashboard/profile', free: true }
	]

	const isActive = (href: string) => {
		if (href === '/dashboard') {
			return pathname === '/dashboard'
		}
		return pathname.startsWith(href)
	}

	return (
		<>
			{/* Mobile Menu Button */}
			<button onClick={() => setIsOpen(!isOpen)} className="md:hidden fixed top-4 right-4 z-50 bg-slate-900 text-white p-2 rounded-lg shadow-lg">
				{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>

			{/* Overlay */}
			{isOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />}

			{/* Sidebar */}
			<div
				className={`w-64 bg-slate-900 text-white h-screen fixed right-0 top-0 flex flex-col z-40 transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
				}`}
			>
				<div className="p-6 border-b border-slate-800">
					<Link href="/dashboard" className="flex items-center gap-2">
						<Image src="/icon.png" alt="RiseStyle" width={32} height={32} className="object-contain" />
						<span className="text-lg font-semibold">RiseStyle</span>
					</Link>
				</div>

				<nav className="flex-1 p-4">
					<div className="space-y-2">
						{menuItems.map(item => {
							const Icon = item.icon
							const active = isActive(item.href)
							return (
								<Link
									key={item.id}
									href={item.href}
									className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
										active ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800'
									}`}
								>
									<Icon className="w-5 h-5" />
									<span className="flex-1 text-right">{item.label}</span>
									{item.premium && <Crown className="w-4 h-4 text-purple-400" />}
								</Link>
							)
						})}
					</div>
				</nav>

				<div className="p-4 border-t border-slate-800">
					<div className="flex items-center gap-3 px-4 py-3">
						<div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">JD</div>
						<div>
							<div>جان دو</div>
							<div className="text-slate-400 text-sm">ورزشکار حرفه‌ای</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
