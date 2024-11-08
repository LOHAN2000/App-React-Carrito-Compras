import React, { useState } from 'react'

export const Card = ({imagen, despcripcion, precio, titulo, handleAgregar, handleAumentar, handleDisminuir, handleEliminar}) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
     
    const clickQuitar = () => {
        handleEliminar()
        setAdded(false)
    }


    return (
        <div className='tarjeta'>
            <img src={imagen} alt={titulo} className='tarjeta-imagen'/>
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{despcripcion}</p>
                <p className='tarjeta-precio'>{precio}</p>
            {added
            ? <button type='button' className='boton-quitar' onClick={clickQuitar}>
                Quitar del Carrito
            </button> 
            : <button type='button' className='boton-agregar' onClick={clickAgregar}>
                Agregar Carrito
            </button>}
            </div>

        </div>
    )
}
