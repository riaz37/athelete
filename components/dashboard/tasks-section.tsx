"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Bell, Check, Play } from "lucide-react"

interface Task {
  id: string
  title: string
  team: string
  status: string
  tag?: {
    label: string
    variant: "purple" | "live"
  }
  time?: string
  action: {
    label: string
    icon: React.ReactNode
    variant: "default" | "secondary"
  }
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Linebacker Drills",
    team: "Hawaii Trench Warriors",
    status: "Due Today",
    tag: { label: "Video Submission Required", variant: "purple" },
    action: { label: "Upload", icon: <Upload className="w-4 h-4" />, variant: "default" }
  },
  {
    id: "2",
    title: "University Of Oregon Virtual Camp",
    team: "Hawaii Trench Warriors",
    status: "5:30 pm",
    tag: { label: "LIVE", variant: "live" },
    action: { label: "Remind Me", icon: <Bell className="w-4 h-4" />, variant: "default" }
  },
  {
    id: "3",
    title: "QB Fundamentals",
    team: "Hawaii Trench Warriors",
    status: "Complete",
    action: { label: "Done", icon: <Check className="w-4 h-4" />, variant: "secondary" }
  },
  {
    id: "4",
    title: "Practice Reading Offense Quiz",
    team: "Hawaii Trench Warriors",
    status: "3 days left",
    action: { label: "Start", icon: <Play className="w-4 h-4" />, variant: "default" }
  },
]

const days = [
  { day: "Sun", date: "3/11" },
  { day: "Mon", date: "3/12" },
  { day: "Tue", date: "3/13" },
  { day: "Wed", date: "3/14" },
  { day: "Thu", date: "3/15", current: true },
  { day: "Fri", date: "3/16" },
  { day: "Sat", date: "3/17" },
]

export function TasksSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Todays tasks</CardTitle>
          <Button variant="outline" size="sm">View Entire Schedule</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {days.map((d, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center min-w-[60px] p-2 rounded-lg ${
                d.current ? "bg-blue-50" : ""
              }`}
            >
              <div className="text-xs text-gray-600 mb-1">{d.day}</div>
              <div className={`text-sm font-medium ${d.current ? "text-blue-600" : "text-gray-900"}`}>
                {d.date}
              </div>
              {d.current && (
                <div className="mt-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {task.tag && (
                    <Badge variant={task.tag.variant} className="text-xs">
                      {task.tag.label}
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{task.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{task.team}</p>
                <p className={`text-sm ${
                  task.status === "Complete" ? "text-green-600" : 
                  task.status === "Due Today" ? "text-red-600" : 
                  "text-gray-500"
                }`}>
                  {task.status}
                </p>
              </div>
              <Button 
                variant={task.action.variant} 
                size="sm"
                className="shrink-0"
              >
                {task.action.icon}
                {task.action.label}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

