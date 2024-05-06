import { type RouteObject } from "react-router-dom";
import inboxesRoutes from "./Inbox";
import agentsRoutes from "./Agent";
import labelRoutes from "./Label";
import teamRoutes from "./Team";
import fastMessageRouter from "../fastMessagePage";

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
    ...fastMessageRouter
]
export default configRouter