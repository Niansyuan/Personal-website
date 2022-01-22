import React, { useState } from "react";

const PortfolioItem3 = () => {
    const [readmore, setReadmore] = useState(true);
    return (
        <div>
            <div className="portfolio-item">
                <div className="portfolio-item__pic">
                    <a
                        href="https://niansyuan.github.io/Indecision-app/"
                        target="_blank"
                        title="open link"
                    >
                        <img
                            src="image/project-3.jpg"
                            alt="作品連結"
                        />
                        <img
                            src="image/openLink.jpg"
                            width={30}
                            className="portfolio-item__pic--icon"
                        />
                    </a>
                </div>
                <div className="portfolio-item__text">
                    <h1>Indecision App</h1>
                    <h3>有選擇障礙嗎?讓App幫你做決定!</h3>
                    <ul hidden={readmore}>
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
                    <button className="readmore" hidden={!readmore} onClick={() => setReadmore(false)}>read more</button>
                    <button className="hideDetail" hidden={readmore} onClick={() => setReadmore(true)}>hide details</button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem3;