import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HistoryList } from "@/components/history/history-list"

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HistoryList />
      </main>
      <Footer />
    </div>
  )
}
