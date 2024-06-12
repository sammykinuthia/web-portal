import ThankyouPage from '@/pages/Thankyou'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/thankyou')({
  component: ThankyouPage,
})
