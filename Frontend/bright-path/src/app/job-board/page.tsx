import { JobFinder  } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job | BrightPath',
  description: 'Fine Jobs, find workers',
}

export default function jobPage() {
  return (
    <div>
      <JobFinder  />
    </div>
  )
}
