'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, MapPin, Award, Target, Edit, Instagram, Weight, Ruler, Flame, Heart, Timer, Activity, Wind } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlyStats = [
	{ month: 'خرداد', workouts: 18 },
	{ month: 'تیر', workouts: 22 },
	{ month: 'مرداد', workouts: 25 },
	{ month: 'شهریور', workouts: 28 },
	{ month: 'مهر', workouts: 30 },
	{ month: 'آبان', workouts: 24 }
]

const achievements = [
	{ title: '۱۰۰ تمرین', emoji: '💯', date: '۱۵ مهر ۱۴۰۳', rarity: 'نادر' },
	{ title: '۳۰ روز متوالی', emoji: '🔥', date: '۲ آبان ۱۴۰۳', rarity: 'حماسی' },
	{
		title: 'شکستن رکورد',
		emoji: '🏆',
		date: '۲۰ شهریور ۱۴۰۳',
		rarity: 'افسانهای'
	},
	{ title: 'سحرخیز', emoji: '🌅', date: '۸ آبان ۱۴۰۳', rarity: 'معمولی' },
	{ title: 'اراده آهنین', emoji: '💪', date: '۱۲ مرداد ۱۴۰۳', rarity: 'نادر' },
	{
		title: 'پروانه اجتماعی',
		emoji: '🦋',
		date: '۲۸ مهر ۱۴۰۳',
		rarity: 'معمولی'
	}
]

const personalRecords = [
  {
		metric: 'کالری سوزانده شده',
		value: '۹۲۰ کالری',
		date: '۱۲ آبان ۱۴۰۳',
		icon: Flame
	},
	{
		metric: 'حداکثر ضربان قلب',
		value: '۱۸۵ ضربه در دقیقه',
		date: '۱۰ آبان ۱۴۰۳',
		icon: Heart
	},
	{
		metric: 'طولانی‌ترین تمرین',
		value: '۱۲۰ دقیقه',
		date: '۵ آبان ۱۴۰۳',
		icon: Timer
	},
	{
		metric: 'بالاترین TRIMP',
		value: '۱۴۵',
		date: '۱۲ آبان ۱۴۰۳',
		icon: Activity
	},
	{
		metric: 'بهترین VO2 Max',
		value: '۵۲ میلی‌لیتر/کیلوگرم/دقیقه',
		date: '۱۲ آبان ۱۴۰۳',
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
							<h1 className="mb-1">جان دو</h1>
							<p className="text-slate-600 mb-3">ورزشکار حرفه‌ای</p>
              <div className="flex gap-2">
								<Badge>ورزشکار استقامت</Badge>
								<Badge variant="secondary">سطح نخبه</Badge>
              </div>
            </div>
          </div>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
						ویرایش پروفایل
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">کل تمرین‌ها</p>
						<p className="text-slate-900 text-xl">۳۴۲</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">دنباله فعلی</p>
						<p className="text-slate-900 text-xl">۱۴ روز</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">ارتباطات</p>
						<p className="text-slate-900 text-xl">۱۸۶</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
						<p className="text-slate-600 text-sm mb-1">دستاوردها</p>
						<p className="text-slate-900 text-xl">۲۴</p>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
					<TabsTrigger value="overview">نمای کلی</TabsTrigger>
					<TabsTrigger value="achievements">دستاوردها</TabsTrigger>
					<TabsTrigger value="records">رکوردهای شخصی</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
							<h3 className="mb-4">فعالیت ماهانه</h3>
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
							<h3 className="mb-4">درباره</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-slate-400" />
                  <div>
										<p className="text-slate-600 text-sm">نام کامل</p>
										<p className="text-slate-900">جان دو</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-slate-400" />
                  <div>
										<p className="text-slate-600 text-sm">اینستاگرام</p>
                    <p className="text-slate-900">@johndoe_athlete</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Weight className="w-5 h-5 text-slate-400" />
                  <div>
										<p className="text-slate-600 text-sm">وزن</p>
										<p className="text-slate-900">۷۵ کیلوگرم</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-slate-400" />
                  <div>
										<p className="text-slate-600 text-sm">قد</p>
										<p className="text-slate-900">۱۸۰ سانتی‌متر</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <div>
										<p className="text-slate-600 text-sm">موقعیت</p>
										<p className="text-slate-900">تهران، ایران</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
						<h3 className="mb-4">اهداف تمرینی</h3>
            <div className="space-y-4">
              {[
                {
									goal: 'دستیابی به VO2 Max معادل ۵۵ میلی‌لیتر/کیلوگرم/دقیقه',
                  progress: 92,
									target: 'آذر ۱۴۰۳'
                },
                {
									goal: 'رسیدن به TRIMP هفتگی ۷۰۰',
                  progress: 96,
									target: 'آذر ۱۴۰۳'
                },
                {
									goal: 'تکمیل ۱۰۰ تمرین در این سال',
                  progress: 68,
									target: 'آذر ۱۴۰۳'
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
											<span className="text-slate-600">پیشرفت</span>
											<span className="text-slate-900">{goal.progress}٪</span>
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
								<h3>مجموعه دستاوردها</h3>
								<p className="text-slate-600 text-sm">۲۴ از ۵۰ باز شده</p>
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
							<h3>رکوردهای شخصی</h3>
							<Button className="bg-emerald-600 hover:bg-emerald-700">افزودن رکورد جدید</Button>
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
