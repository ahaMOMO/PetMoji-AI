"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useAuth } from "@/lib/auth/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Download, Trash2, ImageIcon } from "lucide-react"

interface HistoryItem {
  id: string
  thumbnail: string
  template: string
  createdAt: Date
}

// Mock data - replace with actual API
const mockHistory: HistoryItem[] = [
  {
    id: "1",
    thumbnail: "/pet-figurine-ai-art.jpg",
    template: "Pet Figurine",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    thumbnail: "/cat-meme-expressions.jpg",
    template: "9-Grid Meme",
    createdAt: new Date("2024-01-14"),
  },
  {
    id: "3",
    thumbnail: "/dog-in-business-suit.jpg",
    template: "Pet Portrait",
    createdAt: new Date("2024-01-13"),
  },
]

export function HistoryList() {
  const { t } = useLanguage()
  const { user } = useAuth()
  const [history, setHistory] = useState<HistoryItem[]>(mockHistory)

  const handleDelete = (id: string) => {
    setHistory(history.filter((item) => item.id !== id))
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("history.title")}</h1>
        <p className="text-muted-foreground">Please log in to view your history</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t("history.title")}</h1>

      {history.length === 0 ? (
        <Card className="max-w-md mx-auto">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ImageIcon className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg mb-2">{t("history.empty")}</h3>
            <p className="text-sm text-muted-foreground">{t("history.emptyDesc")}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {history.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.template}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" variant="secondary">
                      <Edit className="w-4 h-4 mr-1" />
                      {t("history.reEdit")}
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.template}</Badge>
                    <span className="text-xs text-muted-foreground">{item.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
