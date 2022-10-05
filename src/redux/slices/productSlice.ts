import { removeProduct } from './thunks/removeProduct';
import { addProduct } from './thunks/addProduct';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../interfaces/IProductItem";
import { fetchProducts } from './thunks/fetchProducts';

type StatusType = 'success' | 'rejected' | 'loading' | null

export type ProductSliceType = {
    products: IProductItem[],
    status: StatusType 
}

const initialState: ProductSliceType = {
    products: [],
    status: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state:ProductSliceType, action: PayloadAction<IProductItem[]>) => {
            state.products = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state: ProductSliceType) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state: ProductSliceType) => {
            state.status = 'success'
        })
        builder.addCase(fetchProducts.rejected, (state: ProductSliceType) => {
            state.status = 'rejected'
        })
        builder.addCase(addProduct.pending, (state: ProductSliceType) => {
            state.status = 'loading'
        })
        builder.addCase(addProduct.fulfilled, (state: ProductSliceType) => {
            state.status = 'success'
        })
        builder.addCase(addProduct.rejected, (state: ProductSliceType) => {
            state.status = 'rejected'
        })
        builder.addCase(removeProduct.pending, (state: ProductSliceType) => {
            state.status = 'loading'
        })
        builder.addCase(removeProduct.fulfilled, (state: ProductSliceType) => {
            state.status = 'success'
        })
        builder.addCase(removeProduct.rejected, (state: ProductSliceType) => {
            state.status = 'rejected'
        })
    }

})


export const { setProducts } = productSlice.actions

export default productSlice.reducer