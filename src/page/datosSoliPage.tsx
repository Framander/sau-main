import { useSelector } from 'react-redux';

import '../css/DatosSolicitudPage.css'

function DatosSolicitudPage() {
    const { userInfo } = useSelector( (state: any | null ) => state.auth );


    return (
        <>
            <section className="DatosSolicitudPage"  >

                <div className="datos-user">
                    <ul>
                        <li>Nombre:</li>
                        <li>Entidad Federal:</li>
                        <li>Direccion:</li>
                    </ul>
                    
                    <ul>
                        <li>{userInfo.name} {userInfo.last_name}</li>
                        <li>Distrito Capital</li>
                        <li>{userInfo.address}</li>
                    </ul>

                    <ul>
                        <li>Cedula:</li>
                        <li>Email:</li>
                        <li>Telefono:</li>
                    </ul>

                    <ul>
                        <li>{userInfo.cedula}</li>
                        <li>{userInfo.email}</li>
                        <li>{userInfo.number}</li>
                    </ul>

                </div>

                <section>
                    <h2>Solicitud</h2>

                    <table className="petition-table">
                        <thead>
                            <tr>
                                <th>Años</th>
                                <th>Centro Poblado</th>
                                <th>Entidad Federal</th>
                                <th>Municipio</th>
                                <th>Parroquia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>20../20..</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                            </tr>
                        </tbody>

                    </table>


                </section>

                <section>
                    <h2>Respuesta</h2>

                    <table className="petition-table">
                        <caption>Rural:  <span> SI </span> </caption>

                        <thead>
                            <tr>
                                <th>Nota</th>
                                <th>Centro Poblado</th>
                                <th>Entidad Federal</th>
                                <th>Municipio</th>
                                <th>Parroquia</th>
                                <th>Poblacion</th>
                                <th>Censo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                            </tr>

                            <tr>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                                <td>Que...</td>
                            </tr>
                        </tbody>

                    </table>
                </section>
                
                <ul>
                    <li>Nro. de Factura: 00</li>
                    <li>Nro. de Referencia Bancaria: 00</li>
                    <li>Observación Administrativa</li>
                </ul>

            </section>

        </>
    )
}

export default DatosSolicitudPage