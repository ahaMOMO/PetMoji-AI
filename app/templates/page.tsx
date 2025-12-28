import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TemplatesGallery } from "@/components/templates/templates-gallery"

export default function TemplatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <TemplatesGallery />
      </main>
      <Footer />
    </div>
  )
}
