'use client'

import { useState } from "react"

import { Dashboard } from "@/components/Dashboard"
import { Genetics } from "@/components/Genetics"
import { Groups } from "@/components/Groups"
import { Plans } from "@/components/Plans"
import { Profile } from "@/components/Profile"
import { Sidebar } from "@/components/Sidebar"

export default function App() {
	const [activeTab, setActiveTab] = useState("dashboard")

	const renderContent = () => {
		switch (activeTab) {
			case "dashboard":
				return <Dashboard />
			case "genetics":
				return <Genetics />
			case "plans":
				return <Plans />
			case "groups":
				return <Groups />
			case "profile":
				return <Profile />
			default:
				return <Dashboard />
		}
	}

	return (
		<div className="min-h-screen bg-slate-50">
			<Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className="ml-64 p-8">{renderContent()}</div>
		</div>
	)
}
