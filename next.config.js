import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.step.finance', 'sf-cms.step.finance'],
  },
  outputFileTracingIncludes: {
    '/(payload)/admin/[[...segments]]': [
      './payload.config.ts',
      './app/(payload)/admin/**/*',
    ],
    '/(payload)/api/[...slug]': [
      './payload.config.ts',
    ],
  },
  experimental: {
    reactCompiler: false,
  },
  serverExternalPackages: ['mongoose', 'mongodb'],
}

export default withPayload(nextConfig)
