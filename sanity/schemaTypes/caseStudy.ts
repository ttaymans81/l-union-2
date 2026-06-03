import {defineField, defineType} from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
    }),

    defineField({
      name: 'columnOneTitle',
      title: 'Column 1 Title',
      type: 'string',
    }),

    defineField({
      name: 'columnTwoTitle',
      title: 'Column 2 Title',
      type: 'string',
    }),

    defineField({
      name: 'columnThreeTitle',
      title: 'Column 3 Title',
      type: 'string',
    }),

    defineField({
      name: 'challenge',
      title: 'Column 1 Content',
      type: 'text',
    }),

    defineField({
      name: 'solution',
      title: 'Column 2 Content',
      type: 'text',
    }),

    defineField({
      name: 'results',
      title: 'Column 3 Content',
      type: 'text',
    }),

    defineField({
  name: 'vimeoUrl',
  title: 'Vimeo URL',
  type: 'url',
}),

  ],
})