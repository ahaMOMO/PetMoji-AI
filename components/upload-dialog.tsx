"use client"

import { useCallback } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useDropzone } from "react-dropzone"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadDialogProps {
  open: boolean
  onClose: () => void
  onUpload: (image: string) => void
}

export function UploadDialog({ open, onClose, onUpload }: UploadDialogProps) {
  const { t } = useLanguage()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          onUpload(reader.result as string)
        }
        reader.readAsDataURL(file)
      }
    },
    [onUpload],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  })

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("upload.title")}</DialogTitle>
        </DialogHeader>
        <div
          {...getRootProps()}
          className={cn(
            "flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200",
            isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/50",
          )}
        >
          <input {...getInputProps()} />
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg font-medium mb-2">{t("upload.subtitle")}</p>
          <p className="text-sm text-muted-foreground">{t("upload.formats")}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
