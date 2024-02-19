import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import { IndexPage } from "./routes"
import Layout from "./components/layout"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<> Element 1</>
      }
    ]
  }
])

export default () => <RouterProvider router={router} />
