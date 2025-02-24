import React from 'react';

import style from '@/app/styles/header.module.css'
import Container from './Container';

const Header = () => {
    return (
        <div className={`${style.header} py-3 px-1 shadow`}>
            <Container>
                <div className='flex item-center'>
                    <span className='text-pink-500 font-bold text-4xl'>My Store<b className='text-black'>.</b></span>


                </div>
                <div className={`${style.searchBar} flex items-center`}>
                    <input type="text" placeholder='Serch for Products...' className={`${style.searchInput}`} />
                    <button className={`${style.searchButton}`}>    <FiSearch  size="18"/></button>
                </div>
            </Container>
        </div>
    );
};

export default Header;