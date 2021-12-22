import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



const DashBoardPage = () => (
    <div>
        <Header />
        <div className='contain-container'>
            <div className='dashboard'>
                <div className='dashboard__averta'>
                    <img src="../../image/averta.jpg" width="90%" className='dashboard__averta--imageShow' />
                    <div className='dashboard__averta--text'>
                        <h3>Hi ! I'm Mich</h3>
                        <p>積極尋找成為前端工程師的機會</p>
                        <p>點擊圓形連結來了解我吧 !</p>
                    </div>
                </div>
                <div className='dashboard__directory'>
                    <Link to='/AboutMe' className='dashboard__directory__list--link'>
                        <div className='dashboard__directory__list--1'>
                            關於我
                        </div>
                    </Link>
                    <Link to='/Portfolio' className='dashboard__directory__list--link'>
                        <div className='dashboard__directory__list--2'>
                            作品集
                        </div>
                    </Link>
                    <Link to='/Resume' className='dashboard__directory__list--link'>
                        <div className='dashboard__directory__list--3'>
                            履歷
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default DashBoardPage;