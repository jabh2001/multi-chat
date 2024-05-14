import { type RouteObject } from "react-router-dom";
import inboxesRoutes from "./Inbox";
import agentsRoutes from "./Agent";
import labelRoutes from "./Label";
import teamRoutes from "./Team";
<<<<<<< HEAD
import fastMessageRouter from "../fastMessagePage";
=======
import fastMessageRoute from "./FastMessage";
>>>>>>> 88317cf59f5bca0d0d003f1a0c14860d8f490ef4

const baseName = "/config"

const configRouter : RouteObject[] = [
    {
        
        path:baseName,
        element:<>Index</>
    },
    ...agentsRoutes,
    ...inboxesRoutes,
    ...labelRoutes,
    ...teamRoutes,
<<<<<<< HEAD
    ...fastMessageRouter
=======
    ...fastMessageRoute,
>>>>>>> 88317cf59f5bca0d0d003f1a0c14860d8f490ef4
]
export default configRouter