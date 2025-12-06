import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Dna, Users, Target, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image src="/icon.png" alt="RiseStyle" width={40} height={40} className="object-contain" />
						<span className="text-2xl font-bold text-slate-900">RiseStyle</span>
					</div>
					<Link href="/login">
						<Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50">
							ورود
						</Button>
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-6 py-20 text-center">
				<h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
					پتانسیل ژنتیکی خود را
					<br />
					<span className="text-emerald-600">آزاد کنید</span>
				</h1>
				<p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
					اپلیکیشن اجتماعی تناسب اندام ژنتیکی که به شما کمک می‌کند بر اساس DNA خود تمرین کنید و با ورزشکاران هم‌فکر ارتباط برقرار کنید
				</p>
				<div className="flex gap-4 justify-center">
					<Link href="/login">
						<Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6">
							شروع کنید
							<ArrowRight className="w-5 h-5 mr-2" />
						</Button>
					</Link>
				</div>
			</section>

			{/* Features Section */}
			<section className="container mx-auto px-6 py-20">
				<h2 className="text-3xl font-bold text-slate-900 text-center mb-12">چرا RiseStyle؟</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card className="p-6 bg-white border-slate-200 text-slate-900 shadow-sm">
						<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
							<Dna className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2">تحلیل ژنتیک</h3>
						<p className="text-slate-600">درک عمیق از پتانسیل ورزشی خود با تحلیل جامع DNA و دریافت توصیه‌های شخصی‌سازی شده</p>
					</Card>

					<Card className="p-6 bg-white border-slate-200 text-slate-900 shadow-sm">
						<div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
							<Target className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2">برنامه‌های شخصی</h3>
						<p className="text-slate-600">برنامه‌های تمرینی و تغذیه سفارشی که بر اساس ژنتیک و داده‌های ساعت هوشمند شما طراحی شده‌اند</p>
					</Card>

					<Card className="p-6 bg-white border-slate-200 text-slate-900 shadow-sm">
						<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
							<Users className="w-6 h-6 text-white" />
						</div>
						<h3 className="text-xl font-semibold mb-2">گروه‌های ژنتیکی</h3>
						<p className="text-slate-600">پیوستن به گروه‌های ورزشکاران با ویژگی‌های ژنتیکی مشابه و تمرین در کنار هم</p>
					</Card>
				</div>
			</section>

			{/* Stats Section */}
			<section className="container mx-auto px-6 py-20">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					<div className="text-center">
						<div className="text-4xl font-bold text-emerald-600 mb-2">۱۰۰۰+</div>
						<div className="text-slate-600">ورزشکار فعال</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-emerald-600 mb-2">۵۰+</div>
						<div className="text-slate-600">ژن تحلیل شده</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-emerald-600 mb-2">۹۵٪</div>
						<div className="text-slate-600">رضایت کاربران</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-emerald-600 mb-2">۲۴/۷</div>
						<div className="text-slate-600">پشتیبانی</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="container mx-auto px-6 py-20 text-center">
				<Card className="p-12 bg-gradient-to-br from-emerald-600 to-teal-600 border-0">
					<h2 className="text-3xl font-bold text-white mb-4">آماده شروع هستید؟</h2>
					<p className="text-emerald-50 mb-8 text-lg">همین حالا به جامعه RiseStyle بپیوندید و پتانسیل واقعی خود را کشف کنید</p>
					<Link href="/login">
						<Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-6">
							ورود با گوگل
							<ArrowRight className="w-5 h-5 mr-2" />
						</Button>
					</Link>
				</Card>
			</section>

			{/* Footer */}
			<footer className="container mx-auto px-6 py-8 border-t border-slate-200">
				<div className="flex items-center justify-between text-slate-600">
					<div className="flex items-center gap-2">
						<Image src="/icon.png" alt="RiseStyle" width={24} height={24} className="object-contain" />
						<span>RiseStyle © ۱۴۰۴</span>
					</div>
					<div className="flex gap-6">
						<Link href="#" className="hover:text-slate-900 transition-colors">
							حریم خصوصی
						</Link>
						<Link href="#" className="hover:text-slate-900 transition-colors">
							قوانین
						</Link>
						<Link href="#" className="hover:text-slate-900 transition-colors">
							تماس با ما
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
