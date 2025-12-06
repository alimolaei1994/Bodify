'use client'

import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User, MapPin, Award, Target, Edit, Instagram, Weight, Ruler, Flame, Heart, Timer, Activity, Wind } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlyStats = [
	{ month: 'Jun', workouts: 18 },
	{ month: 'Jul', workouts: 22 },
	{ month: 'Aug', workouts: 25 },
	{ month: 'Sep', workouts: 28 },
	{ month: 'Oct', workouts: 30 },
	{ month: 'Nov', workouts: 24 }
]

const achievements = [
	{ title: '100 Workouts', emoji: '💯', date: 'Oct 15, 2024', rarity: 'Rare' },
	{ title: '30 Day Streak', emoji: '🔥', date: 'Nov 2, 2024', rarity: 'Epic' },
	{
		title: 'PR Crusher',
		emoji: '🏆',
		date: 'Sep 20, 2024',
		rarity: 'Legendary'
	},
	{ title: 'Early Bird', emoji: '🌅', date: 'Nov 8, 2024', rarity: 'Common' },
	{ title: 'Iron Will', emoji: '💪', date: 'Aug 12, 2024', rarity: 'Rare' },
	{
		title: 'Social Butterfly',
		emoji: '🦋',
		date: 'Oct 28, 2024',
		rarity: 'Common'
	}
]

const personalRecords = [
	{
		metric: 'Calories Burned',
		value: '920 kcal',
		date: 'Nov 12, 2024',
		icon: Flame
	},
	{
		metric: 'Max Heart Rate',
		value: '185 bpm',
		date: 'Nov 10, 2024',
		icon: Heart
	},
	{
		metric: 'Longest Workout',
		value: '120 min',
		date: 'Nov 5, 2024',
		icon: Timer
	},
	{
		metric: 'Highest TRIMP',
		value: '145',
		date: 'Nov 12, 2024',
		icon: Activity
	},
	{
		metric: 'Best VO2 Max',
		value: '52 ml/kg/min',
		date: 'Nov 12, 2024',
		icon: Wind
	}
]

export function Profile() {
	return (
		<div className="space-y-6">
			<Card className="p-6">
				<div className="flex items-start justify-between mb-6">
					<div className="flex items-center gap-6">
						<Avatar className="w-24 h-24">
							<AvatarFallback className="bg-emerald-600 text-white text-2xl">JD</AvatarFallback>
						</Avatar>
						<div>
							<h1 className="mb-1">John Doe</h1>
							<p className="text-slate-600 mb-3">Professional Athlete</p>
							<div className="flex gap-2">
								<Badge>Endurance Athlete</Badge>
								<Badge variant="secondary">Elite Level</Badge>
							</div>
						</div>
					</div>
					<Button variant="outline">
						<Edit className="w-4 h-4 mr-2" />
						Edit Profile
					</Button>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">Total Workouts</p>
						<p className="text-slate-900 text-xl">342</p>
					</div>
					<div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">Current Streak</p>
						<p className="text-slate-900 text-xl">14 days</p>
					</div>
					<div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">Connections</p>
						<p className="text-slate-900 text-xl">186</p>
					</div>
					<div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">Achievements</p>
						<p className="text-slate-900 text-xl">24</p>
					</div>
				</div>
			</Card>

			<Tabs defaultValue="overview" className="w-full">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="achievements">Achievements</TabsTrigger>
					<TabsTrigger value="records">Personal Records</TabsTrigger>
				</TabsList>

				<TabsContent value="overview" className="space-y-6 mt-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<Card className="p-6">
							<h3 className="mb-4">Monthly Activity</h3>
							<ResponsiveContainer width="100%" height={250}>
								<BarChart data={monthlyStats}>
									<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
									<XAxis dataKey="month" stroke="#64748b" />
									<YAxis stroke="#64748b" />
									<Tooltip />
									<Bar dataKey="workouts" fill="#10b981" radius={[8, 8, 0, 0]} />
								</BarChart>
							</ResponsiveContainer>
						</Card>

						<Card className="p-6">
							<h3 className="mb-4">About</h3>
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<User className="w-5 h-5 text-slate-400" />
									<div>
										<p className="text-slate-600 text-sm">Full Name</p>
										<p className="text-slate-900">John Doe</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Instagram className="w-5 h-5 text-slate-400" />
									<div>
										<p className="text-slate-600 text-sm">Instagram</p>
										<p className="text-slate-900">@johndoe_athlete</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Weight className="w-5 h-5 text-slate-400" />
									<div>
										<p className="text-slate-600 text-sm">Weight</p>
										<p className="text-slate-900">75 kg (165 lbs)</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Ruler className="w-5 h-5 text-slate-400" />
									<div>
										<p className="text-slate-600 text-sm">Height</p>
										<p className="text-slate-900">180 cm (5'11")</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<MapPin className="w-5 h-5 text-slate-400" />
									<div>
										<p className="text-slate-600 text-sm">Location</p>
										<p className="text-slate-900">San Francisco, CA</p>
									</div>
								</div>
							</div>
						</Card>
					</div>

					<Card className="p-6">
						<h3 className="mb-4">Training Goals</h3>
						<div className="space-y-4">
							{[
								{
									goal: 'Achieve VO2 Max of 55 ml/kg/min',
									progress: 92,
									target: 'Dec 2024'
								},
								{
									goal: 'Reach weekly TRIMP of 700',
									progress: 96,
									target: 'Dec 2024'
								},
								{
									goal: 'Complete 100 workouts this year',
									progress: 68,
									target: 'Dec 2024'
								}
							].map((goal, index) => (
								<div key={index} className="p-4 border border-slate-200 rounded-lg">
									<div className="flex items-center justify-between mb-2">
										<div className="flex items-center gap-2">
											<Target className="w-5 h-5 text-emerald-600" />
											<h4 className="text-slate-900">{goal.goal}</h4>
										</div>
										<Badge variant="secondary">{goal.target}</Badge>
									</div>
									<div className="space-y-1">
										<div className="flex justify-between text-sm">
											<span className="text-slate-600">Progress</span>
											<span className="text-slate-900">{goal.progress}%</span>
										</div>
										<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
											<div className="h-full bg-emerald-600" style={{ width: `${goal.progress}%` }} />
										</div>
									</div>
								</div>
							))}
						</div>
					</Card>
				</TabsContent>

				<TabsContent value="achievements" className="mt-6">
					<Card className="p-6">
						<div className="flex items-center justify-between mb-6">
							<div>
								<h3>Achievement Collection</h3>
								<p className="text-slate-600 text-sm">24 of 50 unlocked</p>
							</div>
							<Award className="w-8 h-8 text-yellow-500" />
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{achievements.map((achievement, index) => (
								<div key={index} className="p-4 border-2 border-slate-200 rounded-lg text-center hover:border-emerald-500 transition-colors">
									<div className="text-5xl mb-3">{achievement.emoji}</div>
									<h4 className="text-slate-900 mb-1">{achievement.title}</h4>
									<Badge variant={achievement.rarity === 'Legendary' ? 'default' : 'secondary'} className="mb-2">
										{achievement.rarity}
									</Badge>
									<p className="text-slate-600 text-xs">{achievement.date}</p>
								</div>
							))}
						</div>
					</Card>
				</TabsContent>

				<TabsContent value="records" className="mt-6">
					<Card className="p-6">
						<div className="flex items-center justify-between mb-6">
							<h3>Personal Records</h3>
							<Button className="bg-emerald-600 hover:bg-emerald-700">Add New PR</Button>
						</div>
						<div className="space-y-3">
							{personalRecords.map((record, index) => {
								const Icon = record.icon
								return (
									<div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
										<div className="flex items-center gap-4">
											<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
												<Icon className="w-6 h-6 text-emerald-600" />
											</div>
											<div>
												<h4 className="text-slate-900">{record.metric}</h4>
												<p className="text-slate-600 text-sm">{record.date}</p>
											</div>
										</div>
										<div className="text-right">
											<p className="text-slate-900">{record.value}</p>
										</div>
									</div>
								)
							})}
						</div>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
