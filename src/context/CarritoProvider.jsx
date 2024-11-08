import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext.jsx'

const initialState = []

export const CarritoProvider = ({ children }) => {
    
    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: "[CARRITO] agregar compra",
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: "[CARRITO] aumentar compra",
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: "[CARRITO] disminuir compra",
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: "[CARRITO] eliminar compra",
            payload: id
        }
        dispatch(action)
    }

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type){
            case "[CARRITO] agregar compra":
                return [...state, action.payload]
            case "[CARRITO] aumentar compra":
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case "[CARRITO] disminuir compra":
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && cant > 0) return {...item, cantidad: cant}
                    return item
                })
            case "[CARRITO] eliminar compra":
                return state.filter(compra => compra.id !== action.payload)
            default:
            }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    return (
        <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}}>
            {children}
        </CarritoContext.Provider>
    )
}
