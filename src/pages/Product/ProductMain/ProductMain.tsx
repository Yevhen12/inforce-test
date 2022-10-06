import React, { useState } from 'react'
import AddProductModal from '../../../components/Modals/AddProductModal/AddProductModal'
import Button from '../../../components/Button/Button'
import { IProductItem } from '../../../interfaces/IProductItem'

type ProductMainType = {
    product: IProductItem
    setActiveModal:React.Dispatch<React.SetStateAction<boolean>>
}

const ProductMain: React.FC<ProductMainType> = ({ product, setActiveModal }) => {


    console.log(product.name, product.description)
    return (
        <>
            <div className='w-full'>
                <div className='w-full'>
                    <img className='mt-4 w-full' src={product.imageUrl} alt="productPhoto" />
                    <div className='flex items-start justify-between mt-4'>
                        <div>
                            <p className='text-2xl'>Description: </p>
                            <p className='text-sm mb-4'>{product.description}</p>
                            <p className='text-2xl mb-4'>Product Size: </p>
                            <p className='text-sm mb-4'>Height: {product.size.height}, Width: {product.size.width}</p>
                        </div>
                        <Button
                            color='bg-blue-600'
                            action={() => setActiveModal(true)}
                            text='EDIT PRODUCT'
                            hover='bg-blue-700'
                        />
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default React.memo(ProductMain)