import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container/Container'
import { IProductItem } from '../../interfaces/IProductItem'
import { PRODUCTS_API } from '../../constants/api/api'
import AddProductModal from '../../components/Modals/AddProductModal/AddProductModal'
import axios from 'axios'
import ProductMain from './ProductMain/ProductMain'

const Product: React.FC = () => {
    const { product } = useParams()
    const [currentProduct, setCurrentProduct] = useState<IProductItem>(
        {
            id: '',
            imageUrl: '',
            name: '',
            description: '',
            count: 0,
            size: {
                width: 0,
                height: 0
            },
            weight: '',
            comments: []
        }
    )
    const [activeModal, setActiveModal] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get<IProductItem>(`${PRODUCTS_API}/${product}`)
            setCurrentProduct(data)
        }

        getProduct()
    }, [activeModal])

    return (
        <>
            {currentProduct.id && (
                <>
                    <div className='w-full flex justify-center'>
                        <Container>
                            <h1 className='text-3xl font-medium text-center'>{currentProduct.name}</h1>
                            <ProductMain product={currentProduct} setActiveModal={setActiveModal} />
                        </Container>
                    </div>
                    <AddProductModal
                        setActiveModal={setActiveModal}
                        activeModal={activeModal}
                        isEdit={true}
                        id={currentProduct?.id}
                    />
                </>
            )
            }
        </>
    )
}

export default React.memo(Product)