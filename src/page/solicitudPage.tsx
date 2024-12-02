import { SubmitHandler, useForm } from "react-hook-form"
import { useSolicitud_generalMutation } from "../redux/userApiSlices";
import { useNavigate } from "react-router-dom";

type Inputs = {
    tipo: string
    box: string
}

function SolicitudPage() {
    const [general] = useSolicitud_generalMutation();
    const navigate = useNavigate()


    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => { 
        try {
            await general(data).unwrap()
            navigate("/Servicio-de-Atencion-al_Usuario/mis-peticiones")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="petition-form"  >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>SOLICITUD</h2>

                    <label>
                        <span>Petición</span>
                        <select {...register("tipo", { required: true })} >
                            <option value=""  hidden>Tipo de petición</option>
                            <option value="Ruralidad" >Ruralidad</option>
                            <option value="Datos general" >Datos generales</option>
                            <option value="otro" >otro</option>
                        </select>
                    </label>

                    <label>
                        <span>Descripción</span>
                        <textarea 
                            {...register("box", { required: true })} 
                            placeholder="Ejemplo  de la petición:"
                            // que la camtida de letra sea 500
                        />
                    </label>

                    <input type="submit" value='Enviar' />
                </form>

            </section>

        </>
    )
}

export default SolicitudPage