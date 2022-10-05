import React from 'react'
import HomeHeader from './components/HomeHeader/HomeHeader'
import ListProducts from './components/ListProducts/ListProducts'

const HomeMain: React.FC = () => {
    return (
        <section className='mt-10'>
            <HomeHeader />
            <ListProducts />
        </section>
    )
}

export default HomeMain