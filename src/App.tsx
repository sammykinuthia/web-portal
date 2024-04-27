import { RouterProvider } from "react-router-dom"
import { Button } from "./components/ui/button"
import { routes } from "./routes"


function App() {

  return (
    <>
    <RouterProvider router={routes} />

    </>
  )
}

export default App
