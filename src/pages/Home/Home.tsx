import React from 'react'
import Container from '../../components/Container/Container'
import HomeMain from './HomeMain/HomeMain'

const Home: React.FC = () => {
    return (
        <div className='w-full flex justify-center'>
            <Container>
                <h1 className='text-3xl font-medium text-center'>Product List</h1>
                <HomeMain />
            </Container>
        </div>
    )
}

export default React.memo(Home)