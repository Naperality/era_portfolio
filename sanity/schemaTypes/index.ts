import { type SchemaTypeDefinition } from 'sanity'
// /sanity/schema.ts
import { galleryItem } from './galleryItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryItem],
}
