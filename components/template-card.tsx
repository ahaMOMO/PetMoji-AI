"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import type { Template } from "@/lib/templates"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TemplateCardProps {
  template: Template
  isSelected: boolean
  onSelect: () => void
}

export function TemplateCard({ template, isSelected, onSelect }: TemplateCardProps) {
  const { t } = useLanguage()

  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl",
        isSelected && "ring-2 ring-primary shadow-lg",
      )}
      onClick={onSelect}
    >
      <CardContent className="p-0">
        {/* Preview Images */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 flex">
            {/* Before */}
            <div className="w-1/2 relative overflow-hidden">
              <img
                src={template.previewBefore || "/placeholder.svg"}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 backdrop-blur rounded text-xs font-medium">
                Before
              </div>
            </div>
            {/* After */}
            <div className="w-1/2 relative overflow-hidden">
              <img
                src={template.previewAfter || "/placeholder.svg"}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-primary/80 backdrop-blur rounded text-xs font-medium text-primary-foreground">
                After
              </div>
            </div>
          </div>

          {/* Weekly Top Badge */}
          {template.isWeeklyTop && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{t("templates.weeklyTop")}</Badge>
          )}

          {/* Selected Indicator */}
          {isSelected && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-5 h-5 text-primary-foreground" />
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-1">
              {t("templates.useTemplate")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold mb-1">{t(template.nameKey)}</h3>
          <p className="text-sm text-muted-foreground">{t(template.descKey)}</p>
        </div>
      </CardContent>
    </Card>
  )
}
