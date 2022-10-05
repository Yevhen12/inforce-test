import { createAsyncThunk } from "@reduxjs/toolkit"
import { IProductItem } from "../../../interfaces/IProductItem"
import { setProducts } from "../productSlice"
import { PRODUCTS_API } from "../../../constants/api/api"
import { RootState } from "../../store"
import axios from "axios"

export const addProduct = createAsyncThunk('products/addProduct', async (productItem:IProductItem, { dispatch, getState }) => {
    const products:IProductItem[] = (getState() as RootState).productSlice.products
    dispatch(setProducts([productItem, ...products]))
    await axios.post(`${PRODUCTS_API}`, productItem)

    
})