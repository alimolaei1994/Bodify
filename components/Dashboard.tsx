'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Activity, Flame, Heart, Timer, Trophy, TrendingUp, Crown, Medal, Zap, Watch, Wind } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const weeklyData = [
	{
		day: 'دوشنبه',
		calories: 520,
		heartRate: 142,
		duration: 45,
		trimp: 82,
		vo2max: 48
	},
	{
		day: 'سه‌شنبه',
		calories: 680,
		heartRate: 155,
		duration: 60,
		trimp: 105,
		vo2max: 49
	},
	{
		day: 'چهارشنبه',
		calories: 450,
		heartRate: 138,
		duration: 40,
		trimp: 68,
		vo2max: 47
	},
	{
		day: 'پنج‌شنبه',
		calories: 820,
		heartRate: 168,
		duration: 75,
		trimp: 128,
		vo2max: 51
	},
	{
		day: 'جمعه',
		calories: 590,
		heartRate: 148,
		duration: 50,
		trimp: 88,
		vo2max: 48
	},
	{
		day: 'شنبه',
		calories: 920,
		heartRate: 172,
		duration: 90,
		trimp: 145,
		vo2max: 52
	},
	{
		day: 'یکشنبه',
		calories: 340,
		heartRate: 128,
		duration: 35,
		trimp: 55,
		vo2max: 46
	}
]

const weeklyLeaderboard = [
	{
		rank: 1,
		name: 'Sarah Martinez',
		avatar: 'SM',
		points: 2850,
		badge: '🔥',
		trimp: 685,
		vo2max: 54
	},
	{
		rank: 2,
		name: 'Marcus Johnson',
		avatar: 'MJ',
		points: 2720,
		badge: '💪',
		trimp: 658,
		vo2max: 53
	},
	{
		rank: 3,
		name: 'شما (جان دو)',
		avatar: 'JD',
		points: 2650,
		badge: '⚡',
		trimp: 671,
		vo2max: 50,
		isUser: true
	},
	{
		rank: 4,
		name: 'Emily Chen',
		avatar: 'EC',
		points: 2580,
		badge: '🏃',
		trimp: 645,
		vo2max: 51
	},
	{
		rank: 5,
		name: 'David Thompson',
		avatar: 'DT',
		points: 2420,
		badge: '💯',
		trimp: 612,
		vo2max: 49
	},
	{
		rank: 6,
		name: 'Jessica Park',
		avatar: 'JP',
		points: 2350,
		badge: '🎯',
		trimp: 598,
		vo2max: 48
	},
	{
		rank: 7,
		name: 'Ryan Foster',
		avatar: 'RF',
		points: 2280,
		badge: '⭐',
		trimp: 585,
		vo2max: 47
	},
	{
		rank: 8,
		name: 'Maya Patel',
		avatar: 'MP',
		points: 2190,
		badge: '🚀',
		trimp: 568,
		vo2max: 46
	}
]

const activeChallenges = [
	{
		title: 'قهرمان سوزاندن کالری',
		description: 'چه کسی بیشترین کالری را این هفته می‌سوزاند؟',
		icon: Flame,
		color: 'orange',
		currentLeader: 'سارا مارتینز',
		yourRank: 3,
		yourProgress: 4980,
		leaderProgress: 5420,
		endsIn: '۲ روز',
		prize: '۵۰۰ امتیاز',
		unit: 'کالری'
	},
	{
		title: 'استاد TRIMP',
		description: 'بالاترین امتیاز TRIMP این هفته',
		icon: Activity,
		color: 'purple',
		currentLeader: 'سارا مارتینز',
		yourRank: 2,
		yourProgress: 671,
		leaderProgress: 685,
		endsIn: '۲ روز',
		prize: '۴۵۰ امتیاز',
		unit: 'TRIMP'
	},
	{
		title: 'نخبه VO2 Max',
		description: 'بهترین عملکرد متوسط VO2 max',
		icon: Wind,
		color: 'blue',
		currentLeader: 'سارا مارتینز',
		yourRank: 4,
		yourProgress: 50,
		leaderProgress: 54,
		endsIn: '۲ روز',
		prize: '۴۰۰ امتیاز',
		unit: 'میلی‌لیتر/کیلوگرم/دقیقه'
	}
]

export function Dashboard() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1>خوش آمدید، جان!</h1>
					<p className="text-slate-600">عملکرد هفتگی و چالش‌های شما</p>
				</div>
				<div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-200">
					<Watch className="w-5 h-5 text-emerald-600" />
					<div>
						<p className="text-emerald-900 text-sm">اپل واچ متصل است</p>
						<p className="text-emerald-600 text-xs">همگام‌سازی ۲ دقیقه پیش</p>
					</div>
				</div>
			</div>

			{/* Quick Stats from Smartwatch */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-slate-600 text-sm">کل کالری</p>
							<p className="text-slate-900">۴,۳۲۰ کالری</p>
							<p className="text-emerald-600 text-xs mt-1">+۱۲٪ نسبت به هفته قبل</p>
						</div>
						<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
							<Flame className="w-6 h-6 text-orange-600" />
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-slate-600 text-sm">میانگین ضربان قلب</p>
							<p className="text-slate-900">۱۵۲ ضربه در دقیقه</p>
							<p className="text-emerald-600 text-xs mt-1">+۵٪ نسبت به هفته قبل</p>
						</div>
						<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
							<Heart className="w-6 h-6 text-red-600" />
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-slate-600 text-sm">زمان تمرین</p>
							<p className="text-slate-900">۳۹۵ دقیقه</p>
							<p className="text-emerald-600 text-xs mt-1">+۸٪ نسبت به هفته قبل</p>
						</div>
						<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
							<Timer className="w-6 h-6 text-blue-600" />
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-slate-600 text-sm">TRIMP</p>
							<p className="text-slate-900">۶۷۱</p>
							<p className="text-emerald-600 text-xs mt-1">+۱۵٪ نسبت به هفته قبل</p>
						</div>
						<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
							<Activity className="w-6 h-6 text-purple-600" />
						</div>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-slate-600 text-sm">VO2 Max</p>
							<p className="text-slate-900">۵۰ میلی‌لیتر/کیلوگرم/دقیقه</p>
							<p className="text-emerald-600 text-xs mt-1">+۴٪ نسبت به هفته قبل</p>
						</div>
						<div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
							<Wind className="w-6 h-6 text-teal-600" />
						</div>
					</div>
				</Card>
			</div>

			{/* Analytics Charts */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Card className="p-6">
					<h3 className="mb-4">کالری و ضربان قلب</h3>
					<ResponsiveContainer width="100%" height={250}>
						<AreaChart data={weeklyData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
							<XAxis dataKey="day" stroke="#64748b" />
							<YAxis stroke="#64748b" />
							<Tooltip />
							<Area type="monotone" dataKey="calories" stroke="#f97316" fill="#f9731620" strokeWidth={2} />
						</AreaChart>
					</ResponsiveContainer>
				</Card>

				<Card className="p-6">
					<h3 className="mb-4">مدت زمان تمرین</h3>
					<ResponsiveContainer width="100%" height={250}>
						<BarChart data={weeklyData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
							<XAxis dataKey="day" stroke="#64748b" />
							<YAxis stroke="#64748b" />
							<Tooltip />
							<Bar dataKey="duration" fill="#3b82f6" radius={[8, 8, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</Card>

				<Card className="p-6">
					<h3 className="mb-4">امتیاز TRIMP</h3>
					<ResponsiveContainer width="100%" height={250}>
						<LineChart data={weeklyData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
							<XAxis dataKey="day" stroke="#64748b" />
							<YAxis stroke="#64748b" />
							<Tooltip />
							<Line type="monotone" dataKey="trimp" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7', r: 5 }} />
						</LineChart>
					</ResponsiveContainer>
				</Card>

				<Card className="p-6">
					<h3 className="mb-4">پیشرفت VO2 Max</h3>
					<ResponsiveContainer width="100%" height={250}>
						<AreaChart data={weeklyData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
							<XAxis dataKey="day" stroke="#64748b" />
							<YAxis stroke="#64748b" domain={[40, 55]} />
							<Tooltip />
							<Area type="monotone" dataKey="vo2max" stroke="#14b8a6" fill="#14b8a620" strokeWidth={2} />
						</AreaChart>
					</ResponsiveContainer>
				</Card>
			</div>

			{/* Weekly Challenges */}
			<Card className="p-6">
				<div className="flex items-center justify-between mb-6">
					<div>
						<h3>چالش‌های هفتگی</h3>
						<p className="text-slate-600 text-sm">با دیگران رقابت کنید و امتیاز کسب کنید</p>
					</div>
					<Badge className="bg-amber-100 text-amber-900 hover:bg-amber-100">
						<Trophy className="w-3 h-3 mr-1" />
						پایان در ۲ روز
					</Badge>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{activeChallenges.map((challenge, index) => {
						const Icon = challenge.icon
						const progressPercent = (challenge.yourProgress / challenge.leaderProgress) * 100

						return (
							<div
								key={index}
								className={`p-5 border-2 rounded-lg hover:shadow-md transition-all ${
									challenge.yourRank === 1 ? 'border-amber-400 bg-amber-50' : 'border-slate-200 bg-white'
								}`}
							>
								<div className="flex items-start justify-between mb-3">
									<div className={`w-12 h-12 bg-${challenge.color}-100 rounded-full flex items-center justify-center`}>
										<Icon className={`w-6 h-6 text-${challenge.color}-600`} />
									</div>
									{challenge.yourRank === 1 && <Crown className="w-6 h-6 text-amber-500" />}
								</div>

								<h4 className="text-slate-900 mb-1">{challenge.title}</h4>
								<p className="text-slate-600 text-sm mb-4">{challenge.description}</p>

								<div className="space-y-3">
									<div className="flex justify-between text-sm">
										<span className="text-slate-600">رتبه شما</span>
										<Badge variant={challenge.yourRank <= 3 ? 'default' : 'secondary'}>#{challenge.yourRank}</Badge>
									</div>

									<div className="space-y-1">
										<div className="flex justify-between text-sm">
											<span className="text-slate-600">پیشرفت</span>
											<span className="text-slate-900">
												{challenge.yourProgress.toLocaleString()} {challenge.unit}
											</span>
										</div>
										<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
											<div className={`h-full bg-${challenge.color}-500 transition-all`} style={{ width: `${progressPercent}%` }} />
										</div>
										<p className="text-slate-500 text-xs">
											رتبه اول: {challenge.leaderProgress.toLocaleString()} {challenge.unit}
										</p>
									</div>

									<div className="pt-3 border-t border-slate-200">
										<div className="flex justify-between items-center text-sm">
											<span className="text-slate-600">جایزه</span>
											<span className="text-emerald-600">{challenge.prize}</span>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</Card>

			{/* Rankings Leaderboard */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<Card className="lg:col-span-2 p-6">
					<div className="flex items-center justify-between mb-6">
						<div>
							<h3>جدول رده‌بندی هفتگی</h3>
							<p className="text-slate-600 text-sm">بهترین عملکردهای این هفته</p>
						</div>
						<Button variant="outline" size="sm">
							مشاهده همه رتبه‌ها
						</Button>
					</div>

					<div className="space-y-2">
						{weeklyLeaderboard.map(user => (
							<div
								key={user.rank}
								className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
									user.isUser
										? 'bg-emerald-50 border-2 border-emerald-500'
										: user.rank <= 3
										? 'bg-amber-50 border border-amber-200'
										: 'bg-slate-50 border border-slate-200'
								}`}
							>
								<div className="flex items-center gap-3 flex-1">
									<div className="relative">
										{user.rank === 1 && <Crown className="w-5 h-5 text-amber-500 absolute -top-2 -right-2" />}
										<div
											className={`w-8 h-8 rounded-full flex items-center justify-center ${
												user.rank === 1
													? 'bg-amber-500 text-white'
													: user.rank === 2
													? 'bg-slate-400 text-white'
													: user.rank === 3
													? 'bg-orange-600 text-white'
													: 'bg-slate-300 text-slate-700'
											}`}
										>
											{user.rank}
										</div>
									</div>

									<Avatar className="w-10 h-10">
										<AvatarFallback className={user.isUser ? 'bg-emerald-600 text-white' : 'bg-slate-600 text-white'}>{user.avatar}</AvatarFallback>
									</Avatar>

									<div className="flex-1">
										<div className="flex items-center gap-2">
											<h4 className={user.isUser ? 'text-emerald-900' : 'text-slate-900'}>{user.name}</h4>
											<span className="text-lg">{user.badge}</span>
										</div>
										<p className="text-slate-600 text-sm">
											TRIMP: {user.trimp} • VO2 Max: {user.vo2max} ml/kg/min
										</p>
									</div>

									<div className="text-right">
										<p className={`${user.isUser ? 'text-emerald-900' : 'text-slate-900'}`}>{user.points.toLocaleString()} pts</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</Card>

				<Card className="p-6">
					<h3 className="mb-4">عملکرد شما</h3>
					<div className="space-y-4">
						<div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
							<div className="flex items-center gap-2 mb-2">
								<TrendingUp className="w-5 h-5 text-emerald-600" />
								<span className="text-emerald-900">پیشرفت عالی!</span>
							</div>
							<p className="text-emerald-700 text-sm">شما در ۱۰٪ برتر کاربران این هفته هستید. ادامه دهید!</p>
						</div>

						<div>
							<div className="flex justify-between text-sm mb-2">
								<span className="text-slate-600">پیشرفت هدف هفتگی</span>
								<span className="text-slate-900">۸۲٪</span>
							</div>
							<Progress value={82} className="h-3" />
							<p className="text-slate-500 text-xs mt-1">۱,۲۰۰ کالری دیگر تا هدف</p>
						</div>

						<div className="space-y-2">
							<h4 className="text-slate-900">دستاوردهای اخیر</h4>
							{[
								{ icon: '🔥', text: '۷ روز متوالی', time: 'امروز' },
								{ icon: '🏆', text: 'رتبه ۵ برتر', time: 'دیروز' },
								{
									icon: '⚡',
									text: 'دستیابی به ۲,۰۰۰ امتیاز',
									time: '۲ روز پیش'
								}
							].map((achievement, index) => (
								<div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
									<span className="text-2xl">{achievement.icon}</span>
									<div className="flex-1">
										<p className="text-slate-900 text-sm">{achievement.text}</p>
										<p className="text-slate-500 text-xs">{achievement.time}</p>
									</div>
								</div>
							))}
						</div>

						<Button className="w-full bg-emerald-600 hover:bg-emerald-700">
							<Zap className="w-4 h-4 mr-2" />
							همگام‌سازی ساعت
						</Button>
					</div>
				</Card>
			</div>

			{/* Premium Upgrade CTA */}
			<Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
				<div className="flex items-center justify-between">
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-2">
							<Crown className="w-6 h-6 text-purple-600" />
							<h3 className="text-purple-900">پتانسیل ژنتیکی خود را آزاد کنید</h3>
						</div>
						<p className="text-purple-700 mb-4">
							برنامه‌های تمرینی و تغذیه شخصی‌سازی شده بر اساس DNA خود را دریافت کنید. به گروه‌های انحصاری با ویژگی‌های ژنتیکی مشابه بپیوندید و راهنمایی متخصص دریافت
							کنید.
						</p>
						<ul className="space-y-2 mb-6">
							{[
								'کیت تست ژنتیک درب منزل شما',
								'تحلیل دقیق DNA برای تناسب اندام و تغذیه',
								'برنامه‌های شخصی از مربیان و متخصصان تغذیه',
								'گروه‌های انحصاری با ویژگی‌های مشابه'
							].map((feature, index) => (
								<li key={index} className="flex items-center gap-2 text-purple-900 text-sm">
									<Medal className="w-4 h-4 text-purple-600" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<Button className="bg-purple-600 hover:bg-purple-700">ارتقا به نسخه پریمیوم - شروع تست DNA</Button>
					</div>
					<div className="hidden lg:block text-8xl ml-8">🧬</div>
				</div>
			</Card>
		</div>
	)
}
