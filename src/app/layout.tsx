import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/index.css"

export const metadata: Metadata = {
	title: "AthleteDNA",
	description: "Genetics and fitness social dashboard"
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-slate-50 min-h-screen">{children}</body>
		</html>
	)
}

