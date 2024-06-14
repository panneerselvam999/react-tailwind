import React from 'react'
import { Header } from './ShoppingCart/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './ShoppingCart/Home'
import { Cart } from './ShoppingCart/Cart'
import { Contact } from './ShoppingCart/Contact'


export const ShopingCart = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='contact' element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
