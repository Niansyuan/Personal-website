import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselImg = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <a href="https://line.me/S/shop/sticker/author/2340978" target="_blank" title="open link">
                    <img
                        className="d-block w-100"
                        src="/image/lineSticker.png"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Line 貼圖設計</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/image/TOEIC.jpg"
                />
                <Carousel.Caption>
                    <h3>多益成績證明</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselImg;