import React, { useState } from 'react'
import { removeProduct } from '../../../redux/slices/thunks/removeProduct'
import { useAppDispatch } from '../../../redux/hooks'
import Modal from '../Modal'

type DeleteModalType = {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    id: string
}


const DeleteModal: React.FC<DeleteModalType> = ({ activeModal, setActiveModal, id }) => {

    const dispatch = useAppDispatch()

    const deleteItem: () => Promise<void> = async () => {
        dispatch(await removeProduct(id))
    }

    return (
        <Modal
            width='400px'
            activeModal={activeModal}
            closeModal={() => setActiveModal(false)}
        >
            <p className='py-2 w-full text-center font-semibold border-b'>Are you sure?</p>
            <div className='flex flex-col'>
                <button
                    type='button'
                    className='py-2 border-b text-red-500'
                    onClick={deleteItem}
                    >
                    Delete
                </button>
                <button
                    type='button'
                    className='py-2'
                    onClick={() => setActiveModal(false)}
                    >
                    Cancel
                </button>
            </div>

        </Modal>
    )
}

export default React.memo(DeleteModal)