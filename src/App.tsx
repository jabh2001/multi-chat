import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ContactsPage, ConversationsPage } from "./routes"
import Layout from "./components/layout"
import configRouter from "./routes/Config"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/conversations",
        element: <ConversationsPage />
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
