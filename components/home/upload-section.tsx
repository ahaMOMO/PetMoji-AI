"use client"

import { useState, useCallback } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, ImageIcon, X, Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnalysisResult {
  breed: string
  expression: string
}

export function UploadSection() {
  const { t } = useLanguage()
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setUploadedImage(reader.result as string)
        analyzeImage()
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const analyzeImage = async () => {
    setIsAnalyzing(true)
    setAnalysisResult(null)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setAnalysisResult({
      breed: "Golden Retriever",
      expression: "Happy 😊",
    })
    setIsAnalyzing(false)
  }

  const clearImage = () => {
    setUploadedImage(null)
    setAnalysisResult(null)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false,
  })

  return (
    <section id="upload" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("upload.title")}</h2>
            <p className="text-muted-foreground">{t("upload.subtitle")}</p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {!uploadedImage ? (
                <div
                  {...getRootProps()}
                  className={cn(
                    "flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200",
                    isDragActive
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted/50",
                  )}
                >
                  <input {...getInputProps()} />
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-lg font-medium mb-2">
                    {isDragActive ? "Drop your image here" : t("upload.subtitle")}
                  </p>
                  <p className="text-sm text-muted-foreground">{t("upload.formats")}</p>
                </div>
              ) : (
                <div className="relative">
                  <div className="aspect-video relative">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded pet"
                      className="w-full h-full object-contain bg-muted"
                    />
                    <Button variant="destructive" size="icon" className="absolute top-4 right-4" onClick={clearImage}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Analysis Result */}
                  <div className="p-6 border-t border-border">
                    {isAnalyzing ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin text-primary" />
                        <span className="text-muted-foreground">{t("upload.analyzing")}</span>
                      </div>
                    ) : analysisResult ? (
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                          <Check className="w-4 h-4" />
                          <span className="font-medium">{t("upload.detected")}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                          <ImageIcon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">
                            <span className="text-muted-foreground">{t("upload.breed")}:</span>{" "}
                            <span className="font-medium">{analysisResult.breed}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                          <span className="text-sm">
                            <span className="text-muted-foreground">{t("upload.expression")}:</span>{" "}
                            <span className="font-medium">{analysisResult.expression}</span>
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
