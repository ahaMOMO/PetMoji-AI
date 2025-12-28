export interface Template {
  id: string
  nameKey: string
  descKey: string
  prompt: string
  loraModel: string
  previewBefore: string
  previewAfter: string
  isWeeklyTop?: boolean
}

export const templates: Template[] = [
  {
    id: "figurine",
    nameKey: "templates.figurine",
    descKey: "templates.figurineDesc",
    prompt:
      "hyper-detailed pet figurine, realistic plastic texture, 8k, studio lighting, white background, collectible toy figure style",
    loraModel: "figurine-lora-v1",
    previewBefore: "/cute-golden-retriever-photo.jpg",
    previewAfter: "/golden-retriever-collectible-figurine-toy.jpg",
    isWeeklyTop: true,
  },
  {
    id: "meme-grid",
    nameKey: "templates.memeGrid",
    descKey: "templates.memeGridDesc",
    prompt:
      "9-grid meme pack, various emotions (happy/surprised/angry/sad/excited/sleepy/confused/love/cool), consistent style, social media ready, expressive faces",
    loraModel: "meme-pack-lora-v2",
    previewBefore: "/person-portrait-photo.jpg",
    previewAfter: "/9-grid-emoji-meme-expressions-various-emotions.jpg",
    isWeeklyTop: true,
  },
  {
    id: "anthropomorphic",
    nameKey: "templates.anthropomorphic",
    descKey: "templates.anthropomorphicDesc",
    prompt:
      "anthropomorphic pet, formal business suit, office desk background, realistic photo, 4k, professional portrait, corporate style",
    loraModel: "anthropomorphic-lora-v1",
    previewBefore: "/cute-cat-photo.jpg",
    previewAfter: "/cat-wearing-business-suit-professional-portrait.jpg",
    isWeeklyTop: true,
  },
  {
    id: "id-photo",
    nameKey: "templates.idPhoto",
    descKey: "templates.idPhotoDesc",
    prompt:
      "cute pet ID photo, traditional Chinese architecture background, cherry blossoms, clear features, soft focus, artistic portrait",
    loraModel: "id-photo-lora-v1",
    previewBefore: "/cute-puppy-photo.jpg",
    previewAfter: "/cute-puppy-id-photo-traditional-asian-background.jpg",
  },
]
