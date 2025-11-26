import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [
    {
      slug: 'articles',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'coverImage',
          type: 'text',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'DeFi', value: 'defi' },
            { label: 'NFTs', value: 'nfts' },
            { label: 'Markets', value: 'markets' },
            { label: 'DePIN', value: 'depin' },
            { label: 'Gaming', value: 'gaming' },
            { label: 'Stablecoins', value: 'stablecoins' },
          ],
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'authors',
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'publishedAt',
          type: 'date',
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'readTime',
          type: 'number',
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
    {
      slug: 'authors',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'avatar',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'twitter',
          type: 'text',
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/solanafloor',
  }),
})
