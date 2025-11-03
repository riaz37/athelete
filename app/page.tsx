import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/dashboard/hero-section"
import { ContinueSection } from "@/components/dashboard/continue-section"
import { TasksSection } from "@/components/dashboard/tasks-section"
import { ActivitySection } from "@/components/dashboard/activity-section"
import { FeedbackSection } from "@/components/dashboard/feedback-section"
import { AnnouncementsSection } from "@/components/dashboard/announcements-section"
import { LeaderboardSection } from "@/components/dashboard/leaderboard-section"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#E7F2F5]">
      <Sidebar />
      <div className="ml-16">
        <Header />
        <main className="p-6">
          <HeroSection />
          <ContinueSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <TasksSection />
            <div className="space-y-6">
              <ActivitySection />
              <FeedbackSection />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnnouncementsSection />
            <LeaderboardSection />
          </div>
        </main>
      </div>
    </div>
  )
}
