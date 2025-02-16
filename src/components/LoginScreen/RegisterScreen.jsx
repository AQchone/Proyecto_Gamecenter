import { useState } from "react"
import './LoginScreen.scss'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

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

        register(values)
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2>Registrarme</h2>
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
                    <button className="btn btn-primary" type="submit">Registrarme</button>
                    <Link to="/login" className="btn btn-success">Ya estoy registrado, iniciar sesión</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen