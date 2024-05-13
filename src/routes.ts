import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ContactsPage from "./pages/Contacts";
import HomePage from "./pages/Home";
import ThankyouPage from "./pages/Thankyou";
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
                path: "/contacts",
                Component: ContactsPage,
            },
            {
                path: "/thanks",
                Component: ThankyouPage,
            }
        ]
    },

])