import { Link } from 'react-router-dom'
import logo from '/public/cleaning.png'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-8 sm:py-12 border-t border-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800">
        <div className="w-full flex  justify-center items-center space-x-4 mb-8">
          <Link className="flex flex-col items-center space-x-2" to="#">
            {/* <MountainIcon className="h-6 w-6 text-gray-400 dark:text-gray-400" /> */}
            <img src={logo} className='size-20' alt='logo'/>

            <span className="text-lg font-semibold">First Choice Domestic Cleaning</span>
          </Link>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between space-y-4 ">
        <nav className="flex items-center space-x-4">
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="/services">
            Services
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="/contacts">
            Contacts
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="#">
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="#">
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="#">
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" to="#">
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} First Choice Domestic Cleaning. All rights reserved.</div>
      </div>
    </footer>
  )
}

function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
