// lib/fetchGallery.ts
import { client } from "./client";

export type GalleryItem = {
  _id: string
  title: string
  category: string
  isVideo: boolean
  media: {
    asset: {
      url: string
    }
  }
}

export async function fetchGalleryItems(): Promise<GalleryItem[]> {
  const query = `*[_type == "galleryItem" && !(_id in path("drafts.**"))]{
    _id,
    title,
    category,
    isVideo,
    "media": media{asset->{url}}
  }`

  const items = await client.fetch(query)
  return items
}
