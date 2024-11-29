import { Link } from "react-router-dom"

function Petition() {

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
                    <TableElements tipo="Solicitudes" inicio="dd/mm/aaaa" cierre='--/--/----' estatus='Pendiente'   id="1"/>
                    <TableElements tipo="Solicitudes" inicio="dd/mm/aaaa" cierre='--/--/----' estatus='En Progreso' id="1"/>
                    <TableElements tipo="Solicitudes" inicio="dd/mm/aaaa" cierre='dd/mm/aaaa' estatus='Finalizada'  id="1"/>
                    <TableElements tipo="Solicitudes" inicio="dd/mm/aaaa" cierre='dd/mm/aaaa' estatus='Finalizada'  id="1"/>
                    <TableElements tipo="Solicitudes" inicio="dd/mm/aaaa" cierre='dd/mm/aaaa' estatus='Finalizada'  id="1"/>
                    <TableElements tipo="Solicitudes" inicio="dd/mm/aaaa" cierre='dd/mm/aaaa' estatus='Finalizada'  id="1"/>

                </tbody>

            </table>

        </article>
    )
}

export default Petition