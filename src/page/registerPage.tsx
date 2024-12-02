import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRegisterMutation, useVerifyCodeMutation, useVerifyOTPMutation} from "../redux/userApiSlices"
import { useDispatch } from "react-redux"
import { setCredentials } from "../redux/authSlice"
import { useState } from "react"
import { estadoList } from "../estados"

type Inputs = {
    name: string
    last_name: string
    cedula: string
    email: string
    number: string
    entidad_federal: string
    address: string
    password: string
    code: string
}

type Input = {
    nameValue: any
    name: string
    required: boolean
    type: string
}


function RegisterPage() {
    const [verify, setVerify] = useState("none")
    const [ErrorCod, setErrorCod] = useState("")
    const [proCod, setProcod] = useState({ userId: "", otp: ""} )
    const { register, handleSubmit } = useForm<Inputs>()
    const [registers] = useRegisterMutation();
    const [verifyCode] = useVerifyCodeMutation();
    const [verifyOTP] = useVerifyOTPMutation();
    

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (verify == "none") {
            
            try {
                setVerify("flex")
                let pcId = await verifyCode(data).unwrap()
                setProcod( { ...proCod, userId: pcId.userId }  )
                
            } 
            catch (err)  { console.log(err) }
            
        } else {

            try {
                setProcod( { ...proCod, otp: data.code }  )
                const res1 = await verifyOTP({ ...proCod, otp: data.code } ).unwrap();

                if (res1.status == "FAILED") {
                    setErrorCod("Codigo de verificación invalido")
                } else {
                    
                    const res = await registers(data).unwrap();
                    dispatch(setCredentials({ ...res }));
                    navigate('/Servicio-de-Atencion-al_Usuario/mis-peticiones');
                }
            }
            catch (err) { console.log(err) }
        }

    }

    function Input(props: Input) {
        return (
            <label>
                <span>{props.name}</span>
                <input {...register(props.nameValue, { required: props.required })} type={props.type} />
            </label>
        )
    }

    return (
        <div className="container2">

            <div className='head-banner'>
                <img src="/src/img/banner.png" alt="" />
                <img src="/src/img/b200.jpg" alt="" />
            </div>

            <div className="register-content">
                <section className="register" onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-title">
                        <h2> SAU </h2>
                    </div>

                    <form className="formdata">

                        <div>

                            <Input name="Nombre" nameValue="name" required={true} type="text" />
                            <Input name="Apellido" nameValue="last_name" required={true} type="text" />
                            <Input name="Cedula de Identidad" nameValue="cedula" required={true} type="text" />
                            <Input name="Email" nameValue="email" required={true} type="email" />
                            <Input name="Telefono Celular" nameValue="number" required={true} type="tlf" />

                        </div> 

                        <div>

                            <label>
                                <span>Entidad Federal</span>
                                <select {...register("entidad_federal", { required: true })} >
                                    <option value="" key="" hidden>Entidad Federal</option>
                                    {
                                        estadoList.map( (x) => {
                                            return   <option value={x.value} > { x.value } </option>
                                        } )
                                    }

                                </select>
                            </label>

                            <Input name="Dirección" nameValue="address" required={true} type="text" />
                            <Input name="Contraseña" nameValue="password" required={true} type="password" />

                            <label>
                                <span>Repetir Contraseña</span>
                                <input required type="password" />
                            </label>


                            <input type="submit" value='Crear'  />
                        </div>

                    </form>

                    <form className="verify" style={{ display: verify }}>

                        <h2>Hemos enviado un código a su correo</h2>
        
                        <div>
                            {/* <p> { ErrorCod } </p> */}
                            <input {...register("code") } className="cod-verify" autoComplete="off" type="text" maxLength={6} />
                            <p> { ErrorCod } </p>
                        </div>

                        <p> no me a llegado ningun codigo </p>
                       
                        <input  type="submit" value='Verificar' id="verify-code" />

                    </form>

                    <div className="links-login">
                        <Link to='/login' >Ya tengo cuenta</Link>
                    </div>

                </section>
            </div>


        </div>


    )
}

export default RegisterPage