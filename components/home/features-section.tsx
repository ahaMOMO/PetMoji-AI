"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Sparkles, Zap, Share2, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    titleKey: "AI-Powered Magic",
    descKey: "Advanced AI transforms your pet photos into stunning artwork in seconds",
  },
  {
    icon: Zap,
    titleKey: "Lightning Fast",
    descKey: "Get results in under 30 seconds with our optimized generation pipeline",
  },
  {
    icon: Share2,
    titleKey: "Easy Sharing",
    descKey: "Share directly to Instagram, Facebook, Twitter with one click",
  },
  {
    icon: Shield,
    titleKey: "Privacy First",
    descKey: "Your photos are processed securely and never stored without permission",
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.titleKey}</h3>
              <p className="text-sm text-muted-foreground">{feature.descKey}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
