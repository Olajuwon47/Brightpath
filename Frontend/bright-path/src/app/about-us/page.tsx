import { Suspense } from 'react';
import { AboutPage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | BrightPath',
  description: 'Know more About us',
}

export default function  AboutsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPage />
    </Suspense>
  )
}
