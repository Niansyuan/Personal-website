import React, { useState } from "react";

const PortfolioItem2 = () => {
    const [readmore, setReadmore] = useState(true);
    return (
        <div>
            <div className="portfolio-item">
                <div className="portfolio-item__pic">
                    <a
                        href="https://expensify-app-20211116.herokuapp.com/"
                        target="_blank"
                        title="open link">
                        <img
                            src="./image/project-2.jpg"
                            alt="作品連結"
                        />
                        <img
                            src="./image/openLink.jpg"
                            width={30}
                            className="portfolio-item__pic--icon"
                        />
                    </a>
                </div>
                <div className="portfolio-item__text">
                    <h1>Expensify App</h1>
                    <h3>消失的國父在哪裡?幫你記錄每一分錢的去向</h3>
                    <ul hidden={readmore}>
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
                    <button className="readmore" hidden={!readmore} onClick={() => setReadmore(false)}>read more</button>
                    <button className="hideDetail" hidden={readmore} onClick={() => setReadmore(true)}>hide details</button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem2;