import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
    entidad_federal: string
    municipio: string
    parroquia: string
    centro_poblado: string
}

function Ruralidad() {

    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data) };

    return (
        <>
            <section className="ruralidad-form"  >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>RURALIDAD</h2>

                    <label>
                        <span>Entidad Federal</span>
                        <select {...register("entidad_federal", { required: true })} >
                            <option value=""  hidden>Entidad Federal</option>
                            <option value="monagas" >Monagas</option>
                        </select>
                    </label>

                    <label>
                        <span>Municipio</span>
                        <select {...register("municipio", { required: true })} >
                            <option value=""  hidden>Entidad Federal</option>
                            <option value="monagas" >Monagas</option>
                        </select>
                    </label>

                    <label>
                        <span>Parroquia</span>
                        <select {...register("parroquia", { required: true })} >
                            <option value=""  hidden>Entidad Federal</option>
                            <option value="monagas" >Monagas</option>
                        </select>
                    </label>

                    <label>
                        <span>Centro Poblado</span>
                        <input {...register("centro_poblado", { required: true })} type="text" />
                    </label>

                    <input type="submit" value='Enviar' />
                </form>


            </section>

        </>
    )
}

export default Ruralidad