import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const NormalRoutes = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { userInfo } = useSelector( (state: any | null ) => state.auth );
    
    useEffect(() => {
        console.log(location.pathname);

        if ( !!userInfo && !!userInfo.name ) navigate('/Servicio-de-Atencion-al_Usuario/mis-peticiones');
        else if ( location.pathname == "/" && !userInfo ) navigate("/login")
        else navigate(location.pathname)
    }, []);
    

    return <Outlet />
};

export default NormalRoutes;
