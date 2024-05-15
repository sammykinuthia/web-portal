
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Link, NavLink, useLocation } from "react-router-dom"
import Logo from '/public/cleaning.png'
import { cn } from "@/lib/utils"

export default function NavBar() {
    const location = useLocation().pathname
    console.log(location);

    return (
        <header className=" border-b w-full sticky top-0 z-50 bg-white">
            <div className="container mx-auto flex w-full   items-center px-4 py-2 md:px-6 ">

                <Link className="mr-6 flex" to="#">
                    <img src={Logo} alt="logo img" className="size-12 md:size-20" />
                    <span className="sr-only">First Choice Domestic</span>
                </Link>
                <nav className="ml-auto hidden lg:flex gap-6">
                    <Link className={cn([
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50",
                        location == "/" ? "text-teal-900 border-b-4 border-teal-900" : ""
                    ])} to="/">Home</Link>
                    <Link className={cn([
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50",
                        location == "/about" ? "text-teal-900 border-b-4 border-teal-900" : ""
                    ])} to="/#about">About</Link>
                    <NavLink className={cn([
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50",

                    ])} to="/#services">Services</NavLink>
                    <Link className={cn([
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50",
                        location == "/contacts" ? "text-teal-900 border-b-4 border-teal-900" : ""
                    ])} to="/contacts">Contacts</Link>
                </nav>
                <Sheet >
                    <SheetTrigger asChild>
                        <div className="w-full flex justify-end lg:hidden">
                            <Button className=" place-items-end self-end" size="icon" variant="outline">
                                <MenuIcon className="size-20" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </div>
                    </SheetTrigger>
                    <SheetContent className="bg-white" side="right">
                        <Link className="mr-6 hidden lg:flex" to="#">
                            <MenuIcon className="size-20" />
                            <span className="sr-only">First Choice Domestic</span>
                        </Link>
                        <div className="grid gap-2 py-6">
                            <Link className={cn([
                                "flex w-full items-center py-2 text-lg font-semibold",
                                location == '/' && 'text-teal-900 border-b-4 border-teal-900'
                            ])} to="/">
                                Home
                            </Link>
                            <Link className={cn([
                                "flex w-full items-center py-2 text-lg font-semibold",
                                location == '/about' && 'text-teal-900 border-b-4 border-teal-900'
                            ])} to="/#about">
                                About
                            </Link>
                            <NavLink className={cn([
                                "flex w-full items-center py-2 text-lg font-semibold"
                            ])} to={"/#services"}>
                                Services
                            </NavLink>
                            <Link className={cn([
                                "flex w-full items-center py-2 text-lg font-semibold",
                                location == '/contacts' && 'text-teal-900 border-b-4 border-teal-900'
                            ])} to="/contacts">
                                Contacts
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

function MenuIcon(props: any) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


