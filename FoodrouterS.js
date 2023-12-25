import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBarFoodS from './NavbarS'
import CartFood from './CartfoodS'
import AddToCartFood from './AddtocartfoodS'
import useCustomFoodS from './CustomfoodS'
import './Foodres.css';
import ErrorS from './ReturnS'
import Retu from './Retu'
import VarityS from './Varity'
import FormvalidS from './LoginS'


const FoodRouterS = () => {


  useCustomFoodS()
  return (
    <>
    <BrowserRouter>
   <NavBarFoodS/>
    <Routes>
        <Route path='/CartFood' element={<CartFood/>}/>
        <Route path="/AddToCartFood" element={<AddToCartFood/>}/>
        <Route path='*' element={<ErrorS/>}/>
        <Route path='/Retu' element={<Retu/>}/>
        <Route path='/ VarityS' element={<VarityS/>}/>
        <Route path='/FormvalidS' element={<FormvalidS/>}/>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default FoodRouterS