"use client"

import { Search, MessageCircle, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-transparent">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Welcome Back, Mark</h1>
            <p className="text-xs text-gray-500">Overview / Athlete Program Dashboard</p>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 w-full"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/40/40" alt="User" />
            <AvatarFallback className="bg-purple-600 text-white">13</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

