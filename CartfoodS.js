import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddtoCarts } from './SlicefoodS'
import './Foodres.css';
import Sliderss from './SliderSS';
import Footerss from './FooterSs';
import { NavLink } from 'react-router-dom';

const CartFood = () => {
    const FoodDataCart = useSelector((state)=>state?.AllFoodData?.FoodApi)
    const cater = useSelector((state)=>state.AllFoodData.catergories)
    const search = useSelector((state)=>state.AllFoodData.search)
    console.log(cater)

    const dispatch = useDispatch()
  return (
    <>
<Sliderss/>
    
   <div className='Fooddata'>
      
 {
        FoodDataCart.filter((food)=>{
            if(cater == "all"){
                return food.name.toLowerCase().includes(search.toLowerCase())
            }else{
                return cater == food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
        }).map((item)=>{
            return(
                <>
                 <div  className='Shows'>
 
                <img src={item?.img} alt="" className="ProductYY-cart-img" />
                <div className="ProductApiYY-cart-detail">

                 <h5 style={{fontWeight:'bold',marginRight:'8rem'}}><NavLink style={{color:'black',textDecoration:'none'}}  to = '/ VarityS'>{item?.name}</NavLink></h5>
                  <span style={{color:'green',fontWeight:'bold',marginLeft:'18rem'}} className="ProductApiYY-cart-detail-price">₹{item?.price}</span>
                  <div className="ProductApiYY-cart-rating">
                    <div style={{color:'black'}} className="ProductApiYY-cart-rate">{item?.desc}</div><br />
                    <i style={{color:'gray',marginLeft:'-20rem'}}class="fa-solid fa-star"></i>
                    <i style={{color:'red',marginLeft:'-3rem'}}class="fa-solid fa-star"></i>
                    <i style={{color:'red',marginLeft:'-3rem'}}class="fa-solid fa-star"></i>
                    <i style={{color:'red',marginLeft:'-3rem'}}class="fa-solid fa-star"></i>
                    <span style={{color:'black'}} className="ProductApiYY-cart-count">{item?.rating}</span><br />
                    <button onClick={()=>dispatch(getAddtoCarts({item,qty:1}))} >add to cart</button>

                    </div>



                  </div>
                



              
              </div>
                {/* <div className='cartFoodData'>
                    <img src={item?.img} alt="" />
                    <div className='cartFoodName'>
                        <h2>{item?.name}</h2>
                        <button onClick={()=>dispatch(getAddtoCarts({item,qty:1}))} >add to cart</button>
                    </div>
                </div> */}
                
                </>
            )
        })
    }
    </div>
 <Footerss/>
    </>
  )
}

export default CartFood