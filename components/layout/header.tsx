"use client"

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="top-0 z-30 w-full bg-transparent">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex items-center -ml-[105px]">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
        <div className="ml-10 md:ml-14">
          <h1 className="text-lg font-semibold text-gray-900">Welcome Back, Mark</h1>
          <p className="text-lg text-gray-500">
            <span>Overview / </span>
            <span className="text-lg font-semibold text-gray-900">Athlete Program Dashboard</span>
          </p>
        </div>
        
        <div className="flex-1"></div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Image
              src="/search.svg"
              alt="Search"
              width={16}
              height={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 w-full rounded-full bg-glass-bg border border-gray-300 text-muted"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full bg-glass-bg border border-gray-300">
            <Image
              src="/chat.svg"
              alt="Chat"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-glass-bg border border-gray-300">
            <Image
              src="/notification.svg"
              alt="Notifications"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/athelete.svg" alt="User" />
            <AvatarFallback className="bg-purple-600 text-white">13</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

