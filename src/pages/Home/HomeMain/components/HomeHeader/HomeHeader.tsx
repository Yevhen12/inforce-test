import React, { useState } from 'react'
import AddProductModal from '../../../../../components/Modals/AddProductModal/AddProductModal'
import Button from '../../../../../components/Button/Button'
import Sort from '../Sort/Sort'

const HomeHeader: React.FC = () => {

    const [activeModal, setActiveModal] = useState(false)


    return (
        <>
            <div className='w-full flex justify-between'>
                <Button
                    color='bg-blue-600'
                    action={() => setActiveModal(true)}
                    text='ADD PRODUCT'
                    hover='bg-blue-700'
                />
                <Sort />
            </div>
            <AddProductModal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                isEdit={false}
            />
        </>
    )
}

export default React.memo(HomeHeader)