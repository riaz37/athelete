"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

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
    image: "/api/placeholder/300/200"
  },
  {
    id: "2",
    title: "Review Ghost Rush Technique feedback",
    progress: 0,
    dueDate: "Due Tomorrow",
    image: "/api/placeholder/300/200"
  },
  {
    id: "3",
    title: "Film Breakdown: Elite Pass Rush",
    progress: 70,
    dueDate: "Due To",
    image: "/api/placeholder/300/200"
  },
]

export function ContinueSection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Continue Where You Left Off</h2>
        <Button variant="outline" size="sm">View More</Button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {continueItems.map((item) => (
          <Card key={item.id} className="min-w-[280px] flex-shrink-0">
            <div className="relative h-40 w-full bg-gray-200 rounded-t-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h3>
              <div className="mb-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-600">{item.progress}% Complete</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
              <p className="text-xs text-gray-500">{item.dueDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

