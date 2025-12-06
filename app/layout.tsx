import type { Metadata } from 'next'
import { Sidebar } from '@/components/Sidebar'
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'RiseStyle - اپلیکیشن اجتماعی تناسب اندام ژنتیکی',
	description: 'اپلیکیشن اجتماعی تناسب اندام ژنتیکی'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fa" dir="rtl">
			<head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirfont@v30.1.0/dist/font-face.css" />
			</head>

			<body>
				<div className="min-h-screen bg-slate-50">
					<Sidebar />
					<div className="mr-64 p-8">{children}</div>
				</div>
			</body>
		</html>
	)
}
