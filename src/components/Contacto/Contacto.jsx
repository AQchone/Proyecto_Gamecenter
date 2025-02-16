import { useState } from "react"




const Contacto = () => {
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        date: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("SUbmit")
        console.log(values)
    }

    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    value={values.nombre} 
                    onChange={handleInputChange}
                    className="form-control my-2" 
                    type="text"
                    placeholder="Tu nombre"
                />

                <input 
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    className="form-control my-2" 
                    type="email"
                    placeholder="email"
                />

                <input 
                    name="date"
                    onChange={handleInputChange}
                    value={values.date}
                    className="form-control my-2" 
                    type="date"
                    placeholder="Date"
                />

                
                <button className="btn btn-primary rounded-pill" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto