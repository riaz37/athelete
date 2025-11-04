"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Check, Calendar, Clock } from "lucide-react"
import Image from "next/image"

interface Task {
  id: string
  title: string
  team: string
  teamColor: "blue" | "orange"
  status: string
  statusIcon: React.ReactNode
  tag?: {
    label: string
    variant: "grey" | "live"
  }
  action: {
    label: string
    iconSrc?: string
    icon?: React.ReactNode
    variant: "default" | "secondary"
    disabled?: boolean
  }
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Linebacker Drills",
    team: "Hawaii Trench Warriors",
    teamColor: "blue",
    status: "Due Today",
    statusIcon: <Calendar className="w-3.5 h-3.5" />,
    tag: { label: "Video Submission Required", variant: "grey" },
    action: { label: "Upload", iconSrc: "/upload.svg", variant: "default" }
  },
  {
    id: "2",
    title: "University Of Oregon Virtual Camp",
    team: "Hawaii Trench Warriors",
    teamColor: "orange",
    status: "5:30 pm",
    statusIcon: <Clock className="w-3.5 h-3.5" />,
    tag: { label: "Live", variant: "live" },
    action: { label: "Remind Me", iconSrc: "/remind.svg", variant: "default" }
  },
  {
    id: "3",
    title: "QB Fundamentals",
    team: "Hawaii Trench Warriors",
    teamColor: "blue",
    status: "Complete",
    statusIcon: <Check className="w-3.5 h-3.5" />,
    action: { label: "Done", icon: <Check className="w-4 h-4" />, variant: "secondary", disabled: true }
  },
  {
    id: "4",
    title: "Practice Reading Offense Quiz",
    team: "Hawaii Trench Warriors",
    teamColor: "blue",
    status: "3 days left",
    statusIcon: <Calendar className="w-3.5 h-3.5" />,
    action: { label: "Start", iconSrc: "/start.svg", variant: "default" }
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
    dueDate: "Due Today",
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
            <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View More</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {continueItems.map((item) => (
              <Card key={item.id} className="min-w-[280px] shrink-0 flex flex-col">
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
                <CardContent className="p-3 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xs line-clamp-2">{item.title}</h3>
                  <div className="mb-2 progress-gradient-wrapper">
                    <Progress 
                      value={item.progress} 
                      className="h-1.5" 
                    />
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-600">{item.progress}% Complete</span>
                    <div className="flex items-center gap-1">
                      <Image src="/due.svg" alt="Due" width={12} height={12} className="w-3 h-3" />
                      <p className="text-xs text-gray-500">{item.dueDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Tasks Section */}
        <Card>
          <CardContent className="p-4 pb-8">
            <CardHeader className="px-0 pt-0 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Todays tasks</CardTitle>
                <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View Entire Schedule</button>
              </div>
            </CardHeader>
            <div className="flex gap-2 mb-4 pb-2">
              {days.map((d, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col items-center flex-1 p-3 rounded-[16px] date-card-shadow ${
                    d.current ? "bg-[rgba(255,255,255,1)]" : "bg-[rgba(255,255,255,0.4)]"
                  }`}
                >
                  {d.current && (
                    <div className="absolute top-2 right-2 w-2 h-2 date-indicator"></div>
                  )}
                  <div className="text-lg text-gray-600 mb-0.5">{d.day}</div>
                  <div className={`text-xs font-medium ${d.current ? "" : "text-gray-900"}`}>
                    {d.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2.5">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between gap-3 p-3 border border-gray-200 rounded-lg bg-white">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{task.title}</h3>
                      {task.tag && (
                        <Badge variant={task.tag.variant} className="text-xs shrink-0">
                          {task.tag.label}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-sm ${
                        task.teamColor === "blue" ? "bg-blue-600" : "bg-orange-500"
                      }`} />
                      <p className="text-xs text-gray-600 line-clamp-1">{task.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className={`flex items-center gap-1 text-xs ${
                      task.status === "Complete" ? "text-green-600" : 
                      task.status === "Due Today" ? "text-gray-900" : 
                      "text-gray-900"
                    }`}>
                      {task.statusIcon}
                      <span>{task.status}</span>
                    </div>
                    {task.action.disabled ? (
                      <button 
                        disabled
                        className="done-button text-gray-900 text-xs h-8 px-3 font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {task.action.iconSrc ? (
                          <Image src={task.action.iconSrc} alt="" width={16} height={16} className="w-4 h-4" />
                        ) : (
                          task.action.icon
                        )}
                        {task.action.label}
                      </button>
                    ) : (
                      <button className="gradient-button text-xs h-8 px-3 text-white font-medium flex items-center gap-2">
                        {task.action.iconSrc ? (
                          <Image src={task.action.iconSrc} alt="" width={16} height={16} className="w-4 h-4" />
                        ) : (
                          task.action.icon
                        )}
                        {task.action.label}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

