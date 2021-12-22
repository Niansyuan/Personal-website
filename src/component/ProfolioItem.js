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
                    <li>Third-Party component : React-Modal</li>
                    <ul><li className="li--none">引入React-Modal客製對話框</li></ul>
                    <li>React :  </li>
                    <ul><li className="li--none">使用Components/ Props/ Local State</li></ul>
                    <li>JSON :  </li>
                    <ul><li className="li--none">讀取與儲存資料於用戶本地端</li></ul>
                    <li>Webpack 將程式碼模組化:  </li>
                    <ul><li className="li--none">透過webpack bundle檔案，減少script使用</li></ul>
                    <ul><li className="li--none">使用style-loader、 css-loader處裡SCSS檔案</li></ul>
                    <ul><li className="li--none">babel-loader將語法轉成ES5</li></ul>
                    <li>RWD設計</li>
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
                <ul>
                    <li>Redux</li>
                    <ul><li className="li--none">引入action、reducer、store概念，更方便管理state</li></ul>
                    <li>React-Router-dom</li>
                    <ul><li className="li--none">實現SPA網頁，提高切換分頁時的響應速度</li></ul>
                    <li>測試框架 : Jest</li>
                    <ul><li className="li--none">利用Jest進行單元測試，驗證功能是否符合預期</li></ul>
                    <li>Database : firebase API 串接</li>
                    <ul><li className="li--none">使用firebase儲存每位用戶data，並使用firebase提供第三方登入功能，Goolge & Facebook</li></ul>
                    <li>Third-Party library : react-dates</li>
                    <ul><li className="li--none">react-dates搭配moment.js，打造日期選取格式</li></ul>
                    <li>RWD設計</li>
                </ul>
            </div>
        </div>
    </div>
);

export default PortfolioItem;