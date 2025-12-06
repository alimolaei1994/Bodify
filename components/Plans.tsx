'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Dumbbell, Apple, Calendar, Clock, Target, User, CheckCircle, Crown, Lock, Download, MessageCircle } from 'lucide-react'

const workoutPlan = {
	name: 'پروتکل عملکرد قلبی',
	duration: '۱۲ هفته',
	expert: {
		name: 'دکتر سارا میچل',
		title: 'ژنتیک‌دان ورزشی و مربی',
		avatar: 'SM'
	},
	basedOn: ['ژنوتیپ ACE II', 'پتانسیل بالای VO2 Max', 'اهداف TRIMP', 'داده‌های ساعت هوشمند'],
	weeklySchedule: [
		{
			day: 'دوشنبه',
			focus: 'اینتروال VO2 Max',
			duration: '۶۰ دقیقه',
			targetTrimp: 95,
			targetVO2: 49,
			exercises: [
				{ name: '5 min warm-up', intensity: 'Zone 2', hr: '120-140 bpm' },
				{
					name: 'VO2 Max intervals',
					intensity: '8x3 min',
					hr: '90-95% max HR'
				},
				{
					name: 'Recovery jog',
					intensity: '2 min between',
					hr: '60-70% max HR'
				},
				{ name: 'Cool down', intensity: '5 min', hr: 'Zone 1' }
			]
		},
		{
			day: 'سه‌شنبه',
			focus: 'قلبی حالت پایدار',
			duration: '۷۵ دقیقه',
			targetTrimp: 105,
			targetVO2: 48,
			exercises: [
				{ name: 'Zone 2 Running', intensity: '60 min', hr: '140-155 bpm' },
				{ name: 'Core & Mobility', intensity: '15 min', hr: 'Low intensity' }
			]
		},
		{
			day: 'چهارشنبه',
			focus: 'تمرین آستانه',
			duration: '۵۰ دقیقه',
			targetTrimp: 88,
			targetVO2: 50,
			exercises: [
				{ name: 'Warm-up', intensity: '10 min', hr: 'Zone 2' },
				{
					name: 'Lactate threshold run',
					intensity: '25 min',
					hr: '80-85% max HR'
				},
				{
					name: 'Recovery intervals',
					intensity: '3x3 min',
					hr: '70-75% max HR'
				},
				{ name: 'Cool down', intensity: '5 min', hr: 'Zone 1' }
			]
		},
		{
			day: 'پنج‌شنبه',
			focus: 'بازیابی فعال',
			duration: '۳۰ دقیقه',
			targetTrimp: 35,
			targetVO2: 45,
			exercises: [
				{
					name: 'Light cycling or walking',
					intensity: '20 min',
					hr: 'Zone 1-2'
				},
				{ name: 'Stretching & Yoga', intensity: '10 min', hr: 'Minimal' }
			]
		},
		{
			day: 'جمعه',
			focus: 'قلبی ترکیبی',
			duration: '۶۵ دقیقه',
			targetTrimp: 110,
			targetVO2: 51,
			exercises: [
				{ name: 'Tempo cycling', intensity: '30 min', hr: '75-80% max HR' },
				{ name: 'Rowing intervals', intensity: '5x4 min', hr: '85-90% max HR' },
				{ name: 'Swimming cool down', intensity: '10 min', hr: 'Zone 2' }
			]
		},
		{
			day: 'شنبه',
			focus: 'استقامت طولانی',
			duration: '۹۰ دقیقه',
			targetTrimp: 128,
			targetVO2: 49,
			exercises: [
				{ name: 'Long steady run', intensity: '80 min', hr: 'Zone 2-3' },
				{ name: 'Strides', intensity: '4x100m', hr: 'Progressive' },
				{ name: 'Cool down & stretch', intensity: '10 min', hr: 'Zone 1' }
			]
		},
		{
			day: 'یکشنبه',
			focus: 'استراحت و بازیابی',
			duration: '-',
			targetTrimp: 0,
			targetVO2: 0,
			exercises: []
		}
	]
}

const nutritionPlan = {
	name: 'پروتکل سوخت عملکرد',
	expert: {
		name: 'دکتر مایکل چن',
		title: 'متخصص تغذیه ورزشی',
		avatar: 'MC'
	},
	basedOn: ['ژن‌های متابولیسم', 'نیازهای پروتئین', 'حساسیت کربوهیدرات', 'داده‌های سوزاندن کالری'],
	dailyTargets: {
		calories: 2800,
		protein: 180,
		carbs: 320,
		fats: 80
	},
	meals: [
		{
			meal: 'Breakfast (7:00 AM)',
			calories: 650,
			items: ['3 whole eggs + 2 egg whites scrambled', '1 cup oatmeal with berries', '1 tbsp almond butter', '1 banana'],
			macros: { protein: 35, carbs: 65, fats: 22 }
		},
		{
			meal: 'Mid-Morning Snack (10:00 AM)',
			calories: 300,
			items: ['Greek yogurt (1 cup)', 'Handful of almonds', '1 apple'],
			macros: { protein: 25, carbs: 30, fats: 12 }
		},
		{
			meal: 'Lunch (1:00 PM)',
			calories: 750,
			items: ['8oz grilled chicken breast', '2 cups brown rice', 'Mixed vegetables (broccoli, carrots)', 'Olive oil dressing'],
			macros: { protein: 55, carbs: 80, fats: 18 }
		},
		{
			meal: 'Pre-Workout (3:30 PM)',
			calories: 250,
			items: ['Protein shake (whey)', '1 medium banana'],
			macros: { protein: 25, carbs: 35, fats: 3 }
		},
		{
			meal: 'Post-Workout (6:00 PM)',
			calories: 400,
			items: ['Protein shake with dextrose', 'Sweet potato (medium)'],
			macros: { protein: 30, carbs: 55, fats: 5 }
		},
		{
			meal: 'Dinner (8:00 PM)',
			calories: 700,
			items: ['8oz salmon', 'Quinoa (1.5 cups)', 'Roasted vegetables', 'Avocado (1/2)'],
			macros: { protein: 50, carbs: 60, fats: 25 }
		}
	],
	supplements: [
		{
			name: 'Creatine Monohydrate',
			dosage: '5g daily',
			timing: 'Post-workout'
		},
		{ name: 'Omega-3 Fish Oil', dosage: '2-3g daily', timing: 'With meals' },
		{ name: 'Vitamin D3', dosage: '2000 IU daily', timing: 'Morning' },
		{ name: 'Magnesium', dosage: '400mg daily', timing: 'Before bed' }
	]
}

export function Plans() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<div className="flex items-center gap-2 mb-2">
						<Badge className="bg-purple-600 text-white">ویژگی پریمیوم</Badge>
					</div>
					<h1>برنامه‌های شخصی شما</h1>
					<p className="text-slate-600">برنامه‌های تمرینی و تغذیه سفارشی بر اساس ژنتیک و داده‌های ساعت هوشمند شما</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline">
						<MessageCircle className="w-4 h-4 mr-2" />
						تماس با متخصص
					</Button>
					<Button variant="outline">
						<Download className="w-4 h-4 mr-2" />
						دانلود PDF
					</Button>
				</div>
			</div>

			{/* Expert Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card className="p-6">
					<div className="flex items-center gap-4">
						<Avatar className="w-16 h-16">
							<AvatarFallback className="bg-emerald-600 text-white text-xl">{workoutPlan.expert.avatar}</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<h4 className="text-slate-900">{workoutPlan.expert.name}</h4>
							<p className="text-slate-600 text-sm">{workoutPlan.expert.title}</p>
							<Badge variant="secondary" className="mt-2">
								سازنده برنامه تمرینی
							</Badge>
						</div>
						<Button size="sm" variant="outline">
							<MessageCircle className="w-4 h-4" />
						</Button>
					</div>
				</Card>

				<Card className="p-6">
					<div className="flex items-center gap-4">
						<Avatar className="w-16 h-16">
							<AvatarFallback className="bg-blue-600 text-white text-xl">{nutritionPlan.expert.avatar}</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<h4 className="text-slate-900">{nutritionPlan.expert.name}</h4>
							<p className="text-slate-600 text-sm">{nutritionPlan.expert.title}</p>
							<Badge variant="secondary" className="mt-2">
								سازنده برنامه تغذیه
							</Badge>
						</div>
						<Button size="sm" variant="outline">
							<MessageCircle className="w-4 h-4" />
						</Button>
					</div>
				</Card>
			</div>

			<Tabs defaultValue="workout" className="w-full">
				<TabsList>
					<TabsTrigger value="workout">
						<Dumbbell className="w-4 h-4 mr-2" />
						برنامه تمرینی
					</TabsTrigger>
					<TabsTrigger value="nutrition">
						<Apple className="w-4 h-4 mr-2" />
						برنامه تغذیه
					</TabsTrigger>
				</TabsList>

				<TabsContent value="workout" className="space-y-6 mt-6">
					<Card className="p-6">
						<div className="flex items-start justify-between mb-6">
							<div>
								<h3 className="mb-2">{workoutPlan.name}</h3>
								<p className="text-slate-600 text-sm mb-4">یک برنامه ۱۲ هفته‌ای که به طور خاص برای پروفایل ژنتیک شما طراحی شده است</p>
								<div className="flex flex-wrap gap-2">
									<Badge variant="secondary">
										<Calendar className="w-3 h-3 mr-1" />
										{workoutPlan.duration}
									</Badge>
									{workoutPlan.basedOn.map((factor, index) => (
										<Badge key={index} variant="outline">
											{factor}
										</Badge>
									))}
								</div>
							</div>
						</div>

						<div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 mb-6">
							<h4 className="text-emerald-900 mb-2">چرا این برنامه؟</h4>
							<p className="text-emerald-700 text-sm">
								بر اساس ژنوتیپ ACE II شما (ظرفیت استقامتی استثنایی) و پتانسیل بالای VO2 max، این برنامه بر تمرینات قلبی-عروقی با اهداف TRIMP پیشرونده برای به حداکثر رساندن عملکرد هوازی شما تمرکز دارد. داده‌های ساعت هوشمند شما معیارهای بازیابی عالی را نشان می‌دهد که امکان حجم تمرین بالاتر را فراهم می‌کند.
							</p>
						</div>

						{/* Weekly Schedule */}
						<h4 className="text-slate-900 mb-4">برنامه هفتگی</h4>
						<div className="space-y-3">
							{workoutPlan.weeklySchedule.map((day, index) => (
								<Card key={index} className="p-5 hover:shadow-md transition-shadow">
									<div className="flex items-start justify-between mb-3">
										<div className="flex-1">
											<div className="flex items-center gap-3 mb-2">
												<h4 className="text-slate-900">{day.day}</h4>
												<Badge>{day.focus}</Badge>
												{day.duration !== '-' && (
													<div className="flex items-center gap-1 text-slate-600 text-sm">
														<Clock className="w-4 h-4" />
														<span>{day.duration}</span>
													</div>
												)}
											</div>
											{day.targetTrimp > 0 && (
												<div className="flex items-center gap-4 text-sm">
													<Badge variant="outline" className="bg-purple-50">
														هدف TRIMP: {day.targetTrimp}
													</Badge>
													<Badge variant="outline" className="bg-teal-50">
														هدف VO2 Max: {day.targetVO2} میلی‌لیتر/کیلوگرم/دقیقه
													</Badge>
												</div>
											)}
										</div>
									</div>
									{day.exercises.length > 0 ? (
										<div className="space-y-2">
											{day.exercises.map((exercise, exIndex) => (
												<div key={exIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
													<div className="flex items-center gap-3">
														<CheckCircle className="w-4 h-4 text-slate-400" />
														<span className="text-slate-900">{exercise.name}</span>
													</div>
													<div className="flex items-center gap-4 text-sm text-slate-600">
														<span>{exercise.intensity}</span>
														{exercise.hr && <span className="text-slate-500">HR: {exercise.hr}</span>}
													</div>
												</div>
											))}
										</div>
									) : (
										<p className="text-slate-600 text-sm">روز استراحت و بازیابی کامل</p>
									)}
								</Card>
							))}
						</div>

						<div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
							<h4 className="text-blue-900 mb-2">نکات مهم</h4>
							<ul className="space-y-2 text-blue-700 text-sm">
								<li>• ضربان قلب خود را برای ماندن در محدوده هدف برای تجمع بهینه TRIMP نظارت کنید</li>
								<li>• ساعت هوشمند شما به طور خودکار TRIMP و VO2 max را در طول تمرینات ردیابی می‌کند</li>
								<li>• شدت را بر اساس آمادگی روزانه و معیارهای بازیابی تنظیم کنید</li>
								<li>• در صورت تجربه خستگی غیرعادی یا افزایش ضربان قلب در حالت استراحت با مربی خود تماس بگیرید</li>
							</ul>
						</div>
					</Card>
				</TabsContent>

				<TabsContent value="nutrition" className="space-y-6 mt-6">
					<Card className="p-6">
						<div className="flex items-start justify-between mb-6">
							<div>
								<h3 className="mb-2">{nutritionPlan.name}</h3>
								<p className="text-slate-600 text-sm mb-4">تغذیه بهینه بر اساس متابولیسم و شدت تمرین شما</p>
								<div className="flex flex-wrap gap-2">
									{nutritionPlan.basedOn.map((factor, index) => (
										<Badge key={index} variant="outline">
											{factor}
										</Badge>
									))}
								</div>
							</div>
						</div>

						{/* Daily Targets */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
							<div className="p-4 bg-slate-50 rounded-lg text-center">
								<p className="text-slate-600 text-sm mb-1">کالری روزانه</p>
								<p className="text-slate-900 text-2xl">{nutritionPlan.dailyTargets.calories}</p>
							</div>
							<div className="p-4 bg-red-50 rounded-lg text-center">
								<p className="text-red-600 text-sm mb-1">پروتئین</p>
								<p className="text-red-900 text-2xl">{nutritionPlan.dailyTargets.protein}g</p>
							</div>
							<div className="p-4 bg-blue-50 rounded-lg text-center">
								<p className="text-blue-600 text-sm mb-1">کربوهیدرات</p>
								<p className="text-blue-900 text-2xl">{nutritionPlan.dailyTargets.carbs}g</p>
							</div>
							<div className="p-4 bg-amber-50 rounded-lg text-center">
								<p className="text-amber-600 text-sm mb-1">چربی</p>
								<p className="text-amber-900 text-2xl">{nutritionPlan.dailyTargets.fats}g</p>
							</div>
						</div>

						<div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
							<h4 className="text-blue-900 mb-2">یادداشت‌های شخصی‌سازی</h4>
							<p className="text-blue-700 text-sm">
								پروفایل ژنتیک شما متابولیسم کارآمد کربوهیدرات را نشان می‌دهد که امکان مصرف کربوهیدرات بیشتر در اطراف تمرین را فراهم می‌کند. نیازهای پروتئین شما به دلیل واریانت ACTN3 و فاز فعلی عضله‌سازی افزایش یافته است. بر اساس داده‌های ساعت هوشمند شما که ۴,۳۲۰ کالری سوزانده شده هفتگی را نشان می‌دهد، هدف کالری شما هم عملکرد و هم بازیابی را پشتیبانی می‌کند.
							</p>
						</div>

						{/* Meal Plan */}
						<h4 className="text-slate-900 mb-4">برنامه وعده‌های غذایی روزانه</h4>
						<div className="space-y-3">
							{nutritionPlan.meals.map((meal, index) => (
								<Card key={index} className="p-5">
									<div className="flex items-start justify-between mb-3">
										<div>
											<h4 className="text-slate-900 mb-1">{meal.meal}</h4>
											<p className="text-slate-600 text-sm">{meal.calories} کالری</p>
										</div>
										<div className="flex gap-2 text-xs">
											<Badge variant="outline" className="bg-red-50">
												P: {meal.macros.protein}g
											</Badge>
											<Badge variant="outline" className="bg-blue-50">
												C: {meal.macros.carbs}g
											</Badge>
											<Badge variant="outline" className="bg-amber-50">
												F: {meal.macros.fats}g
											</Badge>
										</div>
									</div>
									<ul className="space-y-1">
										{meal.items.map((item, itemIndex) => (
											<li key={itemIndex} className="flex items-center gap-2 text-slate-700">
												<CheckCircle className="w-4 h-4 text-emerald-600" />
												<span className="text-sm">{item}</span>
											</li>
										))}
									</ul>
								</Card>
							))}
						</div>

						{/* Supplements */}
						<Card className="p-5 mt-6 bg-purple-50 border-purple-200">
							<h4 className="text-purple-900 mb-4">مکمل‌های توصیه شده</h4>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{nutritionPlan.supplements.map((supp, index) => (
									<div key={index} className="p-4 bg-white rounded-lg border border-purple-200">
										<h4 className="text-slate-900 mb-1">{supp.name}</h4>
										<p className="text-slate-600 text-sm">دوز: {supp.dosage}</p>
										<p className="text-purple-600 text-xs mt-1">{supp.timing}</p>
									</div>
								))}
							</div>
						</Card>

						<div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
							<h4 className="text-amber-900 mb-2">یادآوری‌های مهم</h4>
							<ul className="space-y-2 text-amber-700 text-sm">
								<li>• مقدار غذا را بر اساس گرسنگی و سطح انرژی تنظیم کنید</li>
								<li>• هیدراته بمانید - هدف ۳-۴ لیتر آب روزانه</li>
								<li>• زمان مصرف کربوهیدرات را در اطراف تمرینات برای عملکرد بهینه تنظیم کنید</li>
								<li>• وعده‌های غذایی خود را در اپلیکیشن ردیابی کنید برای بهترین نتایج</li>
							</ul>
						</div>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
