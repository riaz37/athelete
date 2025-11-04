"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface LeaderboardPlayer {
  rank: number
  name: string
  score: number
  avatar: string
  borderColor?: string
}

const topPlayers: LeaderboardPlayer[] = [
  {
    rank: 2,
    name: "Cameron C.",
    score: 293,
    avatar: "/api/placeholder/100/100",
    borderColor: "border-cyan-500"
  },
  {
    rank: 1,
    name: "Marcus Williams",
    score: 327,
    avatar: "/api/placeholder/100/100",
    borderColor: "border-blue-600"
  },
  {
    rank: 3,
    name: "Cameron C.",
    score: 238,
    avatar: "/api/placeholder/100/100",
    borderColor: "border-orange-500"
  }
]

const otherPlayers = [
  { rank: 4, name: "Jane Cooper", score: 210, avatar: "/api/placeholder/40/40", borderColor: "border-red-500" },
  { rank: 5, name: "Ronald Richards", score: 197, avatar: "/api/placeholder/40/40", borderColor: "border-green-500" },
  { rank: 6, name: "Marvin McKinney", score: 185, avatar: "/api/placeholder/40/40", borderColor: "border-blue-500" },
  { rank: 7, name: "Kristin Watson", score: 184, avatar: "/api/placeholder/40/40", borderColor: "border-purple-500" },
  { rank: 8, name: "Esther Howard", score: 172, avatar: "/api/placeholder/40/40", borderColor: "border-gray-500" },
]

export function LeaderboardSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Leaderboard</CardTitle>
          <button className="gradient-button px-4 py-2 text-white text-sm font-medium">View More</button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-900">Jan 2025</p>
        </div>
        
        <div className="flex items-end justify-center gap-2 mb-6">
          {topPlayers.map((player) => (
            <div
              key={player.rank}
              className={`flex flex-col items-center ${
                player.rank === 1 ? "scale-110 z-10" : ""
              }`}
            >
              <Card className={`w-24 border-2 ${player.borderColor} ${
                player.rank === 1 ? "shadow-lg" : ""
              }`}>
                <CardContent className="p-2">
                  <div className="relative mb-2">
                    <div className="w-full h-20 bg-gray-200 rounded overflow-hidden mb-1">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      #{player.rank}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-gray-900 text-center mb-1">{player.name}</p>
                  <p className="text-lg font-bold text-gray-900 text-center">{player.score}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="space-y-3">
          {otherPlayers.map((player) => (
            <div key={player.rank} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
              <div className="text-sm font-semibold text-gray-600 w-8">#{player.rank}</div>
              <Avatar className={`h-10 w-10 border-2 ${player.borderColor}`}>
                <AvatarImage src={player.avatar} alt={player.name} />
                <AvatarFallback className="bg-gray-200">{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{player.name}</p>
              </div>
              <p className="font-bold text-gray-900">{player.score}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

