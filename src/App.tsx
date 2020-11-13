import React from "react";
import {useRoutes} from 'hookrouter';
import routes from "./routes";
import NotFoundPage from "./pages/NotFound";

const App = () => {
    const routeResult = useRoutes(routes);

    return routeResult  || <NotFoundPage />;

};

export default App;
