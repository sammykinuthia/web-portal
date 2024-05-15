
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"
import AutoPlay from "embla-carousel-autoplay" 

const testimonialList = [
    {
        name: "Sarah Johnson",
        title: "Busy Professional",
        review: "I cannot express how grateful I am for the exceptional cleaning service provided by this company. As a busy professional, I barely have time to catch my breath, let alone scrub floors and clean windows. Their team swooped in like cleaning superheroes and left my home sparkling. Thank you for giving me back my weekends!"
    },
    {
        name: "David Smith",
        title: "Satisfied Homeowner",
        review: "I've tried a few cleaning services in the past, but none have impressed me as much as this company. From the moment I contacted them, their professionalism shone through. The cleaners were punctual, courteous, and incredibly thorough. My house has never looked better. Highly recommend!"
    },
    {
        name: "Emily Carter",
        title: "Busy Parent",
        review: "With two young children and a hectic schedule, keeping my house clean feels like an impossible task. That's where this cleaning service comes in. They've been a lifesaver, taking the stress of cleaning off my shoulders. Their attention to detail is impeccable, and I appreciate the peace of mind knowing my home is in good hands."
    },
    {
        name: "Michael Thompson",
        title: "Office Manager",
        review: "As an office manager, maintaining a clean and hygienic workspace is crucial. I've been using this company for our office cleaning needs for several months now, and I couldn't be happier with the results. Their cleaners are efficient, reliable, and always leave our workspace looking pristine. A top-notch service all around."
    },
    {
        name: "Rachel Miller",
        title: "Airbnb Host",
        review: "As an Airbnb host, cleanliness is key to providing a positive guest experience. I've entrusted this company with the cleaning of my properties, and they've consistently delivered outstanding results. Their attention to detail ensures that each guest arrives to a spotless space, helping me maintain my Superhost status. Thank you for your dedication to excellence!"
    },
    {
        name: "John Evans",
        title: "Retiree",
        review: "I may be retired, but that doesn't mean I enjoy spending my days cleaning. That's why I turned to this cleaning service, and I'm so glad I did. They take care of all the dirty work, allowing me to relax and enjoy."
    }
]

export default function Testimonials() {
    return (
        <div className=" w-full container mx-auto flex flex-col justify-center items-center my-8">
            <div className="w-full flex justify-center my-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">What Our Customers Say</h2>
            </div>

            <Carousel className="w-full max-w-3xl" opts={{loop:true}} plugins={[AutoPlay({delay: 3000})]}>
                <CarouselContent >
                    {testimonialList.map((t, i) => (
                        <CarouselItem key={i}>
                            <Card className="p-4 md:p-10 rounded-lg">
                                <CardHeader className="flex flex-col items-center">
                                    <h4 className="font-semibold">{t.name}</h4>
                                    <CardDescription>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="text-lg font-semibold leading-snug">
                                        “{t.review}”
                                    </blockquote>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}


                </CarouselContent>
                <CarouselPrevious className="hidden md:absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="hidden md:absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>

    )
}
