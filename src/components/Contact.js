import React from "react"

import "../styles/contact.scss"

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <ul className="sm-list">
                    <li>
                        <a href="https://www.facebook.com/danutawrobel1950" target="_blank" rel="noreferrer" className="sm-list__item-link">
                            facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/niteczkidaneczki/" target="_blank" rel="noreferrer" className="sm-list__item-link">
                            instagram
                        </a>
                    </li>
                    <li>
                        <a href="mailto:email@domain.com" target="_blank" rel="noreferrer" className="sm-list__item-link">
                            email
                        </a>
                    </li>
                </ul>
                <a href="https://github.com/ajiiz" target="_blank" rel="noreferrer" className="copyright-link">
                    © ajiiz.piotrwrobel
                </a>
            </div>
        </div>
    )
}

export default Contact
