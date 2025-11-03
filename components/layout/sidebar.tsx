"use client"

import Link from "next/link"
import { 
  LayoutDashboard, 
  GraduationCap, 
  User, 
  Clipboard, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Trophy, 
  Headphones, 
  Settings 
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: GraduationCap, label: "Programs", href: "/programs" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Clipboard, label: "Tasks", href: "/tasks" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: Headphones, label: "Support", href: "/support" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-16 bg-gray-800 flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-2 w-full">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-center w-full h-12 transition-colors",
                "hover:bg-gray-700 text-gray-300 hover:text-white"
              )}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

