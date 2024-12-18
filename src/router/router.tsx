import { createBrowserRouter } from "react-router-dom";
import NormalRoutes from "./NormalRouter";
import LoginPage from "../page/loginPage";
import RegisterPage from "../page/registerPage";
import PrivateRoutes from "./privateRoutes";
import HomePage from "../page/homePage";
// import Ruralidad from "../page/ruralidad";
import Profile from "../page/profilePage";
import Petition from "../page/petitionPage";
import SolicitudPage from "../page/solicitudPage";
import DatosSolicitudPage from "../page/datosSoliPage";
import Ruralidad from "../page/ruralidad";
import PDF  from "../PDF/pdf";

const router = createBrowserRouter([
    {
        path: "",
        element: <NormalRoutes />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />
            }
        ]
    },

    {
        element: <PrivateRoutes />,
        children: [
            {
                path: '/Servicio-de-Atencion-al_Usuario',
                element: <HomePage/>,
                children: [
                    {
                        index: true,
                        path: 'mis-peticiones',
                        element: <Petition />
                    },
                    {
                        path: 'mi-perfil',
                        element: <Profile />
                    },
                    {
                        path: 'Ruralidad',
                        element: <Ruralidad />
                    },
                    {
                        path: 'Solicitudes',
                        element: <SolicitudPage />
                    },
                    {
                        path: 'Solicitud/:id',
                        element: <DatosSolicitudPage />
                    },
                    
                ],
            },
                    // {
                    //     path: 'PDF',
                    //     element: <PDF/>
                    // }
        ]
    },

])

export default router