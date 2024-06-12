
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const thanksUrl = import.meta.env.VITE_THANKS_URL;

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
                <form className="space-y-4 my-4" action="https://formsubmit.co/cf3fbde17720892617c235796359ec19" method="POST">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input required className="border-gray-200 rounded-xl placeholder:text-gray-400" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input required className="border-gray-200 rounded-xl placeholder:text-gray-400" id="email" name="email" placeholder="Enter your email" type="email" />
                    </div>
                  </div>
                  <input type="hidden" name="_captcha" value="false"/>
                  <input type="hidden" name="_next" value={thanksUrl}/>
                  <input type="hidden" name="_subject" value="WEBSITE:Cleaning Service Message"/>

                  <div className="space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea required className="min-h-[150px] border-gray-200 rounded-xl placeholder:text-gray-400" id="message" name="message" placeholder="Enter your message" />
                  </div>
                <CardFooter className="px-0">
                  <Button className="w-full bg-teal-800 text-white rounded-xl  hover:bg-teal-700 active:bg-teal-700" type="submit">
                    Submit
                  </Button>
                </CardFooter>
                </form>
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
                  <a href="tel:07781103864"> 0778 110 3864</a>
                  <br />
                  Email:
                  <a href="mailto:firstchoicedomestic@suremail.gg"> firstchoicedomestic@suremail.gg</a>
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Location</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Merton Vinery, La Rue Des Pointes, GY6 8UJ.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactPage



