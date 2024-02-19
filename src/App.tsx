import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { IndexPage } from "./routes"

const router = createBrowserRouter([
  {
    path:"/",
    element:<IndexPage />
  }
])

export default () => <RouterProvider router={router} />
