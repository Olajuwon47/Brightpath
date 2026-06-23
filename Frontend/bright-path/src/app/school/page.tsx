import { 
  RoutesSchoolpage
} from '@/components'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SCHOOL | BrightPath',
  description: 'All schools in BrightPath',
}

export default function SchoolPage() {
  return (
    <RoutesSchoolpage />
  )
}
