"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"

interface Announcement {
  id: string
  user: {
    name: string
    username: string
    avatar: string
  }
  time: string
  title: string
  description?: string
  context?: string
  image?: string
  type: "video" | "event"
  actions?: {
    primary: { label: string; variant: "destructive" | "default" }
    secondary: { label: string }
  }
  engagement?: {
    likes: number
    replies: number
  }
}

const announcements: Announcement[] = [
  {
    id: "1",
    user: {
      name: "Sam Guy",
      username: "samguy",
      avatar: "/sam1.svg"
    },
    time: "8 hour ago",
    title: "Live video session",
    context: "COACH GORDAN & COACH MCCULLUM Live video session",
    type: "video",
    image: "/announcement1.svg",
    actions: {
      primary: { label: "Join LIVE", variant: "destructive" },
      secondary: { label: "RSVP to Practice" }
    },
    engagement: {
      likes: 20,
      replies: 34
    }
  },
  {
    id: "2",
    user: {
      name: "Sam Guy",
      username: "samguy",
      avatar: "/sam2.svg"
    },
    time: "8 hour ago",
    title: "Casual Ride!",
    description: "Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST near Great Lawn Softball Field 7!",
    type: "event",
    image: "/announcement1.svg"
  }
]

export function AnnouncementsSection() {
  return (
    <Card className="bg-glass-bg">
      <CardHeader className="bg-glass-bg">
        <div className="flex items-center justify-between">
          <CardTitle>Announcements preview</CardTitle>
          <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View More</button>
        </div>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="bg-white">
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={announcement.user.avatar} alt={announcement.user.name} />
                    <AvatarFallback>{announcement.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{announcement.user.name}</span>
                        <span className="text-sm text-gray-500">@{announcement.user.username}</span>
                      </div>
                      <span className="text-sm text-gray-500">{announcement.time}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{announcement.title}</h3>
                    {announcement.context && (
                      <p className="text-sm text-gray-600 mb-2">{announcement.context}</p>
                    )}
                    {announcement.description && (
                      <p className="text-sm text-gray-700 mb-3">{announcement.description}</p>
                    )}
                  </div>
                </div>
                
                {announcement.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      fill
                      className="object-cover"
                    />
                    {announcement.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/play.svg"
                          alt="Play"
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                    )}
                  </div>
                )}
                
                {announcement.actions && (
                  <div className="flex items-center gap-3 mb-3">
                    <button className="live-button px-3 py-1.5 text-sm font-medium flex items-center gap-2">
                      <Image src="/liveplay.svg" alt="Live" width={16} height={16} className="w-4 h-4" />
                      {announcement.actions.primary.label}
                    </button>
                    <button className="rsvp-button px-3 py-1.5 text-sm font-medium flex items-center gap-2">
                      <Image src="/resvp.svg" alt="RSVP" width={16} height={16} className="w-4 h-4" />
                      {announcement.actions.secondary.label}
                    </button>
                    {announcement.engagement && (
                      <div className="flex items-center gap-4 ml-auto">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                          {announcement.engagement.likes} Likes
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MessageCircle className="w-4 h-4" />
                          {announcement.engagement.replies} Replies
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

