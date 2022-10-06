import React from 'react'

type ModalType = {
    width: string
    activeModal: boolean
    closeModal: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalType> = ({ children, width, activeModal, closeModal }) => {

    return (
        <div
            onClick={closeModal}
            className={`w-screen h-screen fixed top-0 left-0 cursor-default z-10 flex bg-modal items-center justify-center duration-300 
        ${activeModal ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                style={{ width: width, transform: activeModal ? 'scale(1)' : 'scale(0.5)' }}
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-md duration-300 ${activeModal ? 'scale-100' : 'scale-50'}`}
            >
                {children}
            </div>
        </div>
    )
}

export default React.memo(Modal)