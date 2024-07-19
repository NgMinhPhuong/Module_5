import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slice/countReducer'
export const store =  configureStore({
    reducer: {
        count1: countReducer
    }    
})