import { SUBCRIPTION  } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SUBCRIPTION | BrightPath',
  description: 'fee of a course',
}

export default function jobPage() {
  return (
    <div  className="pt-2">
      <SUBCRIPTION  />
    </div>
  )
}
