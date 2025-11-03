"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Flame } from "lucide-react"

interface Feedback {
  id: string
  coach: string
  time: string
  rating: number
  feedback: string
  hasFlame?: boolean
}

const feedbacks: Feedback[] = [
  {
    id: "1",
    coach: "Coach Sarah",
    time: "2h ago",
    rating: 5,
    feedback: "Great progress on your strength training! Stay consistent and keep challenging yourself. You're getting stronger every day—keep pushing!"
  },
  {
    id: "2",
    coach: "Coach Sarah",
    time: "3h ago",
    rating: 5,
    feedback: "Your squat form is looking much better! Stay focused on technique each rep. Keep it up—you're building real strength!",
    hasFlame: true
  },
  {
    id: "3",
    coach: "Coach Sarah",
    time: "4h ago",
    rating: 5,
    feedback: "Solid improvement on your squat technique! Each rep looks more confident. Keep driving forward—you're doing great!"
  },
]

export function FeedbackSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Coach Feedback</CardTitle>
          <Button variant="outline" size="sm">View More</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{feedback.coach}</p>
                  <p className="text-xs text-gray-500">{feedback.time}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < feedback.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feedback.feedback}
                {feedback.hasFlame && (
                  <Flame className="inline-block w-4 h-4 text-orange-500 ml-1" />
                )}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

