"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navigationItems = [
  { icon: "/sidebar/s1.svg", label: "Dashboard", href: "/" },
  { icon: "/sidebar/s2.svg", label: "Programs", href: "/programs" },
  { icon: "/sidebar/s3.svg", label: "Profile", href: "/profile" },
  { icon: "/sidebar/s4.svg", label: "Tasks", href: "/tasks" },
  { icon: "/sidebar/s5.svg", label: "Messages", href: "/messages" },
  { icon: "/sidebar/s6.svg", label: "Analytics", href: "/analytics" },
  { icon: "/sidebar/s7.svg", label: "Calendar", href: "/calendar" },
  { icon: "/sidebar/s8.svg", label: "Achievements", href: "/achievements" },
  { icon: "/sidebar/s9.svg", label: "Support", href: "/support" },
  { icon: "/sidebar/s10.svg", label: "Settings", href: "/settings" },
  { icon: "/sidebar/s11.svg", label: "Extra 1", href: "/extra1" },
  { icon: "/sidebar/s12.svg", label: "Extra 2", href: "/extra2" },
  { icon: "/sidebar/13.svg", label: "Extra 3", href: "/extra3" },
  { icon: "/sidebar/s14.svg", label: "Extra 4", href: "/extra4" },
]

export function Sidebar() {
  return (
    <aside className="fixed left-4 top-[80px] md:top-[88px] bottom-16 z-40 w-[112px] flex flex-col items-center">
      <nav className="flex flex-col items-center gap-4 px-5 py-4 bg-sidebar-bg backdrop-blur-sm rounded-[16px] shadow-lg border border-gray-200/50">
        <div className="flex flex-col gap-3 w-full items-center">
          {navigationItems.map((item) => {
            const isSelected = item.href === "/";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-center h-10 rounded-xl transition-all",
                  "text-gray-600 hover:text-white",
                  isSelected && "sidebar-item-selected text-white",
                  "hover:sidebar-item-hover",
                  "hover:scale-105 active:scale-95"
                )}
                title={item.label}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}

