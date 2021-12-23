import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Resume = () => (
    <div>
        <Header />
        <div className="page-header">
            <div className="contain-container">
                <div className="header__contain">
                    Resume
                </div>
            </div>
        </div>
        <div className="contain-container">
            <div className="resume">
                <div className="resume__link">
                    <a
                        href="https://www.cakeresume.com/mich8588"
                        target="_blank"
                    >
                        CakeResume
                    </a>
                </div>
                <div className="resume__link">
                    <a
                        href="https://pda.104.com.tw/profile/share/jH9gxiMcSLBgKcELc2Ta1nQJ7JkmQEd4"
                        target="_blank"
                    >
                        104履歷
                    </a>
                </div>
            </div>
            <div className="resume-container">
                <iframe
                    src="https://drive.google.com/file/d/1nNf_gzQ8tMb4uS5RALt8etEHIQW5Dpmy/preview?usp=sharing/;Secure"
                    title="My CakeResume Preview"
                />
            </div>
        </div>
        <Footer />
    </div>
);

export default Resume;