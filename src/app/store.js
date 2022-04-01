import { configureStore } from '@reduxjs/toolkit'
import { devOceanApi } from '../services/devOceanApi'


export default configureStore({
    reducer: {
        // reducer
        [devOceanApi.reducerPath]: devOceanApi.reducer,

    }, 
})