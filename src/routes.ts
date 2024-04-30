import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ContactsPage from "./pages/Contacts";
import HomePage from "./pages/Home";
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
            }
        ]
    },

])