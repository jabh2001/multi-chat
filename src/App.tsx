import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ContactsPage, IndexPage, QrPage } from "./routes"
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
      {
        path:"/qrs",
        element: <QrPage/>
      },
      ...configRouter
    ]
  }
])

// eslint-disable-next-line react-refresh/only-export-components
export default () => <RouterProvider router={router} />
