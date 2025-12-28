"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTemplates } from "@/hooks/use-templates"
import { TemplateCard } from "@/components/template-card"
import { GeneratePanel } from "@/components/generate-panel"
import { UploadDialog } from "@/components/upload-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function TemplatesGallery() {
  const { t } = useLanguage()
  const { templates, selectedTemplate, selectTemplate, clearTemplate, customPrompt, updatePrompt } = useTemplates()
  const [searchQuery, setSearchQuery] = useState("")
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [showGeneratePanel, setShowGeneratePanel] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const filteredTemplates = templates.filter((template) =>
    t(template.nameKey).toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("templates.title")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t("templates.subtitle")}</p>

        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
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
  )
}
