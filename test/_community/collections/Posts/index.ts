import type { CollectionConfig } from 'payload'

import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
    enableListViewSelectAPI: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            inlineBlocks: [
              {
                slug: 'highlight',
                fields: [
                  {
                    name: 'styles',
                    type: 'select',
                    hasMany: true,
                    options: [
                      { label: 'Option 1', value: 'opt1' },
                      { label: 'Option 2', value: 'opt2' },
                    ],
                    defaultValue: [],
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
  ],
}
