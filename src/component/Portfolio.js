import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PortfolioItem1 from "./PortfolioItems/ProfolioItem1";
import PortfolioItem2 from "./PortfolioItems/ProfolioItem2";
import PortfolioItem3 from "./PortfolioItems/ProfolioItem3";

const Portfolio = () => (
    <div>
        <Header />
        <div className="page-header">
            <div className="contain-container">
                <div className="header__contain">
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
        <div className="contain-container">
            <PortfolioItem1 />
            <PortfolioItem2 />
            <PortfolioItem3 />
        </div>
        <Footer />
    </div>
);

export default Portfolio;