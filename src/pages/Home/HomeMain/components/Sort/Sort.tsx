import React, { useState } from 'react'
import DropDown from '../../../../../components/DropDown/DropDown'

const Sort = () => {
    const [activeDropDown, setActiveDropDown] = useState(false)
    return (
        <div className='relative'>
            <div className='flex items-center cursor-pointer' onClick={() => setActiveDropDown(true)}>
                <p className='mr-2'>High → Low</p>
                <img alt='arrow' src={process.env.PUBLIC_URL + '/images/down-arrow-icon.png'} className='h-4 w-4' />
            </div>
            <DropDown
                activeModal={activeDropDown}
                setActiveModal={setActiveDropDown}
            />
        </div>
    )
}

export default Sort