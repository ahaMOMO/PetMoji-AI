import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { UploadSection } from "@/components/home/upload-section"
import { TemplatesSection } from "@/components/home/templates-section"
import { FeaturesSection } from "@/components/home/features-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <UploadSection />
        <TemplatesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
