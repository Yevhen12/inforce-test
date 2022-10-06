import React from 'react'

type ContainerType = {
    children: React.ReactNode
}

const Container: React.FC<ContainerType> = ({ children }) => {
    return (
        <div className='max-w-5xl w-full flex justify-center flex-col border rounded-md bg-white p-4 m-8 shadow-lg'>
            {children}
        </div>
    )
}

export default React.memo(Container)