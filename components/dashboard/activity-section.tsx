"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { List, Filter } from "lucide-react"

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
    <Card>
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
            <Button variant="ghost" size="icon">
              <List className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View More</button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                  V
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-1">{activity.message}</p>
                {activity.subtext && (
                  <p className="text-xs text-gray-500 mb-2">{activity.subtext}</p>
                )}
                {activity.action && (
                  <Button variant="outline" size="sm" className="mt-2">
                    {activity.action.label}
                  </Button>
                )}
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

