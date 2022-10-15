import React, { useMemo } from 'react'

type DropDown = {
    activeModal: boolean
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDown: React.FC<DropDown> = ({ activeModal, setActiveModal }) => {
    const sortArray = ['Amount (A-Z)', 'Amount (Z-A)', 'Alpha(A-Z)', 'Alpha(Z-A)']

    const mappedSortArray = useMemo(() => sortArray.map((el, idx) => <p key={idx} className='p-2 text-sm cursor-pointer'>{el}</p>), [sortArray])
    return (
        <>
            <div
                onClick={() => setActiveModal(false)}
                className={`w-screen h-screen fixed top-0 left-0 cursor-default z-10 flex
${activeModal ? 'block pointer-events-auto' : 'hidden pointer-events-none'}`}></div>
            <div
                style={{ top: activeModal ? '30px' : '0px' }}
                className={`z-10 w-drop absolute shadow-defaultBtn bg-white rounded-md duration-300 top-10 ${activeModal ? ' opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {mappedSortArray}
            </div>
        </>
    )
}

export default React.memo(DropDown)