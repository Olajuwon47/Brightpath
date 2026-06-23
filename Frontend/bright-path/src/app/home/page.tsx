// app/home/page.tsx
import { RoutesHomepage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HOME | BrightPath',
  description: 'BrightPath Home',
}

export default function HomePage() {
  return (
   <RoutesHomepage />
   
  )
}
