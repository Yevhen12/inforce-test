import { createAsyncThunk } from "@reduxjs/toolkit"
import { IProductItem } from "../../../interfaces/IProductItem"
import { setProducts } from "../productSlice"
import { PRODUCTS_API } from "../../../constants/api/api"
import { RootState } from "../../store"
import axios from "axios"

export const updateProduct = createAsyncThunk('products/updateProduct', async (productItem:IProductItem, { dispatch, getState }) => {
    const products:IProductItem[] = (getState() as RootState).productSlice.products
    const newArray = products.map(el => el.id === productItem.id ? productItem : el)
    dispatch(setProducts(newArray))
    await axios.put(`${PRODUCTS_API}/${productItem.id}`, productItem)

    
})