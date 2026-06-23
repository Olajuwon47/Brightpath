import { Register } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REGISTER | BrightPath',
  description: 'Registration page',
}

export default function RegisterPage() {
  return (
    <div className="pt-16">
      <Register />
    </div>
  )
}
