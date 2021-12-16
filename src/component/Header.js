import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="header">
        <div className="contain-container">
            <div className="header__contain">
                <Link
                    to='/'
                    className="header__title"
                >
                    Hi !I'm Mich
                </Link>
            </div>
        </div>
    </header>
)


export default Header;