import { type RouteObject } from "react-router-dom";
import NewInboxPage from "./NewInboxPage";

const baseName = "/config/inboxes"

const inboxesRoutes : RouteObject[] = [
    {
        
        path:baseName,
        element:<>Index</>
    },
    {
        
        path:baseName + "/new",
        element:<NewInboxPage />
    },
    {
        
        path:baseName + "/new/api",
        element:<NewInboxPage channel="api" />
    },
    {
        
        path:baseName + "/new/whats-app",
        element:<NewInboxPage channel="whats-app" />
    },
    {
        
        path:baseName + "/new/telegram",
        element:<NewInboxPage channel="telegram" />
    },

];
export default inboxesRoutes