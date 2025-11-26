import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.step.finance', 'sf-cms.step.finance'],
  },
}

export default withPayload(nextConfig)
