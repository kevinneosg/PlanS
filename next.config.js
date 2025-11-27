import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.step.finance', 'sf-cms.step.finance'],
  },
  experimental: {
    reactCompiler: false,
  },
  serverExternalPackages: ['mongoose', 'mongodb'],
}

export default withPayload(nextConfig)
