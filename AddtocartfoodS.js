import React from 'react'
import './Foodres.css';

import { useDispatch, useSelector } from 'react-redux'

import { getDecrements, getIncrements, getRemovetoCart } from './SlicefoodS';
import { NavLink } from 'react-router-dom';

const AddToCartFood = () => {

    const ADDFoodDataCart = useSelector((state)=>state?.AllFoodData?.addFoodData)
    const dispatch = useDispatch();
    // console.log(ADDFoodDataCart);

  return (
    <>
    
    <div className='Fooddata'> 
 {
        ADDFoodDataCart.map((datas)=>{
            return(
                <>
                <div className='emojiiii'>
                    <img style={{marginTop:'10rem',marginLeft:'-3rem'}}  src={datas?.item.img} alt="" />
                    <div className='cartFoodName'>
                        <h2><NavLink  style={{color:'black',textDecoration:'none'}} to = '/Retu'>{datas?.item.name}</NavLink></h2>
                        <button onClick={()=>dispatch(getRemovetoCart(datas?.item.id))}>remove to cart</button>
                    </div>
                    <div className="ProductApiYY-cart-rating">
                    <div style={{color:'black'}} className="ProductApiYY-cart-rate">{datas?.item.desc}</div><br />
                    <i style={{color:'gray',marginLeft:'-20rem'}}class="fa-solid fa-star"></i>
                    <i style={{color:'red',marginLeft:'-3rem'}}class="fa-solid fa-star"></i>
                    <i style={{color:'red',marginLeft:'-3rem'}}class="fa-solid fa-star"></i>
                    <i style={{color:'red',marginLeft:'-3rem'}}class="fa-solid fa-star"></i>
                    <span style={{color:'black'}} className="ProductApiYY-cart-count">{datas?.item.rating}</span><br />

                    </div>
                    <button  onClick={()=>datas.qty >= 1 ? dispatch(getIncrements(datas.item.id)):(datas.qty = 0)}>+</button>
                    <span style={{background:'black',marginLeft:'0rem',padding:'1rem',fontWeight:'bold'}}>{datas.qty}</span>
                    <button  onClick={()=>datas.qty > 1 ? dispatch(getDecrements(datas.item.id)):(datas.qty)}>-</button>
                </div>
                
                </>
            )
        })
    }
    </div>
    </>
  )
}

export default AddToCartFood