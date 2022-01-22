import React, { useState } from "react";

const PortfolioItem1 = () => {
    const [readmore, setReadmore] = useState(true);
    return (
        <div>
            <div className="portfolio-item">
                <div className="portfolio-item__pic">
                    <a
                        href="https://mich-fake-shopping-cart.herokuapp.com/"
                        target="_blank"
                        title="open link"
                    >
                        <img
                            src="image/project-1.jpg"
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
                    <h1>Shopping Cart</h1>
                    <h3>API 串接商品，打造購物車</h3>
                    <ul hidden={readmore}>
                        <li>使用TypeScript撰寫</li>
                        <li>REST API</li>
                        <ul><li className="li--none">透過FakeStoreAPI，取得JSON形式商品資料</li></ul>
                        <li>React UI 框架使用:Material UI</li>
                        <ul><li className="li--none">使用LinearProgress組件作為Loading進度條</li></ul>
                        <ul><li className="li--none">使用Button，並客製化Theme取代默認顏色</li></ul>
                        <li>styled-components</li>
                        <ul><li className="li--none">使用styled-components取代CSS files</li></ul>
                        <li>Hook使用</li>
                        <ul><li className="li--none">使用State Hook</li></ul>
                        <ul><li className="li--none">管理商品數量、Loading與否、購物車開啟關閉</li></ul>
                    </ul>
                    <button className="readmore" hidden={!readmore} onClick={() => setReadmore(false)}>read more</button>
                    <button className="hideDetail" hidden={readmore} onClick={() => setReadmore(true)}>hide details</button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem1;