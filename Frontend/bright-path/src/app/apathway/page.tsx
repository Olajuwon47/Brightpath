import { Pathway  } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PATHWAY | BrightPath',
  description: 'Become and instructor, Learn from expect hands, fine qualifies experts' ,
}

export default function jobPage() {
  return (
    <div className="pt-3 bg-lime-50">
      <Pathway  />
    </div>
  )
}
