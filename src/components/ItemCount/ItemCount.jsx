

const ItemCount = ({cantidad, setCantidad, stock, agregar}) => {


    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    

    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn mx-1 ${cantidad === 1 ? "boton" : ''} ${cantidad === 1 ? "btn-danger rounded-pill" : "btn-primary rounded-pill"}`}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btn mx-1 btn-danger rounded-pill" : "btn mx-1 btn-primary rounded-pill"}
                disabled={cantidad === stock}
            >
                +
            </button>
            <br/>
            <button onClick={agregar} className="btn btn-success my-2 rounded-pill">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount