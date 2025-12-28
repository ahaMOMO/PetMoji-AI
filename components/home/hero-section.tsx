"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Pet Magic</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-primary via-purple-light to-accent bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#upload">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 h-12 text-base"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="#templates">
              <Button size="lg" variant="outline" className="gap-2 px-8 h-12 text-base bg-transparent">
                {t("hero.secondary")}
              </Button>
            </Link>
          </div>

          {/* Preview Images */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img src="/cute-dog-figurine-collectible.jpg" alt="Pet Figurine" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 -mt-8">
              <img src="/cat-meme-expressions-grid.jpg" alt="Pet Meme" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img src="/dog-wearing-business-suit-portrait.jpg" alt="Pet Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
