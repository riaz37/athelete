"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

interface Activity {
  id: string
  type: string
  message: string
  subtext?: string
  time: string
  action?: {
    label: string
  }
}

const activities: Activity[] = [
  {
    id: "1",
    type: "task",
    message: "Coach Bronson added a task",
    subtext: "Check the itinerary for optimization suggestions.",
    time: "1 min ago"
  },
  {
    id: "2",
    type: "feedback",
    message: "Coach Johnny gave feedback on your submission",
    time: "1 min ago",
    action: { label: "View Feedback" }
  },
  {
    id: "3",
    type: "comment",
    message: "Coach Sarah replied to your comment",
    subtext: "Check the itinerary for optimization suggestions.",
    time: "1 min ago"
  },
]

export function ActivitySection() {
  return (
    <Card className="bg-glass-bg rounded-[24px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle>Recent Activity</CardTitle>
            <Badge variant="live" className="gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              LIVE
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:bg-gray-100 rounded-lg p-2 transition-colors">
              <Image src="/filter.svg" alt="Filter" width={16} height={16} className="w-4 h-4" />
            </button>
            <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View More</button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 p-3 activity-item-hover transition-colors">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/recent.svg" alt="Recent" />
                <AvatarFallback className="bg-blue-100">
                  <Image src="/recent.svg" alt="Recent" width={40} height={40} className="w-10 h-10" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs gradient-text font-medium shrink-0">{activity.time}</p>
                </div>
                {activity.subtext && (
                  <p className="text-xs text-gray-500 mb-2">{activity.subtext}</p>
                )}
                {activity.action && (
                  <button className="gradient-button text-xs px-3 py-1.5 text-white font-medium mt-2">
                    {activity.action.label}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

