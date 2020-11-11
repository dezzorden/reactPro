import {useRoutes} from 'hookrouter';
import routes from "./routes";


const App = () => {
    const routeResult = useRoutes(routes);

    return routeResult;

};

export default App;
