import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ContactDetailPage, ContactsPage, ConversationsPage, QrPage } from "./routes"
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
      {
        path:"/contacts/:contactId",
        element: <ContactDetailPage />
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
