import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'AthleteDNA - Genetics Fitness Social App',
	description: 'Genetics Fitness Social App'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<div className="min-h-screen bg-slate-50">
					<Sidebar />
					<div className="ml-64 p-8">{children}</div>
				</div>
			</body>
		</html>
	)
}
