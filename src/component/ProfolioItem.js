import React from "react";

const PortfolioItem = () => (
    <div>
        <div className="portfolio-item">
            <div className="portfolio-item__pic">
                <a
                    href="https://niansyuan.github.io/Indecision-app/"
                    target="_blank"
                    title="open link"
                >
                    <img
                        src="./image/portfolio-work-1.jpg"
                        alt="作品連結"
                    />
                </a>
            </div>
            <div className="portfolio-item__text">
                <h1>Indecision App</h1>
                <h3>有選擇障礙嗎?讓App幫你做決定!</h3>
                <ul>
                    <li>使用JXS語法</li>
                    <li>Third-Party component React-Modal 客製對話框</li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="divider"></div>
        <div className="portfolio-item">
            <div className="portfolio-item__pic">
                <a
                    href="https://expensify-app-20211116.herokuapp.com/"
                    target="_blank"
                    title="open link">
                    <img
                        src="./image/portfolio-work-2.jpg"
                        alt="作品連結"
                    />
                </a>
            </div>
            <div className="portfolio-item__text">
                <h1>Expensify App</h1>
                <h3>消失的國父在哪裡?幫你記錄每一分錢的去向</h3>
                <ol>
                    <li>Redux</li>
                    <li>React-Router</li>
                    <li>firebase串接，使用第三方登入</li>
                    <li>RWD響應式設計</li>
                </ol>
            </div>
        </div>
    </div>
);

export default PortfolioItem;