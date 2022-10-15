import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container/Container'
import AddProductModal from '../../components/Modals/AddProductModal/AddProductModal'
import ProductMain from './ProductMain/ProductMain'
import { useAppSelector } from '../../redux/hooks'

const Product: React.FC = () => {
    const { product } = useParams()

    const products = useAppSelector(state => state.productSlice.products)
    const currentProduct = products.find(el => el.id === product)

    if(!currentProduct) {
        return <p>Not Found</p>
    }

    return (
        <>
            {currentProduct.id && (
                <>
                    <div className='w-full flex justify-center'>
                        <Container>
                            <h1 className='text-3xl font-medium text-center'>{currentProduct.name}</h1>
                            <ProductMain product={currentProduct} />
                        </Container>
                    </div>

                </>
            )
            }
        </>
    )
}

export default React.memo(Product)