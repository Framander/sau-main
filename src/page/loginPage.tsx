import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../redux/userApiSlices"
import { useDispatch } from "react-redux"
import { setCredentials } from "../redux/authSlice"

type Inputs = {
    email: string
    password: string
}

function LoginPage() {
    const { register, handleSubmit } = useForm<Inputs>()
    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        const { password, email } = data
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/Servicio-de-Atencion-al_Usuario/mis-peticiones');
        } catch (err) {
            console.log("error: ", err);

        }
    }

    return (
        <div className="container1">


            <section className="presentation">

                <div className='head-banner'>
                    <img src="/src/img/banner.png" alt="" />
                    <img src="/src/img/b200.jpg" alt="" />
                </div>

                <div className='logo-sau-ine'>
                    <img src="/src/img/sau1.png" alt="" />
                </div>
                
            </section>


            <section className="fron-login">

                <div className="content-form">

                    <div className="form-title">
                        <h2> SAU </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label>
                            <span>Correo</span>
                            <input {...register("email", { required: true })} type="email" />
                        </label>
                        <label>
                            <span>Contraseña</span>
                            <input {...register("password", { required: true })} type="password" />
                        </label>

                        <input type="submit" value='Ingresar' />

                    </form>

                    <div className="links-login">
                        <Link to='/register' >No Tengo Cuenta</Link>
                        <Link to='/' >Recuperar Contraseña</Link>
                    </div>

                </div>

            </section>


        </div >
    )
}

export default LoginPage