import { createAsyncThunk } from "@reduxjs/toolkit"
import { IProductItem } from "../../../interfaces/IProductItem"
import { setProducts } from "../productSlice"
import { PRODUCTS_API } from "../../../constants/api/api"
import axios from "axios"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { dispatch }) => {
    const { data } = await axios.get<IProductItem[]>(`${PRODUCTS_API}`)
    dispatch(setProducts(data))
})