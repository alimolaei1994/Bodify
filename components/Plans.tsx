'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Dumbbell, Apple, Calendar, Clock, Target, User, CheckCircle, Crown, Lock, Download, MessageCircle } from 'lucide-react'

const workoutPlan = {
	name: 'Cardio Performance Protocol',
	duration: '12 weeks',
	expert: {
		name: 'Dr. Sarah Mitchell',
		title: 'Sports Geneticist & Trainer',
		avatar: 'SM'
	},
	basedOn: ['ACE II Genotype', 'High VO2 Max Potential', 'TRIMP Targets', 'Smartwatch Data'],
	weeklySchedule: [
		{
			day: 'Monday',
			focus: 'VO2 Max Intervals',
			duration: '60 min',
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
			day: 'Tuesday',
			focus: 'Steady State Cardio',
			duration: '75 min',
			targetTrimp: 105,
			targetVO2: 48,
			exercises: [
				{ name: 'Zone 2 Running', intensity: '60 min', hr: '140-155 bpm' },
				{ name: 'Core & Mobility', intensity: '15 min', hr: 'Low intensity' }
			]
		},
		{
			day: 'Wednesday',
			focus: 'Threshold Training',
			duration: '50 min',
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
			day: 'Thursday',
			focus: 'Active Recovery',
			duration: '30 min',
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
			day: 'Friday',
			focus: 'Mixed Cardio',
			duration: '65 min',
			targetTrimp: 110,
			targetVO2: 51,
			exercises: [
				{ name: 'Tempo cycling', intensity: '30 min', hr: '75-80% max HR' },
				{ name: 'Rowing intervals', intensity: '5x4 min', hr: '85-90% max HR' },
				{ name: 'Swimming cool down', intensity: '10 min', hr: 'Zone 2' }
			]
		},
		{
			day: 'Saturday',
			focus: 'Long Endurance',
			duration: '90 min',
			targetTrimp: 128,
			targetVO2: 49,
			exercises: [
				{ name: 'Long steady run', intensity: '80 min', hr: 'Zone 2-3' },
				{ name: 'Strides', intensity: '4x100m', hr: 'Progressive' },
				{ name: 'Cool down & stretch', intensity: '10 min', hr: 'Zone 1' }
			]
		},
		{
			day: 'Sunday',
			focus: 'Rest & Recovery',
			duration: '-',
			targetTrimp: 0,
			targetVO2: 0,
			exercises: []
		}
	]
}

const nutritionPlan = {
	name: 'Performance Fuel Protocol',
	expert: {
		name: 'Dr. Michael Chen',
		title: 'Sports Nutritionist',
		avatar: 'MC'
	},
	basedOn: ['Metabolism Genes', 'Protein Requirements', 'Carb Sensitivity', 'Calorie Burn Data'],
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
						<Badge className="bg-purple-600 text-white">Premium Feature</Badge>
					</div>
					<h1>Your Personalized Plans</h1>
					<p className="text-slate-600">Custom workout and nutrition plans based on your genetics and smartwatch data</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline">
						<MessageCircle className="w-4 h-4 mr-2" />
						Contact Expert
					</Button>
					<Button variant="outline">
						<Download className="w-4 h-4 mr-2" />
						Download PDF
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
								Workout Plan Creator
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
								Nutrition Plan Creator
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
						Workout Plan
					</TabsTrigger>
					<TabsTrigger value="nutrition">
						<Apple className="w-4 h-4 mr-2" />
						Nutrition Plan
					</TabsTrigger>
				</TabsList>

				<TabsContent value="workout" className="space-y-6 mt-6">
					<Card className="p-6">
						<div className="flex items-start justify-between mb-6">
							<div>
								<h3 className="mb-2">{workoutPlan.name}</h3>
								<p className="text-slate-600 text-sm mb-4">A 12-week program designed specifically for your genetic profile</p>
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
							<h4 className="text-emerald-900 mb-2">Why This Plan?</h4>
							<p className="text-emerald-700 text-sm">
								Based on your ACE II genotype (exceptional endurance capacity) and high VO2 max potential, this program focuses on cardiovascular training with
								progressive TRIMP targets to maximize your aerobic performance. Your smartwatch data shows excellent recovery metrics, allowing for higher training
								volume.
							</p>
						</div>

						{/* Weekly Schedule */}
						<h4 className="text-slate-900 mb-4">Weekly Schedule</h4>
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
														Target TRIMP: {day.targetTrimp}
													</Badge>
													<Badge variant="outline" className="bg-teal-50">
														Target VO2 Max: {day.targetVO2} ml/kg/min
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
										<p className="text-slate-600 text-sm">Full rest and recovery day</p>
									)}
								</Card>
							))}
						</div>

						<div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
							<h4 className="text-blue-900 mb-2">Important Notes</h4>
							<ul className="space-y-2 text-blue-700 text-sm">
								<li>• Monitor your heart rate to stay within target zones for optimal TRIMP accumulation</li>
								<li>• Your smartwatch will automatically track TRIMP and VO2 max during workouts</li>
								<li>• Adjust intensity based on daily readiness and recovery metrics</li>
								<li>• Contact your trainer if you experience unusual fatigue or elevated resting heart rate</li>
							</ul>
						</div>
					</Card>
				</TabsContent>

				<TabsContent value="nutrition" className="space-y-6 mt-6">
					<Card className="p-6">
						<div className="flex items-start justify-between mb-6">
							<div>
								<h3 className="mb-2">{nutritionPlan.name}</h3>
								<p className="text-slate-600 text-sm mb-4">Optimized nutrition based on your metabolism and training intensity</p>
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
								<p className="text-slate-600 text-sm mb-1">Daily Calories</p>
								<p className="text-slate-900 text-2xl">{nutritionPlan.dailyTargets.calories}</p>
							</div>
							<div className="p-4 bg-red-50 rounded-lg text-center">
								<p className="text-red-600 text-sm mb-1">Protein</p>
								<p className="text-red-900 text-2xl">{nutritionPlan.dailyTargets.protein}g</p>
							</div>
							<div className="p-4 bg-blue-50 rounded-lg text-center">
								<p className="text-blue-600 text-sm mb-1">Carbs</p>
								<p className="text-blue-900 text-2xl">{nutritionPlan.dailyTargets.carbs}g</p>
							</div>
							<div className="p-4 bg-amber-50 rounded-lg text-center">
								<p className="text-amber-600 text-sm mb-1">Fats</p>
								<p className="text-amber-900 text-2xl">{nutritionPlan.dailyTargets.fats}g</p>
							</div>
						</div>

						<div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
							<h4 className="text-blue-900 mb-2">Personalization Notes</h4>
							<p className="text-blue-700 text-sm">
								Your genetic profile shows efficient carbohydrate metabolism, allowing for higher carb intake around training. Your protein needs are elevated due
								to your ACTN3 variant and current muscle-building phase. Based on your smartwatch data showing 4,320 kcal burned weekly, your calorie target
								supports both performance and recovery.
							</p>
						</div>

						{/* Meal Plan */}
						<h4 className="text-slate-900 mb-4">Daily Meal Plan</h4>
						<div className="space-y-3">
							{nutritionPlan.meals.map((meal, index) => (
								<Card key={index} className="p-5">
									<div className="flex items-start justify-between mb-3">
										<div>
											<h4 className="text-slate-900 mb-1">{meal.meal}</h4>
											<p className="text-slate-600 text-sm">{meal.calories} calories</p>
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
							<h4 className="text-purple-900 mb-4">Recommended Supplements</h4>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{nutritionPlan.supplements.map((supp, index) => (
									<div key={index} className="p-4 bg-white rounded-lg border border-purple-200">
										<h4 className="text-slate-900 mb-1">{supp.name}</h4>
										<p className="text-slate-600 text-sm">Dosage: {supp.dosage}</p>
										<p className="text-purple-600 text-xs mt-1">{supp.timing}</p>
									</div>
								))}
							</div>
						</Card>

						<div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
							<h4 className="text-amber-900 mb-2">Important Reminders</h4>
							<ul className="space-y-2 text-amber-700 text-sm">
								<li>• Adjust portions based on hunger and energy levels</li>
								<li>• Stay hydrated - aim for 3-4 liters of water daily</li>
								<li>• Time your carbs around workouts for optimal performance</li>
								<li>• Track your meals in the app for best results</li>
							</ul>
						</div>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
