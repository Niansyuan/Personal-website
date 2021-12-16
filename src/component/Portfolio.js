import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PortfolioItem from "./ProfolioItem";

const Portfolio = () => (
    <div>
        <Header />
        <div className="page-header">
            <div className="contain-container">
                <div className="header__contain">
                    Projects
                </div>
            </div>
        </div>
        <div className="contain-container">
            <PortfolioItem />
        </div>
        <Footer />
    </div>
);

export default Portfolio;