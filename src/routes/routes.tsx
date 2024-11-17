import { createBrowserRouter, Link,  RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home.component';
import Login from '../pages/Login/Login.component';
import Logon from '../pages/Logon/Logon.component';
import Feed from '../pages/Feed/Feed.component';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },

    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/logon',
        element: <Logon />,
      
    },
    {
        path: 'feed',
        element: <Feed />,
    },
    {
        path: '*',
        element: <NaoEncontrado />,
    },
]);

function NaoEncontrado() {
    return (
        <div>
            <h2>Pagina não encontrada!</h2>
            <p>
                <Link to='/'>Ir para a Home</Link>
            </p>
        </div>
    );
}

export function Routes() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
