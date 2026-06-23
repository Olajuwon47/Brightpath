import { Loginin } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LOGIN | BrightPath',
  description: 'Know more About us',
}

export default function LoginPage() {
  return (
    <div className="pt-16">
      <Loginin />
    </div>
  )
}
