import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
    }),

    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'text',
    }),

    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),

    defineField({
  name: 'featuredProjects',
  title: 'Featured Case Studies',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{type: 'caseStudy'}],
    },
  ],
}),
  ],
})