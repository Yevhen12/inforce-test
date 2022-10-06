import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container/Container'
import ProductMain from './ProductMain/ProductMain'

const Product: React.FC = () => {
    const { product } = useParams()

    return (
        <div className='w-full flex justify-center'>
            <Container>
                <h1 className='text-3xl font-medium text-center'>{product}</h1>
            </Container>
        </div>
    )
}

export default Product