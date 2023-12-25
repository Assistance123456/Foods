import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatergoriess, getSearchs } from './SlicefoodS';



const NavBarFood = () => {
const dispatch = useDispatch()
  const navigate = useNavigate();
  const ADDFoodDataCart = useSelector((state)=>state?.AllFoodData?.addFoodData)
  const totalItem = ADDFoodDataCart.reduce((total,item)=>total + item.qty,0)
  // console.log(totalItem);
  const FoodDataCart = useSelector((state)=>state?.AllFoodData?.FoodApi)


  return (
    <>
    <div className='NavS'>
    <h1>Restorant</h1>
<li><NavLink style={{color:'white',textDecoration:'none'}} to = '/CartFood'>HOME</NavLink></li>
<li>ABOUT</li>
<li>SERVICES</li>
<li>MENU</li>
<li>PAGES</li>
<li><NavLink style={{color:'white',textDecoration:'none'}} to = '/FormvalidS'>CONTACT</NavLink></li>
{/* <button>BOOK A TABLE</button> */}

    <div className='headerFood'>
  
     
       <i onClick={()=>navigate("/")} style={{color: 'black', fontWeight: 'bold' }} class="fa-solid fa-address-book"></i>
        <i onClick={() => navigate('/AddToCartFood')} style={{ color: 'white', fontWeight: 'bold' }} class="fa-solid fa-cart-shopping"></i>{totalItem}
        <input style={{padding:'0.3rem 2.5rem',marginLeft:'0.9rem'}} type="search" name="" id="" placeholder='Search Here' onChange={(e)=>dispatch(getSearchs(e.target.value))} />
    </div>
    </div>
    <div className='chizzz'>
    <div className='chiz'>
      <button onClick={()=>dispatch(getCatergoriess("all"))}>all</button>
      {
        [...new Set(FoodDataCart.map((food)=>food.category))].map((food)=>{
          return(
            <button onClick={()=>dispatch(getCatergoriess(food))}>{food}</button>
          )
        })
      }
    </div>
    </div>
    </>
  )
}

export default NavBarFood