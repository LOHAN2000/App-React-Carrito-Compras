import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

export const Navbar = () => {

    const {listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext)

    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink to="/carrito" className="navbar-brand" href="#">Carrito</NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to="/compras" className="nav-link active" aria-current="page" href="#">Compras</NavLink>
                            </li>
                        </ul>
                        <NavLink to="/carrito">
                            <Badge badgeContent={listaCompras.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </NavLink>
                        </div>
                </div>
            </nav>
    )
}
