'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/studio` route.
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structure } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structure(), // ✅ directly call structure()
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
