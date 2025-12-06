'use client'

import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Dna, Activity, Zap, Shield, Heart, TrendingUp, Package, CheckCircle, ArrowRight, Crown, Lock, Trophy } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const geneticTraits = [
	{ trait: 'Power', value: 85, color: 'bg-red-500' },
	{ trait: 'Endurance', value: 92, color: 'bg-blue-500' },
	{ trait: 'Recovery', value: 78, color: 'bg-green-500' },
	{ trait: 'Flexibility', value: 70, color: 'bg-purple-500' },
	{ trait: 'Speed', value: 88, color: 'bg-yellow-500' }
]

const radarData = [
	{ subject: 'Power', A: 85, fullMark: 100 },
	{ subject: 'Endurance', A: 92, fullMark: 100 },
	{ subject: 'Recovery', A: 78, fullMark: 100 },
	{ subject: 'Flexibility', A: 70, fullMark: 100 },
	{ subject: 'Speed', A: 88, fullMark: 100 },
	{ subject: 'Agility', A: 82, fullMark: 100 }
]

const geneticInsights = [
	{
		title: 'ACTN3 Gene - Sprint Performance',
		description: 'You have the RR variant, associated with elite sprint and power performance.',
		recommendation: 'Focus on explosive movements and power-based exercises.',
		icon: Zap,
		badge: 'Advantage'
	},
	{
		title: 'ACE Gene - Endurance Capacity',
		description: 'Your II genotype indicates excellent endurance potential.',
		recommendation: 'Long-distance training will yield optimal results for you.',
		icon: Activity
	},
	{
		title: 'COL1A1 Gene - Injury Risk',
		description: 'Moderate risk variant detected. Enhanced recovery protocols recommended.',
		recommendation: 'Prioritize proper warm-up and include mobility work in your routine.',
		icon: Shield
	},
	{
		title: 'PPARGC1A Gene - Training Response',
		description: 'Your variant shows high training adaptability.',
		recommendation: 'Progressive overload will be particularly effective for you.',
		icon: TrendingUp
	}
]

const enrollmentSteps = [
	{
		step: 1,
		title: 'Order Your DNA Kit',
		description: "Purchase your genetic testing kit and we'll ship it to your address within 3-5 business days.",
		icon: Package,
		status: 'pending'
	},
	{
		step: 2,
		title: 'Collect Your Sample',
		description: 'Simple cheek swab collection at home. Takes less than 2 minutes with easy instructions.',
		icon: Dna,
		status: 'pending'
	},
	{
		step: 3,
		title: 'Send It Back',
		description: 'Use the prepaid shipping label to send your sample to our certified lab.',
		icon: CheckCircle,
		status: 'pending'
	},
	{
		step: 4,
		title: 'Get Your Results',
		description: 'Receive detailed genetic report in 4-6 weeks with personalized recommendations.',
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
			<div className="space-y-6">
				<div>
					<div className="flex items-center gap-2 mb-2">
						<Crown className="w-6 h-6 text-purple-600" />
						<Badge className="bg-purple-600 text-white">Premium Feature</Badge>
					</div>
					<h1>Unlock Your Genetic Potential</h1>
					<p className="text-slate-600">Discover how your DNA influences your fitness, nutrition, and athletic performance</p>
				</div>

				{/* Hero Section */}
				<Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-96 h-96 opacity-10">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1583912086005-ac9abca6c9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxETkElMjBnZW5ldGljcyUyMHNjaWVuY2V8ZW58MXx8fHwxNzYyOTMxOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt="DNA"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="relative z-10">
						<h2 className="text-purple-900 mb-4">Why Genetic Testing?</h2>
						<p className="text-purple-700 mb-6 max-w-3xl">
							Your DNA holds the key to understanding your unique athletic potential. Our comprehensive genetic analysis examines genes related to strength,
							endurance, recovery, metabolism, and injury risk - giving you science-backed insights to optimize your training and nutrition.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							<div className="p-4 bg-white rounded-lg border border-purple-200">
								<div className="text-3xl mb-2">🎯</div>
								<h4 className="text-purple-900 mb-1">Personalized Plans</h4>
								<p className="text-purple-700 text-sm">Get workout and nutrition plans tailored to your genetic makeup</p>
							</div>
							<div className="p-4 bg-white rounded-lg border border-purple-200">
								<div className="text-3xl mb-2">👥</div>
								<h4 className="text-purple-900 mb-1">Find Your Tribe</h4>
								<p className="text-purple-700 text-sm">Connect with athletes who share similar genetic traits</p>
							</div>
							<div className="p-4 bg-white rounded-lg border border-purple-200">
								<div className="text-3xl mb-2">🏆</div>
								<h4 className="text-purple-900 mb-1">Expert Guidance</h4>
								<p className="text-purple-700 text-sm">Work with nutritionists and trainers specialized in genetic-based training</p>
							</div>
						</div>
					</div>
				</Card>

				{/* How It Works */}
				<Card className="p-6">
					<h3 className="mb-6">How It Works</h3>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
				<Card className="p-6">
					<h3 className="mb-6">What You'll Discover</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<h4 className="text-slate-900">Fitness Traits Analysis</h4>
							<ul className="space-y-3">
								{[
									{ icon: Zap, label: 'Power & Strength Potential' },
									{ icon: Activity, label: 'Endurance Capacity' },
									{ icon: Heart, label: 'VO2 Max & Cardio Response' },
									{ icon: Shield, label: 'Injury Risk & Recovery Speed' },
									{ icon: Trophy, label: 'In Which Sports You Are Talented' }
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
							<h4 className="text-slate-900">Nutrition Insights</h4>
							<ul className="space-y-3">
								{[
									'Carbohydrate & Fat Metabolism',
									'Supplement Requirements',
									'Vitamin & Mineral Absorption',
									'Food Sensitivities & Intolerances',
									'Response to Supplement and Doping'
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card className="p-6 border-2 border-slate-200">
						<Badge variant="secondary" className="mb-4">
							One-Time Test
						</Badge>
						<h3 className="mb-2">DNA Kit Only</h3>
						<div className="mb-4">
							<span className="text-slate-900 text-4xl">$199</span>
							<span className="text-slate-600"> one-time</span>
						</div>
						<ul className="space-y-3 mb-6">
							{[
								'Comprehensive genetic testing',
								'Detailed fitness & nutrition report',
								'Basic personalized recommendations',
								'Access to genetic profile dashboard'
							].map((feature, index) => (
								<li key={index} className="flex items-center gap-2 text-slate-700">
									<CheckCircle className="w-4 h-4 text-emerald-600" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
						<Button variant="outline" className="w-full">
							Order DNA Kit
						</Button>
					</Card>

					<Card className="p-6 border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 relative">
						<Badge className="bg-purple-600 mb-4">Recommended</Badge>
						<div className="absolute top-4 right-4">
							<Crown className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="mb-2">Premium Membership</h3>
						<div className="mb-4">
							<span className="text-slate-900 text-4xl">$299</span>
							<span className="text-slate-600"> + $29/month</span>
						</div>
						<ul className="space-y-3 mb-6">
							{[
								'Everything in DNA Kit Only',
								'Personalized workout plans from experts',
								'Custom nutrition plans & meal guides',
								'Join exclusive genetic trait groups',
								'Monthly consultations with specialists',
								'Advanced progress tracking & analytics',
								'Priority support & updates'
							].map((feature, index) => (
								<li key={index} className="flex items-center gap-2 text-purple-900">
									<CheckCircle className="w-4 h-4 text-purple-600" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
						<Button className="w-full bg-purple-600 hover:bg-purple-700">Get Premium + DNA Kit</Button>
					</Card>
				</div>

				{/* FAQs */}
				<Card className="p-6">
					<h3 className="mb-6">Frequently Asked Questions</h3>
					<div className="space-y-4">
						{[
							{
								q: 'Is the DNA test safe and private?',
								a: 'Yes, your genetic data is encrypted and stored securely. We never share your data with third parties without explicit consent.'
							},
							{
								q: 'How long does it take to get results?',
								a: 'After we receive your sample, it takes 4-6 weeks for our lab to process and analyze your DNA.'
							},
							{
								q: 'Can I cancel my premium membership anytime?',
								a: "Yes, you can cancel your monthly subscription at any time. You'll retain access to your genetic report."
							},
							{
								q: 'What genes do you test for?',
								a: 'We analyze 50+ genes related to athletic performance, including ACTN3, ACE, COL1A1, PPARGC1A, and many others related to fitness and nutrition.'
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
					<Badge className="bg-purple-600 text-white">Premium Member</Badge>
					<Badge variant="secondary">Results Ready</Badge>
				</div>
				<h1>Your Genetic Profile</h1>
				<p className="text-slate-600">Personalized insights based on your DNA analysis</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<Dna className="w-6 h-6 text-emerald-600" />
						<h3>Athletic Trait Distribution</h3>
					</div>
					<ResponsiveContainer width="100%" height={300}>
						<RadarChart data={radarData}>
							<PolarGrid stroke="#e2e8f0" />
							<PolarAngleAxis dataKey="subject" stroke="#64748b" />
							<PolarRadiusAxis stroke="#64748b" />
							<Radar name="Your Profile" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
						</RadarChart>
					</ResponsiveContainer>
				</Card>

				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<Heart className="w-6 h-6 text-red-600" />
						<h3>Trait Breakdown</h3>
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
							<strong>Overall Score: 82.6/100</strong>
						</p>
						<p className="text-emerald-700 text-sm mt-1">Elite-level athletic genetic profile</p>
					</div>
				</Card>
			</div>

			<Card className="p-6">
				<h3 className="mb-6">Genetic Insights & Recommendations</h3>
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
										<strong>Recommendation:</strong> {insight.recommendation}
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
						<h3 className="text-emerald-900 mb-2">Your Personalized Plans Are Ready!</h3>
						<p className="text-emerald-700 mb-4">
							Based on your genetic profile and smartwatch data, our experts have created custom workout and nutrition plans just for you.
						</p>
						<Button className="bg-emerald-600 hover:bg-emerald-700">
							View Your Personalized Plans
							<ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					</div>
					<div className="text-6xl">📋</div>
				</div>
			</Card>
		</div>
	)
}
