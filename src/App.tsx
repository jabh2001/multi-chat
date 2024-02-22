import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ContactsPage, IndexPage } from "./routes"
import Layout from "./components/layout"
import configRouter from "./routes/Config"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element: <IndexPage />
      },
      {
        path:"/contacts",
        element: <ContactsPage />
      },
      ...configRouter
    ]
  }
])

export default () => <RouterProvider router={router} />
