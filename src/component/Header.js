import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="contain-container">
                    <div className="header__contain">
                        <Link
                            to='/'
                            className="header__title"
                        >
                            Hi !I'm Mich
                        </Link>
                        <div className="header__dropdown-menu">
                            <button className="header__dropdown-menu--button">
                                <img src="/image/menu.png" width="40" height="20" />
                            </button>
                            <div className="header__dropdown-menu--content">
                                <Link to='/AboutMe' className='header__dropdown-menu--list'>
                                    <div>
                                        About me
                                    </div>
                                </Link>
                                <Link to='/Portfolio' className='header__dropdown-menu--list'>
                                    <div>
                                        Portfolio
                                    </div>
                                </Link>
                                <Link to='/Resume' className='header__dropdown-menu--list'>
                                    <div>
                                        Resume
                                    </div>
                                </Link>
                                <Link to='/DemoPage' className='header__dropdown-menu--list'>
                                    <div>
                                        API串接
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    };
};

export default Header;