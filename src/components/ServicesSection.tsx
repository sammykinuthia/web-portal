import clean from '/clean.webp'
import office from '/office.webp'


const domestic = [
  "Regular Weekly Home Cleaning",
  "Fortnightly Cleaning",
  "One-Off Cleaning",
  "Spring Cleaning",
  "After Builder Clean",
  "Short Notice Clean",
  "24/7 Cleaning"
]

const commercial = [
  "Commercial Cleaning",
  "Office Cleaning",
  "Event Cleaning"
]

export default function ServicesSection() {
  return (
    <>
      <section id='services' className="w-full py-12 ">
        <div className="container px-4 md:px-6">
          <div className="">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none my-4 text-center">Our Services</h1>
          </div>
          <div className="grid gap-3 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] p-4">
            <div className="flex flex-col  space-y-4">
              <div className="space-y-2 p-4 md:px-12">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter  my-4">Home Cleaning Solutions</h1>
               {domestic.map((d,i)=>(
                 <div key={i} className="flex items-center gap-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#00695C" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" /></svg>
                 <p className='text-lg'>{d}</p>
               </div>
               ))}
               
              </div>
            </div>
            <img
              alt="Sparkling Clean"
              className="mx-auto w-full aspect-video  overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              // height="300"
              src={clean}
              width="300"
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] mt-4 md:mt-8">
            <img
              alt="Sparkling Clean"
              className="mx-auto w-full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full order-last lg:order-first"
              // height="300"
              src={office}
              width="300"
            />
            <div className="flex flex-col  space-y-4 ">
              <div className="space-y-2 p-4 md:p-12">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter  my-4">Commercial Cleaning Solutions</h1>
                {commercial.map((d,i)=>(
                 <div key={i} className="flex items-center gap-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#00695C" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" /></svg>
                 <p className='text-lg'>{d}</p>
               </div>
               ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
