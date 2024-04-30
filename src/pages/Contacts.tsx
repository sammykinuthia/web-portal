
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

function ContactPage() {
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 bg-teal-800 flex flex-col items-center justify-center p-8 lg:p-12">
            <h1 className="text-3xl text-teal-100 my-4 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Get in Touch
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Have a question? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader className="border-b ">
                <CardTitle className="text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 my-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input className="border-gray-200 rounded-xl placeholder:text-gray-400" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input className="border-gray-200 rounded-xl placeholder:text-gray-400" id="email" placeholder="Enter your email" type="email" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea className="min-h-[150px] border-gray-200 rounded-xl placeholder:text-gray-400" id="message" placeholder="Enter your message" />
                  </div>
                </form>
                <CardFooter>
                  <Button className="w-full bg-teal-800 text-white rounded-xl  hover:bg-teal-700 active:bg-teal-700" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="my-8 md:my-12">
          <Card className="w-full ">
            <CardHeader>
              <CardTitle>Hours of Operation</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-medium">Business Hours</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monday - Friday: 9am - 5pm
                  <br />
                  Saturday: 10am - 3pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Contact</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone:
                  <Link to="#">+1 (234) 567-890</Link>
                  <br />
                  Email:
                  <Link to="#">info@example.com</Link>
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Location</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Merton Vinery, La Rue Des Pointes, GY6 8UJ.</p>
                {/* <div className="mt-2">
                  <img
                    alt="Map of business location"
                    className="rounded-md"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/150",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactPage



