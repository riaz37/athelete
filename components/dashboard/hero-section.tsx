"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

interface MetricCardProps {
  icon?: React.ReactNode
  label: string
  value: string
  change?: string
  progress?: number
  progressColor?: string
  subLabel?: string
  className?: string
}

function MetricCard({ icon, label, value, change, progress, progressColor = "text-blue-600", subLabel, className }: MetricCardProps) {
  if (progress !== undefined) {
    // Progress card layout
    return (
      <Card className={`bg-[rgba(255,255,255,0.9)] border-0 rounded-[24px] shadow-sm ${className || ''}`}>
        <CardContent className="p-3">
          <div className="flex items-center justify-between h-full">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-xs text-gray-600 mb-1">{label}</p>
              {subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
            </div>
            <div className="relative w-16 h-16 shrink-0">
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
                  className={progressColor}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-bold text-gray-900 leading-none">{progress}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Regular metric card layout
  return (
    <Card className={`bg-[rgba(255,255,255,0.9)] border-0 rounded-[24px] shadow-sm ${className || ''}`}>
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && <div className="p-2 bg-white/50 rounded-lg">{icon}</div>}
            <div>
              <p className="text-xs text-gray-600 mb-1">{label}</p>
              {subLabel && <p className="text-xs text-gray-500 mb-1">{subLabel}</p>}
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
        </div>
      </CardContent>
    </Card>
  )
}

export function HeroSection() {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-4">
      <div className="relative min-h-[500px] hero-bg-image">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* White gradient overlay at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none hero-gradient-overlay" />
        
        {/* Content positioned at the bottom */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-3 p-4 md:p-6 items-end min-h-[500px]">
          <div className="flex-1 w-full">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">The QB Fundamentals</h2>
            <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
              <MetricCard
                icon={<Image src="/h1.svg" alt="Total Athletes" width={20} height={20} className="w-10 h-10" />}
                label="Total Athletes"
                value="65"
                change="+12"
                className="md:col-span-2"
              />
              <MetricCard
                icon={<Image src="/h2.svg" alt="Projected Ranking" width={20} height={20} className="w-5 h-5" />}
                label="Projected Ranking"
                value="#5"
                className="md:col-span-2"
              />
              <MetricCard
                label="Consistency Score"
                value=""
                progress={65}
                subLabel="last 30 days"
                className="md:col-span-4"
              />
              <MetricCard
                label="Weekly Progress"
                value=""
                progress={35}
                progressColor="text-green-600"
                className="md:col-span-4"
              />
            </div>
          </div>
          
          <Card className="w-full lg:w-80 bg-[rgba(255,255,255,0.9)] border-0 backdrop-blur shrink-0 rounded-[24px] shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 text-sm">Active Streak</h3>
                <div className="flex items-center gap-2">
                  <div className="hot-streak-button flex items-center px-4 py-3">
                    <span className="text-xs font-medium text-white">Hot Streak</span>
                  </div>
                  <div className="hot-streak-icon-wrapper rounded-full p-2">
                    <Image src="/fire.svg" alt="Fire" width={24} height={24} className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-2xl font-bold text-purple-900 mb-1">12 Days</p>
                <p className="text-sm text-gray-500">Next milestone: 15 days</p>
              </div>
              <div className="flex gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className="text-xs text-gray-500 mb-1">{day}</div>
                    {index < 4 ? (
                      <div className="w-8 h-8 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
                    ) : (
                      <div className="w-8 h-8 mx-auto border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs">
                        {index === 4 ? "23" : index === 5 ? "24" : "25"}
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

