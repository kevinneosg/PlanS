import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payload Admin',
  description: 'Payload CMS Admin Panel',
}

export default function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
