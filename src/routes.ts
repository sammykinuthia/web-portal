import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ServicesPage from "./pages/Services";
import ContactsPage from "./pages/Contacts";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/services",
                Component: ServicesPage,
            },
            {
                path: "/contacts",
                Component: ContactsPage,
            },
             {
                path: "/about",
                Component: AboutPage,
            }
        ]
    },

])