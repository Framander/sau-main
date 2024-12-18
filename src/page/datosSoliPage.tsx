import { useSelector } from 'react-redux';

import '../css/DatosSolicitudPage.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { useId_solicitudMutation } from '../redux/userApiSlices';

function DataUser() {
    const { userInfo } = useSelector((state: any | null) => state.auth);

    return (
        <div className="datos-user">
            <ul>
                <li>Nombre:</li>
                <li>Entidad Federal:</li>
                <li>Direccion:</li>
            </ul>

            <ul>
                <li>{userInfo.name} {userInfo.last_name}</li>
                <li>{userInfo.entidad_federal}</li>
                <li>{userInfo.address.slice(0, 32)}...</li>
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
    )
}

const res = {
    Tipo: "otro",
    Box: "esta es mi peticion"
}

function DatosSolicitudPage() {
    const { id } = useParams()

    const [id_solicitud] = useId_solicitudMutation()
    const [response_id, setResponse_id] = useState<string[][] | any >( [[""],[""]] )
    const [response, setResponse] = useState<string[][] | any >( [[""],[""]] )

    useEffect(() => {

        async function id_soli() {
            try {
                // const res = await id_solicitud(id).unwrap()
                const datosSolikey = Object.keys(res)
                const datosSoliValue = Object.values(res)
                return [datosSolikey, datosSoliValue]

            } catch (error) {
                console.log(error);
            }
        }

        id_soli().then((data) => {
            setResponse_id(data)
        } )

    }, []);

    function Tr(props: any) {
        return (
            <tr>
                {
                    props.value.map((x: string, n: number) => {
                        return <td key={n}> {x} </td>
                    })
                }
            </tr>
        )
    }

    // Años Centro Poblado Entidad Federal Municipio Parroquia
    return (
        <>
            <section className="DatosSolicitudPage"  >

                <DataUser />

                <Suspense fallback={ <> loader... </> }>
                    <section>
                        <h2>Solicitud</h2>
                        <table className="petition-table">
                            <thead>
                                <Tr value={ response_id[0] } />
                            </thead>
                            <tbody>
                                <Tr value={ response_id[1] } />
                            </tbody>
                        </table>
                    </section>
                </Suspense>


                <section>
                    <h2>Respuesta</h2>

                    <table className="petition-table">
                        <caption>Rural:  <span> SI </span> </caption>

                        <thead>
                            <Tr value={["nota", "Entida fedelral", "Total", "Hombres", "Mujeres"]} />
                        </thead>

                        <tbody>
                            <Tr value={["...", "esta es tu respuesta","100","50","50"]} />
                        </tbody>

                    </table>
                </section>

            </section>

        </>
    )
}

export default DatosSolicitudPage