import { Link, Outlet } from 'react-router-dom'
import useLogout from '../hook/logout'



function Icon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 7a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0m5.548 7.261a1 1 0 0 1 .13-.011h.144q.066 0 .13.011l7.295 1.283l.038.008c1.344.31 2.788 1.163 3.069 2.82l.004.029l.114.877v.002c.264 2.009-1.329 3.47-3.21 3.47a1 1 0 0 1-.124-.01h-14.9c-1.881 0-3.475-1.462-3.21-3.472l.114-.869l.005-.03c.28-1.627 1.736-2.528 3.077-2.819l.029-.006z"></path></svg>
}

function Icon2() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></path></svg>
}

function Icon3() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
}

function Icon4() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"></path></svg>
}

function HomePage() {
    const close = useLogout()

    return (
        <div className='container'>

            <nav className="menu">

                <section className='logo'>
                    <div></div>
                    <img src="/src/img/ine-logo-max.png" alt="" />
                </section>

                <ul className='my-nav'>
                    <li>
                        <Link to='mi-perfil'> <Icon />  Perfil </Link>
                    </li>
                    <li>
                        <Link to='mis-peticiones'><Icon2 /> Mis Solicitudes</Link>
                    </li>
                    {/* <li>
                        <Link to='Ruralidad'><Icon3 /> Ruralidad </Link>
                    </li> */}
                    <li>
                        <Link to='Solicitudes'><Icon3 /> Solicitudes </Link>
                    </li>
                    <li>
                        <button onClick={ () => close() }> <Icon4 />  Salir  </button>
                    </li>
                </ul>

            </nav>

            <main>

                <section className='head-banner'>
                    <img src="/src/img/banner.png" alt="" />
                    <img src="/src/img/b200.jpg" alt="" />
                </section>

                <section className='main-content'>
                   <Outlet />    
                </section>
            
            </main>

        </div>
    )
}

export default HomePage