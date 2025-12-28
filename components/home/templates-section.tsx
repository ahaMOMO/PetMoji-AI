"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTemplates } from "@/hooks/use-templates"
import { TemplateCard } from "@/components/template-card"
import { GeneratePanel } from "@/components/generate-panel"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UploadDialog } from "@/components/upload-dialog"

export function TemplatesSection() {
  const { t } = useLanguage()
  const { templates, selectedTemplate, selectTemplate, clearTemplate, customPrompt, updatePrompt } = useTemplates()
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [showGeneratePanel, setShowGeneratePanel] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleTemplateSelect = (templateId: string) => {
    selectTemplate(templateId)
    if (!uploadedImage) {
      setShowUploadDialog(true)
    } else {
      setShowGeneratePanel(true)
    }
  }

  const handleImageUpload = (image: string) => {
    setUploadedImage(image)
    setShowUploadDialog(false)
    setShowGeneratePanel(true)
  }

  return (
    <section id="templates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("templates.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("templates.subtitle")}</p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate?.id === template.id}
              onSelect={() => handleTemplateSelect(template.id)}
            />
          ))}
        </div>

        {/* Upload Dialog */}
        <UploadDialog open={showUploadDialog} onClose={() => setShowUploadDialog(false)} onUpload={handleImageUpload} />

        {/* Generate Panel Dialog */}
        <Dialog open={showGeneratePanel} onOpenChange={setShowGeneratePanel}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{t("generate.title")}</DialogTitle>
            </DialogHeader>
            <GeneratePanel
              uploadedImage={uploadedImage}
              selectedTemplate={selectedTemplate}
              customPrompt={customPrompt}
              onPromptChange={updatePrompt}
              onClearTemplate={clearTemplate}
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
