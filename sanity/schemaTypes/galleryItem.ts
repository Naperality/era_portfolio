// /sanity/schemaTypes/galleryItem.ts
import { defineField, defineType } from 'sanity';

const categories = [
  'character',
  'background',
  'fanart',
  'sampleCommission',
  'model3D',
  'asset3D',
  'timelapseVideo',
];

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: categories.map((c) => ({ title: c, value: c })),
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'file',
      options: {
        accept: 'image/*,video/*',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isVideo',
      title: 'Is this a Video?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
