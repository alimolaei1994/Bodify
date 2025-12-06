import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Dna, Users, Target, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="container mx-auto px-4 md:px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image src="/icon.png" alt="RiseStyle" width={32} height={32} className="md:w-10 md:h-10 object-contain" />
						<span className="text-xl md:text-2xl font-bold text-slate-900">RiseStyle</span>
					</div>
					<Link href="/login">
						<Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50 text-sm md:text-base">
							ورود
						</Button>
					</Link>
				</div>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6">
					پتانسیل ژنتیکی خود را
					<br />
					<span className="text-emerald-600">آزاد کنید</span>
				</h1>
				<p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
					اپلیکیشن اجتماعی تناسب اندام ژنتیکی که به شما کمک می‌کند بر اساس DNA خود تمرین کنید و با ورزشکاران هم‌فکر ارتباط برقرار کنید
				</p>
				<div className="flex gap-4 justify-center">
					<Link href="/login">
						<Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
							شروع کنید
							<ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2" />
						</Button>
					</Link>
				</div>
			</section>

			{/* Features Section */}
			<section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
				<h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8 md:mb-12">چرا RiseStyle؟</h2>
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
			<section className="container mx-auto px-4 md:px-6 py-12 md:py-20">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
					<div className="text-center">
						<div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">۱۰۰۰+</div>
						<div className="text-sm md:text-base text-slate-600">ورزشکار فعال</div>
					</div>
					<div className="text-center">
						<div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">۵۰+</div>
						<div className="text-sm md:text-base text-slate-600">ژن تحلیل شده</div>
					</div>
					<div className="text-center">
						<div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">۹۵٪</div>
						<div className="text-sm md:text-base text-slate-600">رضایت کاربران</div>
					</div>
					<div className="text-center">
						<div className="text-2xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">۲۴/۷</div>
						<div className="text-sm md:text-base text-slate-600">پشتیبانی</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="container mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
				<Card className="p-6 md:p-12 bg-gradient-to-br from-emerald-600 to-teal-600 border-0">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">آماده شروع هستید؟</h2>
					<p className="text-emerald-50 mb-6 md:mb-8 text-base md:text-lg">همین حالا به جامعه RiseStyle بپیوندید و پتانسیل واقعی خود را کشف کنید</p>
					<Link href="/login">
						<Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
							ورود با گوگل
							<ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2" />
						</Button>
					</Link>
				</Card>
			</section>

			{/* Footer */}
			<footer className="container mx-auto px-4 md:px-6 py-6 md:py-8 border-t border-slate-200">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600">
					<div className="flex items-center gap-2">
						<Image src="/icon.png" alt="RiseStyle" width={20} height={20} className="md:w-6 md:h-6 object-contain" />
						<span className="text-sm md:text-base">RiseStyle © ۱۴۰۴</span>
					</div>
					<div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm md:text-base">
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
