import { Link } from "react-router-dom"
import { useMy_solicitudMutation } from "../redux/userApiSlices"
import { useEffect, useState } from "react"

function Petition() {
    const [soli, setSoli] = useState([])
    const [ my_soli ] = useMy_solicitudMutation()

    useEffect( () => {
        my_soli("").unwrap()
        .then( solicitud => setSoli(solicitud))
    }, [])

    const TableElements = (props: { tipo: string, inicio: string, cierre: string, estatus: string, id: string }) => {
        return (
            <tr>
                <td>{props.tipo}</td>
                <td>{props.inicio}</td>
                <td>{props.cierre}</td>
                <td>{props.estatus}</td>
                <td> <Link to={ `/Servicio-de-Atencion-al_Usuario/Solicitud/${props.id}`}> datos  </Link>  </td>
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
                <colgroup><col/><col/></colgroup>
                <colgroup><col/></colgroup>
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

                        !!soli[0] && soli.map( (x) => {
                            
                            return <TableElements 
                                key={x._id} 
                                tipo={x.tipo} 
                                inicio={x.createdAt} 
                                cierre='--/--/----' 
                                estatus='Pendiente'   
                                id={x._id}/>
                        })
                    }
                </tbody>

            </table>

        </article>
    )
}

export default Petition