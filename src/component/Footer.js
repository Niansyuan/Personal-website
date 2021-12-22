import React from "react";

export const Footer = () => (
    <footer className="footer">
        <div className="contain-container">
            <div className="footer-header">Contact Me</div>
            <div className="footer__contain">
                <div className="footer__item">
                    <h3>Phone</h3>
                    <p>+886-906965301</p>
                </div>
                <div className="footer__item">
                    <h3>Email</h3>
                    <p><a href="mailto:niansyuan@gmail.com">niansyuan@gmail.com</a></p>
                </div>
                <div className="footer__item">
                    <h3>Follow Me</h3>
                    <p><a href="https://github.com/Niansyuan"><img className="footer-icon" src="/image/github.svg"></img>GitHub</a></p>
                    <p><a href="https://www.instagram.com/niansyuan_wang/"><img className="footer-icon" src="/image/ig.svg"></img>Instagram</a></p>
                </div>
            </div>
        </div>
    </footer>
)


export default Footer;