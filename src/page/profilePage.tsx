import { useSelector } from 'react-redux';


function Profile() {
    const { userInfo } = useSelector( (state: any | null ) => state.auth );

    const UserList = (props: { name: string, value: string }) => {
        return (
            <li>
                <h3>{props.name}</h3>
                <p>{props.value}</p>
            </li>
        )
    }
        
    return (
        <article className='profile-user'>
            
            <ul className='profile-data'>
                <UserList name='Nombre' value={userInfo.name}></UserList>
                <UserList name='Apellido' value={userInfo.last_name}></UserList>
                <UserList name='Cédula de Identidad' value={userInfo.cedula}></UserList>
                <UserList name='Correo Electronico' value={userInfo.email}></UserList>
            </ul >

            <ul className='profile-data'>
                <UserList name='Telefono Celular' value={userInfo.number}></UserList>
                <UserList name='Entidad Federal' value={'Monagas'}></UserList>
                <UserList name='Dirección' value={userInfo.address}></UserList>
                <li><h3>Contraseña</h3> <button>Cambiar Contraseña</button></li>
            </ul>

            <div id='update'>
                <button>Actualizar datos</button>
            </div>
            

        </article>
    )
}

export default Profile