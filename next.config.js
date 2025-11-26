import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.step.finance', 'sf-cms.step.finance'],
  },
  experimental: {
    outputFileTracingIncludes: {
      '/admin/[[...segments]]': ['./app/(payload)/admin/importMap.js'],
    },
  },
}

export default withPayload(nextConfig)
