import { useContext, useState } from "react"
import './LoginScreen.scss'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const LoginScreen = () => {
    const { login, loginWithGoogle } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type="email" 
                        className="form-control my-2 input" 
                        placeholder="Email"
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        type="password" 
                        value={values.password}
                        className="form-control my-2 input" 
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleInput}
                    />
                    <hr />
                    <button className="btn btn-success" type="submit">Login</button>
                    <Link to="/register" className="btn btn-primary">Registrarme</Link>
                </form>
                <button className="btn btn-danger" onClick={loginWithGoogle}>Ingresar con Google</button>
            </div>
        </div>
    )
}

export default LoginScreen