import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/dashboard/hero-section"
import { TasksSection } from "@/components/dashboard/tasks-section"
import { ActivitySection } from "@/components/dashboard/activity-section"
import { FeedbackSection } from "@/components/dashboard/feedback-section"
import { AnnouncementsSection } from "@/components/dashboard/announcements-section"
import { LeaderboardSection } from "@/components/dashboard/leaderboard-section"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#E7F2F5]">
      <Sidebar />
      <div className="ml-[140px]">
        <Header />
        <main className="pt-4 px-4 md:pt-6 md:px-6 pb-4 md:pb-6 max-w-[1800px]">
          <HeroSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            <div className="lg:col-span-8">
              <TasksSection />
            </div>
            <div className="lg:col-span-4 space-y-4">
              <ActivitySection />
              <FeedbackSection />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AnnouncementsSection />
            <LeaderboardSection />
          </div>
        </main>
      </div>
    </div>
  )
}
