import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.step.finance', 'sf-cms.step.finance'],
  },
  outputFileTracingIncludes: {
    '/admin/[[...segments]]': ['./app/(payload)/admin/**/*'],
    '/api/**/*': ['./payload.config.ts', './payload-types.ts'],
  },
  serverExternalPackages: ['mongoose', 'mongodb'],
}

export default withPayload(nextConfig)
