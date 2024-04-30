import { Link } from "react-router-dom"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import img1 from '/1.webp'
import img2 from '/2.webp'
import img3 from '/3.webp'

export default function Component() {
    return (
        <section className="w-full py-12">
            <div className="container mx-auto ">
                <Carousel className="mx-4 md:mx-6">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Revitalize Your Environment
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Transform your home or office into a sanctuary of cleanliness. Our expert team meticulously restores your space, leaving it refreshed and inviting.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-800 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-teal-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                            to="/contacts"
                                        >
                                            Get Started
                                        </Link>
                                        <Link
                                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                            to="#services"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom object-cover sm:w-full lg:order-last lg:aspect-square"
                                    height="550"
                                    src={img1}
                                    width="550"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Cleaning Solutions Tailored to You
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        No two spaces are the same, which is why our cleaning services are customized to meet your unique needs. Enjoy a personalized cleaning experience like no other.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-800 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-teal-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                            to="/contacts"
                                        >
                                            Get Started
                                        </Link>
                                        <Link
                                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                            to="#services"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom object-cover sm:w-full lg:order-last lg:aspect-square"
                                    height="550"
                                    src={img2}
                                    width="550"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Office Brilliance, Inside and Out
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Impress clients and boost productivity with our comprehensive office cleaning solutions. From workstations to common areas, we ensure every inch shines with professionalism."
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-teal-800 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-teal-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                            to="/contacts"
                                        >
                                            Get Started
                                        </Link>
                                        <Link
                                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                            to="#services"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom object-cover sm:w-full lg:order-last lg:aspect-square"
                                    height="550"
                                    src={img3}
                                    width="550"
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

