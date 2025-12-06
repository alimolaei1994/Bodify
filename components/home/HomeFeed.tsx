import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Metric = {
  name: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
};

type Challenge = {
  id: string;
  title: string;
  progress: number;
  participants: number;
  endDate: string;
};

type LeaderboardUser = {
  id: string;
  name: string;
  rank: number;
  points: number;
  avatar: string;
};

export function HomeFeed() {
  const metrics: Metric[] = [
    { name: 'تعداد جلسات این هفته', value: '۳', change: '+۲۰%', changeType: 'increase' },
    { name: 'میانگین کالری سوزی', value: '۵۲۰ کالری', change: '+۵%', changeType: 'increase' },
    { name: 'رتبه در باشگاه', value: '۱۲', change: '۰', changeType: 'increase' },
    { name: 'چالش‌های فعال', value: '۲', change: '+۱', changeType: 'increase' },
  ];

  const activeChallenges: Challenge[] = [
    { id: '1', title: 'چالش ۱۰۰ کیلومتر دویدن', progress: 65, participants: 24, endDate: '۱۴۰۲/۱۰/۱۵' },
    { id: '2', title: 'چالش ۳۰ روزه شنا', progress: 30, participants: 15, endDate: '۱۴۰۲/۱۱/۰۵' },
  ];

  const leaderboard: LeaderboardUser[] = [
    { id: '1', name: 'علی محمدی', rank: 1, points: 2450, avatar: '/avatars/1.jpg' },
    { id: '2', name: 'سارا احمدی', rank: 2, points: 2300, avatar: '/avatars/2.jpg' },
    { id: '3', name: 'محمد رضایی', rank: 3, points: 2150, avatar: '/avatars/3.jpg' },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                <div className="flex items-baseline mt-1">
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <span className={`ml-2 text-sm ${metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Active Challenges */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">چالش‌های فعال</h3>
          <div className="space-y-4">
            {activeChallenges.map((challenge) => (
              <div key={challenge.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {challenge.participants} نفر شرکت‌کننده • پایان: {challenge.endDate}
                    </p>
                  </div>
                  <span className="text-sm font-medium">{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} className="mt-2 h-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Leaderboard */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">جدول رده‌بندی باشگاه</h3>
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                    {user.rank}
                  </span>
                  <div className="flex items-center mr-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs ml-2">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-full w-full rounded-full" />
                      ) : (
                        user.name.charAt(0)
                      )}
                    </div>
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                </div>
                <span className="text-sm font-medium">{user.points} امتیاز</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">فعالیت‌های اخیر</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">علی محمدی</span> رکورد جدیدی در اسکات ثبت کرد: <span className="font-medium">۱۲۰ کیلوگرم</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">۲ ساعت پیش</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
