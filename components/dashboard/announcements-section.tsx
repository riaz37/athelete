"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, MessageCircle } from "lucide-react"

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
      avatar: "/api/placeholder/40/40"
    },
    time: "8 hour ago",
    title: "Live video session",
    context: "COACH GORDAN & COACH MCCULLUM Live video session",
    type: "video",
    image: "/api/placeholder/600/300",
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
      avatar: "/api/placeholder/40/40"
    },
    time: "8 hour ago",
    title: "Casual Ride!",
    description: "Join us for our Friday morning casual bike ride around central park! We will meet you all @6AM EST near Great Lawn Softball Field 7!",
    type: "event",
    image: "/api/placeholder/600/300"
  }
]

export function AnnouncementsSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Announcements preview</CardTitle>
          <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View More</button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={announcement.user.avatar} alt={announcement.user.name} />
                  <AvatarFallback>{announcement.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{announcement.user.name}</span>
                    <span className="text-sm text-gray-500">@{announcement.user.username}</span>
                    <span className="text-sm text-gray-400">•</span>
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
                  {announcement.type === "video" ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white"></div>
                    </div>
                  )}
                </div>
              )}
              
              {announcement.actions && (
                <div className="flex items-center gap-3 mb-3">
                  <Button variant={announcement.actions.primary.variant} size="sm" className="gap-2">
                    {announcement.actions.primary.label}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Calendar className="w-4 h-4" />
                    {announcement.actions.secondary.label}
                  </Button>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

