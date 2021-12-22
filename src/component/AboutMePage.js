import React from "react";
import CarouselImg from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import { AccordionItem1, AccordionItem2 } from "./Accordion";

const AboutMePage = () => (
    <div>
        <Header />
        <div className="page-header">
            <div className="contain-container">
                <div className="header__contain">
                    About me
                </div>
            </div>
        </div>
        <div className="contain-container">
            <div className="aboutme-text">
                <h3>工作相關問題</h3>
                <AccordionItem1 />
            </div>
            <div className="aboutme-text">
                <h3>個人相關問題</h3>
                <AccordionItem2 />
            </div>
            <CarouselImg />
        </div>
        <Footer />
    </div>
);

export default AboutMePage;