import React, { useEffect, useMemo } from 'react'
import { fetchProducts } from '../../../../../redux/slices/thunks/fetchProducts'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import ProductItem from '../ProductItem/ProductItem'

const ListProducts: React.FC = () => {

    const products = useAppSelector(state => state.productSlice.products)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const getProducts = async () => {
            dispatch(await fetchProducts())
        }

        getProducts()
    }, [dispatch])

    console.log(products)


    const productsArray = useMemo(() => products.map(product => <ProductItem key={product.id} {...product} />), [products])

    return (
        <div className='mt-8 min-h-600'>
            <div className='grid p-[30px] grid-cols-3 auto-rows-auto gap-6'>
                {productsArray}
            </div>
        </div>
    )
}

export default ListProducts