import { configureStore } from '@reduxjs/toolkit';
import SlicefoodS from './SlicefoodS';


const StoreFoodS = configureStore({
    reducer:{
        AllFoodData:SlicefoodS,

    }
})
export default StoreFoodS