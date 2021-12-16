import React from "react";

const PortfolioItem = () => (
    <div>
        <div className="portfolio-item">
            <a href="https://niansyuan.github.io/Indecision-app/">
                <img
                    src="./image/portfolio-work-1.jpg"
                    alt="作品連結"
                    width="300"
                />
            </a>
            <div>
                <h1>Indecision App</h1>
                <h3>有選擇障礙嗎?讓App幫你做決定!</h3>
                <ol>
                    <li>使用JXS語法</li>
                    <li>Third-Party component應用:React-Modal 讓對話框不再醜醜</li>
                </ol>
            </div>
        </div>
        <div className="divider"></div>
        <div className="portfolio-item">
            <a href="https://expensify-app-20211116.herokuapp.com/">
                <img
                    src="./image/portfolio-work-2.jpg"
                    alt="作品連結"
                    width="300"
                />
            </a>
            <div>
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