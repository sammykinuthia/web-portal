
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card"

export default function Testimonials() {
    return (
        <div className=" w-full container mx-auto flex flex-col justify-center items-center my-8">
            <div className="w-full flex justify-center my-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">What Our Customers Say</h2>
            </div>

            <Carousel  className="w-full max-w-3xl">
                <CarouselContent >
                    <CarouselItem>
                        <Card className="p-10 rounded-lg">
                            <CardHeader className="flex flex-col items-center">
                                <h4 className="font-semibold">Jules Winnfield</h4>
                                <CardDescription>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    “The customer service I received was exceptional. The support team went above and beyond to address my
                                    concerns.”
                                </blockquote>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className="p-10 rounded-lg">
                            <CardHeader className="flex flex-col items-center">
                                <h4 className="font-semibold">Jules Winnfield</h4>
                                <CardDescription>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    “The customer service I received was exceptional. The support team went above and beyond to address my
                                    concerns.”
                                </blockquote>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className="p-10 rounded-lg">
                            <CardHeader className="flex flex-col items-center">
                                <h4 className="font-semibold">Jules Winnfield</h4>
                                <CardDescription>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    “The customer service I received was exceptional. The support team went above and beyond to address my
                                    concerns.”
                                </blockquote>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                   
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>

    )
}
