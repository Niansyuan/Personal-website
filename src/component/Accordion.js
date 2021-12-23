import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AccordionItem1 = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>轉職動機?</Accordion.Header>
                <Accordion.Body>
                    擔任製程開發工程師的日子裡，雖然腦力激盪如何改善實驗很有趣，但實際接觸後沒辦法接受需要經常進出無塵室實驗的日子;<br />
                    在疫情較嚴重的期間，工作內容常常需要實驗而無法遠端，也讓我意識到自己未來幾十年想要的工作環境並非現有產業。
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>為什麼選前端作為轉職起點?</Accordion.Header>
                <Accordion.Body>
                    本身理工科出身，加上喜歡邏輯思考，自認美感還算不錯，所以就選擇以前端作為轉職的起點。<br />
                    另外就是，網頁的實作能夠很迅速地看到成果 !<br />
                    過往不論是碩論實驗，還是工作，即便只是簡單的實驗都必須透過層層的解析、檢驗，很難直觀的了解自己手上的產品。<br />
                    但在製作網頁的過程中，能夠很直接地得到結果，即使一開始要花很多時間修正，但隨著練習，解決錯誤的時間也大幅縮短，喜歡這種成就感。<br />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>有什麼缺點嗎?</Accordion.Header>
                <Accordion.Body>
                    我很容易緊張，擔心別人的眼光，連帶就會影響我報告的表現，過往透過提前練習來降低緊張感，也練習讓自己屏除這種感覺。<br />
                    當做的工作與自身能力提升沒有太大關連了時候，就會比較被動，
                    不過我認為轉職前端應該是不會這樣，畢竟要學的東西實在太多了，產業知識更新的速度也很快，加上每天都很期待看到自己的成品!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>那優點呢!</Accordion.Header>
                <Accordion.Body>
                    <i>自律和學習力</i>，為了學習一項新技能，我會在生活中規律的安排，像是這次轉職自學，還有吉他跟繪圖摸索。
                    我相信在需要不斷學習的職位上，這項優點能為自身與公司帶來助益。<br />
                    <i>執行力強</i>，我認為開始行動才能實現自己想要的事情，所以在我評估過我想要做的事情，
                    譬如此次轉職，了解最壞的情況與自己的底線後，著手規劃，動作!
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

const AccordionItem2 = () => {
    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header>平常都在幹嘛?</Accordion.Header>
                <Accordion.Body>
                    我喜歡打羽球、彈吉他、唱歌、看劇、看股票，生活基本上就是由這些元素構成。<br />
                    那開始接觸程式語言後，每天都會花時間練習一下，避免感覺跑掉。<br />
                    偶爾也會構思繪畫作品，像是下方輪播效果圖也是我自己畫的貼圖。
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>相處起來是怎樣的一個人?</Accordion.Header>
                <Accordion.Body>
                    一開始會比較拘謹，但熟了就會笑得很奔放的一種人。<br />
                    以過往的團體經驗，算是大眾型的，認份和諧，不是鶴立雞群，但也不會一直拉屎造成別人困擾，
                    遇到同學同事有需要幫忙的，也不會吝嗇伸出友善的小手。
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};

export { AccordionItem1, AccordionItem2 };