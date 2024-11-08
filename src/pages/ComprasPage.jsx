import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Componentes/Card'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)
    const {  agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleEliminar = (id) => {
        eliminarCompra(id)
    }   
    return (
        <>
            <h1>Compras</h1>
            <hr/>
            {productos.map((producto, index) => (
                <Card key={index} imagen={producto.image} titulo={producto.title} despcripcion={producto.description} precio={producto.price} handleAgregar={() => handleAgregar(producto)} handleEliminar={() => handleEliminar(producto.id)}/>
            ))}
        </>
    )
}
