"use client"

import { useState, useCallback } from "react"
import { templates, type Template } from "@/lib/templates"

export function useTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [customPrompt, setCustomPrompt] = useState("")

  const selectTemplate = useCallback((templateId: string) => {
    const template = templates.find((t) => t.id === templateId)
    if (template) {
      setSelectedTemplate(template)
      setCustomPrompt(template.prompt)
    }
  }, [])

  const clearTemplate = useCallback(() => {
    setSelectedTemplate(null)
    setCustomPrompt("")
  }, [])

  const updatePrompt = useCallback((prompt: string) => {
    setCustomPrompt(prompt)
  }, [])

  return {
    templates,
    selectedTemplate,
    customPrompt,
    selectTemplate,
    clearTemplate,
    updatePrompt,
  }
}
