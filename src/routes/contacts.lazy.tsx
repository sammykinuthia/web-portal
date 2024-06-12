import ContactPage from '@/pages/Contacts'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contacts')({
  component: ContactPage,
  
})
