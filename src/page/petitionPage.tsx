import { Link } from "react-router-dom"
import { useMy_solicitudMutation } from "../redux/userApiSlices"
import { useEffect, useState } from "react"

type solicitud = {
    _id: string
    tipo: string
    createdAt: string
    status: string
}


function Petition() {
    const [soli, setSoli] = useState([])
    const [my_soli] = useMy_solicitudMutation()

    useEffect(() => {
        my_soli("").unwrap()
            .then(solicitud => setSoli(solicitud))
    }, [])

    const TableElements = (props: { tipo: string, inicio: string, cierre: string, estatus: string, id: string }) => {
        return (
            <tr>
                <td>{props.tipo}</td>
                <td>{props.inicio}</td>
                <td>{props.cierre}</td>
                <td>{props.estatus}</td>
                <td> <Link to={`/Servicio-de-Atencion-al_Usuario/Solicitud/${props.id}`}> datos  </Link>  </td>
            </tr>
        )
    }

    return (
        <article className='petition-user'>

            <div className="nota-peticion">
                <p> <strong> NOTA: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit quam, fuga beatae sint explicabo doloribus incidunt quidem aliquam excepturi? </p>
            </div>

            <table className="petition-table">
                <caption>Mis Solicitudes</caption>
                <colgroup><col /><col /></colgroup>
                <colgroup><col /></colgroup>
                <thead>
                    <tr>
                        <th>Solicitudes</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha de Cierre</th>
                        <th>Estatus</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>


                    {

                        !!soli[0] && soli.map((x: solicitud) => {

                            return <TableElements
                                key={x._id}
                                tipo={x.tipo}
                                inicio={x.createdAt.slice(0, 10)}
                                cierre='--/--/----'
                                estatus={x.status}
                                id={x._id} />
                        })
                    }

                    <TableElements
                        tipo="otro"
                        inicio="2020-21-21"
                        cierre='--/--/----'
                        estatus="En progreso"
                        id="sdfasldkfj" />
                </tbody>

            </table>

        </article>
    )
}

export default Petition