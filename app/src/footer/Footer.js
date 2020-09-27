import React from "react"
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="single-footer">
                    <h2>Navigate</h2>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Home</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">About</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
                <div className="single-footer">
                    <h2>Useful links</h2>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Something 1</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Something 2</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Something 3</a></li>
                    </ul>
                </div>
                <div className="single-footer">
                    <h2>Useful links 2</h2>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Something 1</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Something 2</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#">Something 3</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer