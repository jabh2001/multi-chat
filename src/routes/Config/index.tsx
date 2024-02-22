import { type RouteObject } from "react-router-dom";
import inboxesRoutes from "./Inbox";
import agentsRoutes from "./Agent";

const baseName = "/config"

const configRouter : RouteObject[] = [
    {
        
        path:baseName,
        element:<>Index</>
    },
    ...agentsRoutes,
    ...inboxesRoutes,
]
export default configRouter