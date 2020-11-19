import React from "react";
import {useRoutes} from 'hookrouter';
import routes from "./routes";
import NotFoundPage from "./pages/NotFound";
import Header from "./components/Header";

const App = () => {
    const routeResult = useRoutes(routes);

    return routeResult ? (
        <>
            <Header/>
            {routeResult}
        </>
    ) :( <NotFoundPage />);

};

export default App;
