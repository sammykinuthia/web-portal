import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { buttonVariants } from "./ui/button"

const Offer = () => {
    return (
        <div className='w-full text-red-500 bg-teal-900 p-4 flex flex-col justify-center items-center'>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic uppercase font-bold text-gray-200 text-center">Get in touch with us to enjoy this exclusive price</h3>
            <div className=" drop-shadow-lg shadow-pink-500 rounded-full box-decoration-clone bg-gradient-to-t from-pink-700 to-teal-900 via-pink-900 text-white w-auto px-8 mt-4 h-20  flex justify-center items-center">
                <h3 className="  z-10  text-2xl text-white font-bold">£21.50 /<span className="text-base text-gray-300"> Cleaner</span> /<span className="text-base text-gray-300">  Hr</span></h3>
            </div>
            <Link className={cn(buttonVariants({variant:"outline"}), "mt-4 flex items-center gap-2 ")} to={'/contacts'}>Book Now
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="2.4em" height="2.4em" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"/><path fill="currentColor" d="M16 24h17v2H16z"/></svg>
            </Link>
        </div>
    )
}

export default Offer