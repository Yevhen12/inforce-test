import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProductItem } from '../../../../../interfaces/IProductItem'
import Button from '../../../../../components/Button/Button'
import DeleteModal from '../../../../../components/Modals/DeleteModal/DeleteModal'

const ProductItem: React.FC<IProductItem> = ({ name, imageUrl, id }) => {
    const [hover, setHover] = useState(false)
    const [activeModal, setActiveModal] = useState(false)

    const navigate = useNavigate()

    return (
        <>
            <div
                className='w-full hover:bg-gray-200 cursor-pointer p-4 border rounded-lg'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className='w-full'>
                    <img
                        src={imageUrl}
                        alt='Product Image'
                        className='w-full object-cover h-40 rounded-lg'
                        onClick={() => navigate(id)}
                    />
                </div>
                <div className='flex justify-between items-center mt-3 h-btn'>
                    <p className='text-xl font-semibold' onClick={() => navigate(id)}>{name}</p>
                    {hover &&
                        <Button
                            color='bg-red-500'
                            action={() => setActiveModal(true)}
                            text='DELETE'
                            hover='bg-red-700'

                        />}
                </div>
            </div>
            <DeleteModal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                id={id}
            />
        </>
    )
}

export default React.memo(ProductItem)