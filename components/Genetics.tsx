'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { Dna, Activity, Zap, Shield, Heart, TrendingUp, Package, CheckCircle, ArrowRight, Crown, Lock, Trophy } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const geneticTraits = [
	{ trait: 'قدرت', value: 85, color: 'bg-red-500' },
	{ trait: 'استقامت', value: 92, color: 'bg-blue-500' },
	{ trait: 'بازیابی', value: 78, color: 'bg-green-500' },
	{ trait: 'انعطاف‌پذیری', value: 70, color: 'bg-purple-500' },
	{ trait: 'سرعت', value: 88, color: 'bg-yellow-500' }
]

const radarData = [
	{ subject: 'قدرت', A: 85, fullMark: 100 },
	{ subject: 'استقامت', A: 92, fullMark: 100 },
	{ subject: 'بازیابی', A: 78, fullMark: 100 },
	{ subject: 'انعطاف‌پذیری', A: 70, fullMark: 100 },
	{ subject: 'سرعت', A: 88, fullMark: 100 },
	{ subject: 'چابکی', A: 82, fullMark: 100 }
]

const geneticInsights = [
	{
		title: 'ژن ACTN3 - عملکرد سرعتی',
		description: 'شما دارای واریانت RR هستید که با عملکرد نخبه در سرعت و قدرت مرتبط است.',
		recommendation: 'روی حرکات انفجاری و تمرینات مبتنی بر قدرت تمرکز کنید.',
		icon: Zap,
		badge: 'مزیت'
	},
	{
		title: 'ژن ACE - ظرفیت استقامتی',
		description: 'ژنوتیپ II شما نشان‌دهنده پتانسیل عالی استقامتی است.',
		recommendation: 'تمرینات مسافت طولانی برای شما نتایج بهینه خواهد داشت.',
		icon: Activity
	},
	{
		title: 'ژن COL1A1 - ریسک آسیب',
		description: 'واریانت با ریسک متوسط شناسایی شد. پروتکل‌های بهبود یافته بازیابی توصیه می‌شود.',
		recommendation: 'گرم کردن مناسب را در اولویت قرار دهید و کارهای حرکتی را در برنامه خود بگنجانید.',
		icon: Shield
	},
	{
		title: 'ژن PPARGC1A - پاسخ به تمرین',
		description: 'واریانت شما سازگاری بالای تمرینی را نشان می‌دهد.',
		recommendation: 'افزایش تدریجی بار برای شما به ویژه مؤثر خواهد بود.',
		icon: TrendingUp
	}
]

const enrollmentSteps = [
	{
		step: 1,
		title: 'سفارش کیت DNA',
		description: 'کیت تست ژنتیک خود را خریداری کنید و ما آن را ظرف ۳-۵ روز کاری به آدرس شما ارسال می‌کنیم.',
		icon: Package,
		status: 'pending'
	},
	{
		step: 2,
		title: 'جمع‌آوری نمونه',
		description: 'جمع‌آوری ساده نمونه از داخل گونه در خانه. کمتر از ۲ دقیقه با دستورالعمل‌های آسان.',
		icon: Dna,
		status: 'pending'
	},
	{
		step: 3,
		title: 'ارسال نمونه',
		description: 'از برچسب پستی از پیش پرداخت شده برای ارسال نمونه به آزمایشگاه معتبر ما استفاده کنید.',
		icon: CheckCircle,
		status: 'pending'
	},
	{
		step: 4,
		title: 'دریافت نتایج',
		description: 'گزارش ژنتیک تفصیلی را در ۴-۶ هفته با توصیه‌های شخصی‌سازی شده دریافت کنید.',
		icon: TrendingUp,
		status: 'pending'
	}
]

export function Genetics() {
	const [isPremium, setIsPremium] = useState(false) // Set to true to see premium view
	const [testStatus, setTestStatus] = useState<'not-enrolled' | 'kit-ordered' | 'sample-sent' | 'results-ready'>('not-enrolled')

	// Free user view - Enrollment flow
	if (!isPremium) {
		return (
			<div className="space-y-4 md:space-y-6">
				<div>
					<div className="flex items-center gap-2 mb-2">
						<Crown className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
						<Badge className="bg-purple-600 text-white text-xs md:text-sm">ویژگی پریمیوم</Badge>
					</div>
					<h1 className="text-2xl md:text-3xl">پتانسیل ژنتیکی خود را آزاد کنید</h1>
					<p className="text-sm md:text-base text-slate-600">کشف کنید که DNA شما چگونه بر تناسب اندام، تغذیه و عملکرد ورزشی شما تأثیر می‌گذارد</p>
				</div>

				{/* Hero Section */}
				<Card className="p-4 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-96 h-96 opacity-10">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1583912086005-ac9abca6c9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxETkElMjBnZW5ldGljcyUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyOTMxOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt="DNA"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="relative z-10">
						<h2 className="text-purple-900 mb-4">چرا تست ژنتیک؟</h2>
						<p className="text-purple-700 mb-6 max-w-3xl">
							DNA شما کلید درک پتانسیل ورزشی منحصر به فرد شماست. تحلیل ژنتیک جامع ما ژن‌های مرتبط با قدرت، استقامت، بازیابی، متابولیسم و ریسک آسیب را بررسی می‌کند - و بینش‌های مبتنی بر علم برای بهینه‌سازی تمرین و تغذیه شما ارائه می‌دهد.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							<div className="p-4 bg-white rounded-lg border border-purple-200">
								<div className="text-3xl mb-2">🎯</div>
								<h4 className="text-purple-900 mb-1">برنامه‌های شخصی</h4>
								<p className="text-purple-700 text-sm">برنامه‌های تمرینی و تغذیه متناسب با ساختار ژنتیکی خود را دریافت کنید</p>
							</div>
							<div className="p-4 bg-white rounded-lg border border-purple-200">
								<div className="text-3xl mb-2">👥</div>
								<h4 className="text-purple-900 mb-1">گروه خود را پیدا کنید</h4>
								<p className="text-purple-700 text-sm">با ورزشکارانی که ویژگی‌های ژنتیکی مشابه دارند ارتباط برقرار کنید</p>
							</div>
							<div className="p-4 bg-white rounded-lg border border-purple-200">
								<div className="text-3xl mb-2">🏆</div>
								<h4 className="text-purple-900 mb-1">راهنمایی متخصص</h4>
								<p className="text-purple-700 text-sm">با متخصصان تغذیه و مربیان متخصص در تمرینات مبتنی بر ژنتیک کار کنید</p>
							</div>
						</div>
					</div>
				</Card>

				{/* How It Works */}
				<Card className="p-4 md:p-6">
					<h3 className="mb-4 md:mb-6 text-xl md:text-2xl">نحوه کار</h3>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
						{enrollmentSteps.map((step, index) => {
							const Icon = step.icon
							return (
								<div key={step.step} className="relative">
									<div className="flex flex-col items-center text-center">
										<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
											<Icon className="w-8 h-8 text-purple-600" />
										</div>
										<div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mb-3">{step.step}</div>
										<h4 className="text-slate-900 mb-2">{step.title}</h4>
										<p className="text-slate-600 text-sm">{step.description}</p>
									</div>
									{index < enrollmentSteps.length - 1 && <ArrowRight className="hidden md:block absolute top-8 -right-8 w-6 h-6 text-purple-300" />}
								</div>
							)
						})}
					</div>
				</Card>

				{/* What You'll Discover */}
				<Card className="p-4 md:p-6">
					<h3 className="mb-4 md:mb-6 text-xl md:text-2xl">آنچه کشف خواهید کرد</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						<div className="space-y-4">
							<h4 className="text-slate-900">تحلیل ویژگی‌های تناسب اندام</h4>
							<ul className="space-y-3">
								{[
									{ icon: Zap, label: 'پتانسیل قدرت و استحکام' },
									{ icon: Activity, label: 'ظرفیت استقامتی' },
									{ icon: Heart, label: 'VO2 Max و پاسخ قلبی' },
									{ icon: Shield, label: 'ریسک آسیب و سرعت بازیابی' },
									{ icon: Trophy, label: 'در کدام ورزش‌ها استعداد دارید' }
								].map((item, index) => {
									const Icon = item.icon
									return (
										<li key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
											<Icon className="w-5 h-5 text-purple-600" />
											<span className="text-slate-700">{item.label}</span>
										</li>
									)
								})}
							</ul>
						</div>
						<div className="space-y-4">
							<h4 className="text-slate-900">بینش‌های تغذیه</h4>
							<ul className="space-y-3">
								{[
									'متابولیسم کربوهیدرات و چربی',
									'نیازهای مکمل',
									'جذب ویتامین و مواد معدنی',
									'حساسیت‌ها و عدم تحمل غذایی',
									'پاسخ به مکمل و دوپینگ'
								].map((item, index) => (
									<li key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
										<CheckCircle className="w-5 h-5 text-purple-600" />
										<span className="text-slate-700">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Card>

				{/* Pricing */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					<Card className="p-4 md:p-6 border-2 border-slate-200">
						<Badge variant="secondary" className="mb-4">
							تست یک‌باره
						</Badge>
						<h3 className="mb-2">فقط کیت DNA</h3>
						<div className="mb-4">
							<span className="text-slate-900 text-4xl">۱۹۹ دلار</span>
							<span className="text-slate-600"> یک‌باره</span>
						</div>
						<ul className="space-y-3 mb-6">
							{[
								'تست ژنتیک جامع',
								'گزارش تفصیلی تناسب اندام و تغذیه',
								'توصیه‌های شخصی‌سازی شده پایه',
								'دسترسی به داشبورد پروفایل ژنتیک'
							].map((feature, index) => (
								<li key={index} className="flex items-center gap-2 text-slate-700">
									<CheckCircle className="w-4 h-4 text-emerald-600" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
						<Button variant="outline" className="w-full">
							سفارش کیت DNA
						</Button>
					</Card>

					<Card className="p-6 border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 relative">
						<Badge className="bg-purple-600 mb-4">توصیه می‌شود</Badge>
						<div className="absolute top-4 right-4">
							<Crown className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="mb-2">عضویت پریمیوم</h3>
						<div className="mb-4">
							<span className="text-slate-900 text-4xl">۲۹۹ دلار</span>
							<span className="text-slate-600"> + ۲۹ دلار/ماه</span>
						</div>
						<ul className="space-y-3 mb-6">
							{[
								'همه چیز در کیت DNA',
								'برنامه‌های تمرینی شخصی از متخصصان',
								'برنامه‌های تغذیه سفارشی و راهنمای وعده‌های غذایی',
								'پیوستن به گروه‌های انحصاری ویژگی‌های ژنتیکی',
								'مشاوره ماهانه با متخصصان',
								'ردیابی و تحلیل پیشرفت پیشرفته',
								'پشتیبانی و به‌روزرسانی‌های اولویت‌دار'
							].map((feature, index) => (
								<li key={index} className="flex items-center gap-2 text-purple-900">
									<CheckCircle className="w-4 h-4 text-purple-600" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
						<Button className="w-full bg-purple-600 hover:bg-purple-700">دریافت پریمیوم + کیت DNA</Button>
					</Card>
				</div>

				{/* FAQs */}
				<Card className="p-6">
					<h3 className="mb-6">سوالات متداول</h3>
					<div className="space-y-4">
						{[
							{
								q: 'آیا تست DNA ایمن و خصوصی است؟',
								a: 'بله، داده‌های ژنتیک شما رمزگذاری شده و به صورت ایمن ذخیره می‌شوند. ما هرگز داده‌های شما را بدون رضایت صریح با اشخاص ثالث به اشتراک نمی‌گذاریم.'
							},
							{
								q: 'چقدر طول می‌کشد تا نتایج را دریافت کنم؟',
								a: 'بعد از دریافت نمونه شما، ۴-۶ هفته طول می‌کشد تا آزمایشگاه ما DNA شما را پردازش و تحلیل کند.'
							},
							{
								q: 'آیا می‌توانم عضویت پریمیوم را در هر زمان لغو کنم؟',
								a: 'بله، می‌توانید اشتراک ماهانه خود را در هر زمان لغو کنید. شما همچنان به گزارش ژنتیک خود دسترسی خواهید داشت.'
							},
							{
								q: 'برای چه ژن‌هایی تست می‌کنید؟',
								a: 'ما ۵۰+ ژن مرتبط با عملکرد ورزشی را تحلیل می‌کنیم، از جمله ACTN3، ACE، COL1A1، PPARGC1A و بسیاری دیگر مرتبط با تناسب اندام و تغذیه.'
							}
						].map((faq, index) => (
							<div key={index} className="p-4 bg-slate-50 rounded-lg">
								<h4 className="text-slate-900 mb-2">{faq.q}</h4>
								<p className="text-slate-600 text-sm">{faq.a}</p>
							</div>
						))}
					</div>
				</Card>
			</div>
		)
	}

	// Premium user view - Show genetic results
	return (
		<div className="space-y-6">
			<div>
				<div className="flex items-center gap-2 mb-2">
					<Badge className="bg-purple-600 text-white">عضو پریمیوم</Badge>
					<Badge variant="secondary">نتایج آماده</Badge>
				</div>
				<h1>پروفایل ژنتیک شما</h1>
				<p className="text-slate-600">بینش‌های شخصی‌سازی شده بر اساس تحلیل DNA شما</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<Dna className="w-6 h-6 text-emerald-600" />
						<h3>توزیع ویژگی‌های ورزشی</h3>
					</div>
					<ResponsiveContainer width="100%" height={300}>
						<RadarChart data={radarData}>
							<PolarGrid stroke="#e2e8f0" />
							<PolarAngleAxis dataKey="subject" stroke="#64748b" />
							<PolarRadiusAxis stroke="#64748b" />
							<Radar name="پروفایل شما" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
						</RadarChart>
					</ResponsiveContainer>
				</Card>

				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<Heart className="w-6 h-6 text-red-600" />
						<h3>تفکیک ویژگی‌ها</h3>
					</div>
					<div className="space-y-4">
						{geneticTraits.map((trait, index) => (
							<div key={index}>
								<div className="flex justify-between mb-2">
									<span className="text-slate-700">{trait.trait}</span>
									<span className="text-slate-900">{trait.value}%</span>
								</div>
								<div className="h-3 bg-slate-100 rounded-full overflow-hidden">
									<div className={`h-full ${trait.color} transition-all duration-500`} style={{ width: `${trait.value}%` }} />
								</div>
							</div>
						))}
					</div>
					<div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
						<p className="text-emerald-900">
							<strong>امتیاز کلی: ۸۲.۶/۱۰۰</strong>
						</p>
						<p className="text-emerald-700 text-sm mt-1">پروفایل ژنتیک ورزشی در سطح نخبه</p>
					</div>
				</Card>
			</div>

			<Card className="p-6">
				<h3 className="mb-6">بینش‌ها و توصیه‌های ژنتیک</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{geneticInsights.map((insight, index) => {
						const Icon = insight.icon
						return (
							<div key={index} className="p-4 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow">
								<div className="flex items-start justify-between mb-3">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
											<Icon className="w-5 h-5 text-emerald-600" />
										</div>
										<div className="flex-1">
											<h4 className="text-slate-900">{insight.title}</h4>
										</div>
									</div>
									{insight.badge && <Badge>{insight.badge}</Badge>}
								</div>
								<p className="text-slate-600 text-sm mb-3">{insight.description}</p>
								<div className="p-3 bg-blue-50 rounded-md">
									<p className="text-blue-900 text-sm">
										<strong>توصیه:</strong> {insight.recommendation}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</Card>

			<Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
				<div className="flex items-start justify-between">
					<div>
						<h3 className="text-emerald-900 mb-2">برنامه‌های شخصی شما آماده است!</h3>
						<p className="text-emerald-700 mb-4">
							بر اساس پروفایل ژنتیک و داده‌های ساعت هوشمند شما، متخصصان ما برنامه‌های تمرینی و تغذیه سفارشی فقط برای شما ایجاد کرده‌اند.
						</p>
						<Button className="bg-emerald-600 hover:bg-emerald-700">
							مشاهده برنامه‌های شخصی شما
							<ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					</div>
					<div className="text-6xl">📋</div>
				</div>
			</Card>
		</div>
	)
}
