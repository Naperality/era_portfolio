// lib/fetchGalleryItems.ts
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}

export async function fetchGalleryItems() {
  const query = `*[_type == "galleryItem"]{
    _id,
    title,
    category,
    mediaType,
    description,
    publishedAt,
    media {
      asset->{
        url
      }
    }
  }`;

  const items = await client.fetch(query);

  return items.map((item: any) => ({
    id: item._id,
    title: item.title,
    category: item.category,
    mediaType: item.mediaType,
    description: item.description,
    publishedAt: item.publishedAt,
    url: item.media?.asset?.url || "",
  }));
}
