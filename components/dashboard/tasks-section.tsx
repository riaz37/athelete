"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Bell, Check, Play } from "lucide-react"
import Image from "next/image"

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

interface ContinueItem {
  id: string
  title: string
  progress: number
  dueDate: string
  image: string
}

const continueItems: ContinueItem[] = [
  {
    id: "1",
    title: "Review Approach Feedback",
    progress: 70,
    dueDate: "Due Today",
    image: "/v1.svg"
  },
  {
    id: "2",
    title: "Review Ghost Rush Technique feedback",
    progress: 0,
    dueDate: "Due Tomorrow",
    image: "/v2.svg"
  },
  {
    id: "3",
    title: "Film Breakdown: Elite Pass Rush",
    progress: 70,
    dueDate: "Due To",
    image: "/v3.svg"
  },
]

export function TasksSection() {
  return (
    <Card className="h-full bg-glass-bg rounded-3xl">
      <CardContent className="p-4 space-y-4">
        {/* Continue Where You Left Off Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Continue Where You Left Off</h2>
            <Button variant="outline" size="sm">View More</Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {continueItems.map((item) => (
              <Card key={item.id} className="min-w-[280px] flex-shrink-0">
                <div className="relative h-48 w-full bg-gray-200 rounded-t-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/play.svg"
                      alt="Play"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-1.5 text-xs line-clamp-2">{item.title}</h3>
                  <div className="mb-1.5">
                    <div className="flex items-center justify-between text-xs mb-0.5">
                      <span className="text-gray-600">{item.progress}% Complete</span>
                    </div>
                    <Progress value={item.progress} className="h-1.5" />
                  </div>
                  <p className="text-xs text-gray-500">{item.dueDate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Tasks Section */}
        <Card>
          <CardContent className="p-4">
            <CardHeader className="px-0 pt-0 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Todays tasks</CardTitle>
                <Button variant="outline" size="sm">View Entire Schedule</Button>
              </div>
            </CardHeader>
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {days.map((d, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center min-w-[50px] p-1.5 rounded-lg ${
                    d.current ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="text-xs text-gray-600 mb-0.5">{d.day}</div>
                  <div className={`text-xs font-medium ${d.current ? "text-blue-600" : "text-gray-900"}`}>
                    {d.date}
                  </div>
                  {d.current && (
                    <div className="mt-0.5">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-2.5">
              {tasks.slice(0, 3).map((task) => (
                <div key={task.id} className="flex items-start justify-between gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {task.tag && (
                        <Badge variant={task.tag.variant} className="text-xs">
                          {task.tag.label}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-0.5 text-sm line-clamp-1">{task.title}</h3>
                    <p className="text-xs text-gray-600 mb-0.5 line-clamp-1">{task.team}</p>
                    <p className={`text-xs ${
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
                    className="shrink-0 text-xs h-8 px-3"
                  >
                    {task.action.icon}
                    {task.action.label}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

