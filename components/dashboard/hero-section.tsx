"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, User, TrendingUp, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame } from "lucide-react"

interface MetricCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change?: string
  progress?: number
}

function MetricCard({ icon, label, value, change, progress }: MetricCardProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/50 rounded-lg">{icon}</div>
            <div>
              <p className="text-xs text-gray-600 mb-1">{label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">{value}</span>
                {change && (
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {change}
                  </span>
                )}
              </div>
            </div>
          </div>
          {progress !== undefined && (
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                  className="text-blue-600"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">{progress}%</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function HeroSection() {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-6">
      <div 
        className="relative min-h-64 bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-8"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"grid\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 100 0 L 0 0 0 100\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23grid)\"/%3E%3C/svg%3E')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">The QB Fundamentals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                icon={<Users className="w-5 h-5 text-blue-600" />}
                label="Total Athletes"
                value="65"
                change="+12"
              />
              <MetricCard
                icon={<User className="w-5 h-5 text-blue-600" />}
                label="Projected Ranking"
                value="#5"
              />
              <MetricCard
                icon={<Calendar className="w-5 h-5 text-blue-600" />}
                label="Consistency Score (last 30 days)"
                value=""
                progress={65}
              />
              <MetricCard
                icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
                label="Weekly Progress"
                value=""
                progress={35}
              />
            </div>
          </div>
          
          <Card className="w-full lg:w-72 bg-white/95 backdrop-blur shrink-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Active Streak</h3>
                <Badge variant="orange" className="gap-1">
                  <Flame className="w-3 h-3" />
                  Hot Streak
                </Badge>
              </div>
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-900 mb-2">12 Days</p>
                <p className="text-sm text-gray-500">Next milestone: 15 days</p>
              </div>
              <div className="flex gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className="text-xs text-gray-500 mb-1">{day}</div>
                    {index < 5 ? (
                      <div className="w-8 h-8 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
                    ) : (
                      <div className="w-8 h-8 mx-auto border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs">
                        {index === 5 ? "23" : "24"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

