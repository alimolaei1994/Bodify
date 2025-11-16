import { Home, Dna, ClipboardList, Users, User, TrendingUp, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Home", icon: Home, free: true },
    { id: "genetics", label: "Genetics", icon: Dna, premium: true },
    { id: "plans", label: "My Plans", icon: ClipboardList, premium: true },
    { id: "groups", label: "Groups", icon: Users, premium: true },
    { id: "profile", label: "Profile", icon: User, free: true },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-emerald-500" />
          <span>AthleteDNA</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                  activeTab === item.id
                    ? "bg-emerald-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.premium && (
                  <Crown className="w-4 h-4 text-purple-400" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
            JD
          </div>
          <div>
            <div>John Doe</div>
            <div className="text-slate-400 text-sm">Pro Athlete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
