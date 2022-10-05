import { createAsyncThunk } from "@reduxjs/toolkit"
import { IProductItem } from "../../../interfaces/IProductItem"
import { setProducts } from "../productSlice"
import { PRODUCTS_API } from "../../../constants/api/api"
import { RootState } from "../../store"
import axios from "axios"

export const removeProduct = createAsyncThunk('products/removeProduct', async (id:string, { dispatch, getState }) => {
    const products:IProductItem[] = (getState() as RootState).productSlice.products
    const newArratProducts = products.filter(product => product.id !== id)
    dispatch(setProducts(newArratProducts))
    await axios.delete(`${PRODUCTS_API}/${id}`)
    
})