import { Sidebar } from '@/components/Sidebar'

export default function DashboardLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="min-h-screen bg-slate-50">
			<Sidebar />
			<div className="mr-64 p-8">{children}</div>
		</div>
	)
}

