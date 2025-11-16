import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Users, Crown, Trophy, Flame, TrendingUp, MessageCircle, Calendar, Target, Dna, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const myGroups = [
  {
    id: 1,
    name: "VO2 Max Elite",
    description: "Athletes with high VO2 max genetics and aerobic capacity",
    members: 24,
    geneticMatch: 92,
    category: "Aerobic Performance",
    color: "teal",
    activeChallenge: "VO2 Max Challenge",
    yourRank: 3,
    nextSession: "Tomorrow, 6:00 PM",
  },
  {
    id: 2,
    name: "Endurance Warriors",
    description: "ACE II genotype carriers focused on cardiovascular performance",
    members: 31,
    geneticMatch: 88,
    category: "Endurance",
    color: "blue",
    activeChallenge: "TRIMP Master Challenge",
    yourRank: 2,
    nextSession: "Friday, 7:00 AM",
  },
];

const suggestedGroups = [
  {
    id: 3,
    name: "Fast Recovery Squad",
    description: "Athletes with optimal recovery genes and similar training schedules",
    members: 18,
    geneticMatch: 85,
    category: "Recovery",
    color: "green",
  },
  {
    id: 4,
    name: "Hybrid Athletes",
    description: "Balanced power and endurance genetics for mixed training",
    members: 27,
    geneticMatch: 79,
    category: "Hybrid Training",
    color: "purple",
  },
];

const groupMembers = [
  { name: "Sarah Martinez", avatar: "SM", rank: 1, points: 2850, streak: 14, status: "online" },
  { name: "Marcus Johnson", avatar: "MJ", rank: 2, points: 2720, streak: 12, status: "online" },
  { name: "You (John Doe)", avatar: "JD", rank: 3, points: 2650, streak: 14, status: "online", isUser: true },
  { name: "Emily Chen", avatar: "EC", rank: 4, points: 2580, streak: 11, status: "offline" },
  { name: "David Thompson", avatar: "DT", rank: 5, points: 2420, streak: 9, status: "online" },
  { name: "Jessica Park", avatar: "JP", rank: 6, points: 2350, streak: 8, status: "offline" },
];

const groupPosts = [
  {
    user: "Sarah Martinez",
    avatar: "SM",
    time: "2 hours ago",
    content: "Just hit a new VO2 max record! 54 ml/kg/min! Thanks for the motivation everyone 💪",
    likes: 12,
    comments: 5,
  },
  {
    user: "Marcus Johnson",
    avatar: "MJ",
    time: "5 hours ago",
    content: "Who's joining the group cardio session tomorrow at 6 PM? Let's crush it together!",
    likes: 8,
    comments: 7,
  },
  {
    user: "Emily Chen",
    avatar: "EC",
    time: "1 day ago",
    content: "Love how our genetic profiles help us understand each other's challenges. This group is amazing!",
    likes: 15,
    comments: 4,
  },
];

const groupChallenge = {
  title: "TRIMP Master Challenge",
  description: "Highest cumulative TRIMP score this week",
  prize: "1000 points + Group Trophy",
  endsIn: "3 days",
  participants: 24,
  leaderboard: [
    { name: "Sarah Martinez", avatar: "SM", progress: 685, rank: 1, unit: "TRIMP" },
    { name: "You", avatar: "JD", progress: 671, rank: 2, isUser: true, unit: "TRIMP" },
    { name: "Marcus Johnson", avatar: "MJ", progress: 658, rank: 3, unit: "TRIMP" },
    { name: "Emily Chen", avatar: "EC", progress: 645, rank: 4, unit: "TRIMP" },
    { name: "David Thompson", avatar: "DT", progress: 612, rank: 5, unit: "TRIMP" },
  ],
};

export function Groups() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-purple-600 text-white">Premium Feature</Badge>
          </div>
          <h1>My Groups</h1>
          <p className="text-slate-600">
            Train with athletes who share your genetic traits
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4 mr-2" />
          Find More Groups
        </Button>
      </div>

      {/* Active Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {myGroups.map((group) => (
          <Card key={group.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-${group.color}-100 rounded-full flex items-center justify-center`}>
                  <Users className={`w-6 h-6 text-${group.color}-600`} />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">{group.name}</h3>
                  <Badge variant="secondary">{group.category}</Badge>
                </div>
              </div>
              <Crown className="w-6 h-6 text-amber-500" />
            </div>

            <p className="text-slate-600 text-sm mb-4">{group.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-slate-600 text-sm mb-1">Members</p>
                <p className="text-slate-900">{group.members}</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <p className="text-emerald-600 text-sm mb-1">Genetic Match</p>
                <p className="text-emerald-900">{group.geneticMatch}%</p>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-purple-600" />
                <h4 className="text-purple-900">{group.activeChallenge}</h4>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-700">Your rank: #{group.yourRank}</span>
                <Badge variant="secondary">Active</Badge>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
              <Calendar className="w-4 h-4" />
              <span>Next group workout: {group.nextSession}</span>
            </div>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              View Group
            </Button>
          </Card>
        ))}
      </div>

      {/* Suggested Groups */}
      <Card className="p-6">
        <h3 className="mb-4">Suggested Groups for You</h3>
        <p className="text-slate-600 text-sm mb-4">
          Based on your genetic profile and training preferences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestedGroups.map((group) => (
            <div
              key={group.id}
              className="p-5 border-2 border-slate-200 rounded-lg hover:border-emerald-500 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 bg-${group.color}-100 rounded-full flex items-center justify-center`}>
                  <Users className={`w-5 h-5 text-${group.color}-600`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 mb-1">{group.name}</h4>
                  <Badge variant="secondary" className="text-xs">{group.category}</Badge>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4">{group.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600 text-sm">{group.members} members</span>
                <div className="flex items-center gap-1">
                  <Dna className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-900 text-sm">{group.geneticMatch}% match</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Join Group
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Group Details - Power Athletes Elite */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <Tabs defaultValue="feed" className="w-full">
            <TabsList>
              <TabsTrigger value="feed">Group Feed</TabsTrigger>
              <TabsTrigger value="challenge">Active Challenge</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="feed" className="space-y-4 mt-4">
              {groupPosts.map((post, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-emerald-600 text-white">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-slate-900">{post.user}</h4>
                        <span className="text-slate-500 text-sm">•</span>
                        <span className="text-slate-500 text-sm">{post.time}</span>
                      </div>
                      <p className="text-slate-700 mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-slate-600 text-sm">
                        <button className="hover:text-emerald-600 transition-colors">
                          ❤️ {post.likes}
                        </button>
                        <button className="hover:text-emerald-600 transition-colors">
                          💬 {post.comments}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="challenge" className="mt-4">
              <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-amber-600" />
                  <div>
                    <h3 className="text-amber-900">{groupChallenge.title}</h3>
                    <p className="text-amber-700 text-sm">{groupChallenge.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-amber-600 text-sm mb-1">Prize</p>
                    <p className="text-amber-900">{groupChallenge.prize.split('+')[0]}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-amber-600 text-sm mb-1">Ends In</p>
                    <p className="text-amber-900">{groupChallenge.endsIn}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg text-center">
                    <p className="text-amber-600 text-sm mb-1">Participants</p>
                    <p className="text-amber-900">{groupChallenge.participants}</p>
                  </div>
                </div>

                <h4 className="text-amber-900 mb-3">Leaderboard</h4>
                <div className="space-y-2">
                  {groupChallenge.leaderboard.map((participant) => (
                    <div
                      key={participant.rank}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        participant.isUser
                          ? "bg-emerald-100 border-2 border-emerald-500"
                          : "bg-white"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          participant.rank === 1
                            ? "bg-amber-500 text-white"
                            : participant.rank === 2
                            ? "bg-slate-400 text-white"
                            : participant.rank === 3
                            ? "bg-orange-600 text-white"
                            : "bg-slate-300 text-slate-700"
                        }`}
                      >
                        {participant.rank}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className={participant.isUser ? "bg-emerald-600 text-white" : "bg-slate-600 text-white"}>
                          {participant.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className={participant.isUser ? "text-emerald-900" : "text-slate-900"}>
                          {participant.name}
                        </h4>
                      </div>
                      <div className="text-right">
                        <p className={participant.isUser ? "text-emerald-900" : "text-slate-900"}>
                          {participant.progress.toLocaleString()} {participant.unit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="mt-4">
              <div className="space-y-3">
                {[
                  { day: "Tomorrow", time: "6:00 PM", type: "VO2 Max Intervals Session", participants: 12 },
                  { day: "Friday", time: "7:00 AM", type: "Endurance Training", participants: 8 },
                  { day: "Saturday", time: "10:00 AM", type: "Long Distance Run", participants: 15 },
                  { day: "Monday", time: "6:30 PM", type: "Threshold Training", participants: 10 },
                ].map((session, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-slate-900 mb-1">{session.type}</h4>
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                          <span>{session.day}</span>
                          <span>•</span>
                          <span>{session.time}</span>
                          <span>•</span>
                          <span>{session.participants} attending</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Join
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="mb-4">Group Members</h3>
            <p className="text-slate-600 text-sm mb-4">
              24 members • {groupMembers.filter(m => m.status === "online").length} online
            </p>
            <div className="space-y-3">
              {groupMembers.map((member, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    member.isUser ? "bg-emerald-50" : "bg-slate-50"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className={member.isUser ? "bg-emerald-600 text-white" : "bg-slate-600 text-white"}>
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {member.status === "online" && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-sm ${member.isUser ? "text-emerald-900" : "text-slate-900"}`}>
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span>Rank #{member.rank}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-orange-500" />
                        {member.streak} days
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <h4 className="text-purple-900 mb-2">Group Benefits</h4>
            <ul className="space-y-2 text-purple-700 text-sm">
              <li className="flex items-start gap-2">
                <Dna className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Train with genetically similar athletes</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Compete in exclusive group challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Join scheduled group workouts</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Share progress and motivate each other</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
