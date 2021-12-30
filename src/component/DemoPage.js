import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SimpleMap from "./GoogleMap";

const DemoPage = () => {
    return (
        <div>
            <Header />
            <div className="page-header">
                <div className="contain-container">
                    <div className="header__contain">
                        <h1>Google Maps API Demo</h1>
                    </div>
                </div>
            </div>
            <div className="contain-container">
                <div className="mapAPI">
                    <h3>
                        既然要串接Google Maps API，就必須有主題地點<br />
                        介紹在花蓮六年的日子裡 ── 去過的那些溪<br />
                    </h3>
                    <p>
                        <i>米亞丸溪</i><br />
                        是我到花蓮的第一條溪，不過不是特別親人<br />
                        當初跟羽球系隊的同伴一起去跳水，結果不小心就拄了一個暑假的枴杖。<br />
                    </p>
                    <p>
                        <i>白鮑溪</i><br />
                        最常去的一條溪，離東華也近，
                        可以選擇任何一段下去，只要人少就好玩~<br />
                    </p>
                    <p>
                        <i>翡翠谷</i><br />
                        廣為人知的網美景點，但其實那裡很醜，水也很淺。<br />
                        要繞往旁邊的小路繼續往翡翠谷上游走約20分鐘，才是真正漂亮的地方!<br />
                    </p>
                    <p>
                        <i>三棧溪</i><br />
                        最喜歡的玩水地點!!<br />
                        水夠深，跳水也相對安全，看是要游泳還是戲水都可以<br />
                    </p>
                </div>
            </div>
            <div className="contain-container">
                <SimpleMap />
            </div>
            <Footer />
        </div >
    )
};

export default DemoPage;