import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Resume = () => (
    <div>
        <Header />
        <div className="page-header">
            <div className="contain-container">
                <div className="header__contain">
                    <h1>Resume</h1>
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
                        <img src="./image/cakeResumeLogo.png" width={25} height={25} />
                        CakeResume
                    </a>
                </div>
                <div className="resume__link">
                    <a
                        href="https://pda.104.com.tw/profile/share/1YLKqnHeTcksvVTRMWZ15yFE6X6221AO"
                        target="_blank"
                    >
                        <img src="./image/104logo.png" width={30} height={30} />
                        104 Resume
                    </a>
                </div>
                <div className="resume__link">
                    <a
                        href="https://resume.io/r/UBYH3gjuD"
                        target="_blank"
                    >
                        <img src="./image/resumeioLogo.png" width={30} height={30} />
                        Resume in English
                    </a>
                </div>
            </div>
            <div className="resume-container">
                <img
                    src="./image/Resume-English.jpg"
                    title="My Resume Preview"
                    width="100%"
                />
            </div>
        </div>
        <Footer />
    </div>
);

export default Resume;