"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Template } from "@/lib/templates"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Loader2, Download, Share2, X, Smile, Dog, Palette, Type, ImageIcon } from "lucide-react"

interface GeneratePanelProps {
  uploadedImage: string | null
  selectedTemplate: Template | null
  customPrompt: string
  onPromptChange: (prompt: string) => void
  onClearTemplate: () => void
}

export function GeneratePanel({
  uploadedImage,
  selectedTemplate,
  customPrompt,
  onPromptChange,
  onClearTemplate,
}: GeneratePanelProps) {
  const { t } = useLanguage()
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    setProgress(0)
    setGeneratedImage(null)

    // Simulate generation with progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 300))
      setProgress(i)
    }

    // Simulate generated result
    setGeneratedImage("/ai-generated-pet-art-transformation.jpg")
    setIsGenerating(false)
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement("a")
      link.href = generatedImage
      link.download = "petmoji-creation.png"
      link.click()
    }
  }

  const handleShare = (platform: string) => {
    // Implement share functionality
    console.log("Sharing to", platform)
  }

  return (
    <div className="space-y-6">
      {/* Image Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Original */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Original</p>
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            {uploadedImage ? (
              <img src={uploadedImage || "/placeholder.svg"} alt="Original" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground" />
              </div>
            )}
          </div>
        </div>

        {/* Generated */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Generated</p>
          <div className="aspect-square rounded-lg overflow-hidden bg-muted relative">
            {isGenerating ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  {t("generate.generating")} {progress}%
                </p>
              </div>
            ) : generatedImage ? (
              <img src={generatedImage || "/placeholder.svg"} alt="Generated" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Template Badge */}
      {selectedTemplate && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            {t(selectedTemplate.nameKey)}
            <button onClick={onClearTemplate} className="ml-1 hover:text-destructive">
              <X className="w-3 h-3" />
            </button>
          </Badge>
        </div>
      )}

      {/* Tabs */}
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="basic" className="gap-1 text-xs">
            <Smile className="w-4 h-4" />
            <span className="hidden sm:inline">{t("generate.tabs.basic")}</span>
          </TabsTrigger>
          <TabsTrigger value="breed" className="gap-1 text-xs">
            <Dog className="w-4 h-4" />
            <span className="hidden sm:inline">{t("generate.tabs.breed")}</span>
          </TabsTrigger>
          <TabsTrigger value="style" className="gap-1 text-xs">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">{t("generate.tabs.style")}</span>
          </TabsTrigger>
          <TabsTrigger value="text" className="gap-1 text-xs">
            <Type className="w-4 h-4" />
            <span className="hidden sm:inline">{t("generate.tabs.text")}</span>
          </TabsTrigger>
          <TabsTrigger value="background" className="gap-1 text-xs">
            <ImageIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{t("generate.tabs.background")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4">
          <div className="grid grid-cols-4 gap-2">
            {[
              "😊 Happy",
              "😮 Surprised",
              "😠 Angry",
              "😢 Sad",
              "🤩 Excited",
              "😴 Sleepy",
              "😕 Confused",
              "😎 Cool",
            ].map((emotion) => (
              <Button key={emotion} variant="outline" size="sm" className="text-xs bg-transparent">
                {emotion}
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="breed" className="mt-4">
          <p className="text-sm text-muted-foreground">Breed-specific styles coming soon...</p>
        </TabsContent>

        <TabsContent value="style" className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            {["Cartoon", "Anime", "Oil Painting", "Watercolor", "Pixel Art", "3D Render"].map((style) => (
              <Button key={style} variant="outline" size="sm" className="text-xs bg-transparent">
                {style}
              </Button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="text" className="mt-4">
          <p className="text-sm text-muted-foreground">Text overlay coming soon...</p>
        </TabsContent>

        <TabsContent value="background" className="mt-4">
          <p className="text-sm text-muted-foreground">Background replacement coming soon...</p>
        </TabsContent>
      </Tabs>

      {/* Custom Prompt */}
      <div className="space-y-2">
        <label className="text-sm font-medium">{t("generate.prompt")}</label>
        <Textarea
          placeholder={t("generate.promptPlaceholder")}
          value={customPrompt}
          onChange={(e) => onPromptChange(e.target.value)}
          rows={3}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !uploadedImage}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t("generate.generating")}
            </>
          ) : (
            t("generate.generate")
          )}
        </Button>

        {generatedImage && (
          <>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              {t("generate.download")}
            </Button>
            <Button variant="outline" onClick={() => handleShare("instagram")}>
              <Share2 className="w-4 h-4 mr-2" />
              {t("generate.share")}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
