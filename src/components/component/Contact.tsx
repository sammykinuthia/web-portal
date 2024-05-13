import { Link } from "react-router-dom";

export default function Contact() {
    return <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        {/* <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]"> */}
        {/* <div className="flex flex-col justify-center items-center space-y-4"> */}
        <div className="space-y-2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Contact Us</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get in touch with us for all your cleaning needs.
          </p>
        </div>
        <div className="space-y-2 w-full flex flex-col items-center">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">Merton Vinery, La Rue Des Pointes, GY6 8UJ</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            {/* <p className="text-gray-500 dark:text-gray-400">(555) 555-5555</p> */}
            <Link className="text-gray-500 dark:text-gray-400" to="tel:07781103864">0778 110 3864</Link>

          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            {/* <p className="text-gray-500 dark:text-gray-400">info@sparklingclean.com</p> */}
            <Link className="text-gray-500 dark:text-gray-400" to="mailto:firstchoicedomestic@suremail.gg">firstchoicedomestic@suremail.gg</Link>

          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link className='bg-teal-800 py-3 px-8 text-white font-bold ' to="/contacts">Send us a Message</Link>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden" />
      {/* </div> */}
      {/* </div> */}
    </section>
  }



  
function MailIcon(props: any) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function MapPinIcon(props: any) {
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
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props: any) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }