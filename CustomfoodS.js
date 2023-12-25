import { useDispatch } from 'react-redux';
// import FoodData from './DataFood';
import { getData } from './SlicefoodS';
import { useEffect } from 'react';
import FoodData from './FooddataS';

const useCustomFoodS = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        function data(){
            dispatch(getData(FoodData))
        }
        data()
    },[])
  
}

export default useCustomFoodS