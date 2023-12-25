import { createSlice } from "@reduxjs/toolkit";


const SliceFood = createSlice({
    name:"Food",
    initialState:{
        FoodApi:[],
        addFoodData:[],
        catergories:"all",
        search:""
    },
    reducers:{
        getData:(state,action)=>{
            state.FoodApi=action.payload
        },
        getAddtoCarts:(state,action)=>{
            const add = state.addFoodData.find((food)=>food.item.id === action.payload.item.id)
             if(add){
                state.addFoodData = state.addFoodData.map((food)=>food.item.id === action.payload.item.id ? {...food,qty:food.qty + 1} : food)
             }else{
                state.addFoodData.push(action.payload)
             }
        },
        getRemovetoCart:(state,action)=>{
            state.addFoodData = state.addFoodData.filter((food)=>food?.item.id !== action.payload)
        },
        getIncrements(state,action){
            state.addFoodData = state.addFoodData.map((food)=>food.item.id === action.payload ? {...food,qty:food.qty + 1} : food)
        },
        getDecrements(state,action){
            state.addFoodData = state.addFoodData.map((food)=>food.item.id === action.payload ? {...food,qty:food.qty - 1} : food)
        },
        getCatergoriess(state,action){
            state.catergories = action.payload
        },
        getSearchs(state,action){
            state.search = action.payload           
        }
    }
})
export const{getData,getAddtoCarts,getRemovetoCart,getIncrements,getDecrements,getSearchs,getCatergoriess}=SliceFood.actions

export default SliceFood.reducer