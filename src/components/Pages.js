import React from "react"

import Home from "./Home"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"

import "../styles/pages.scss"

const Pages = ({ isSidebar }) => {
    return (
        <div className={isSidebar ? "pages pages-active" : "pages"}>
            <Home name="home"/>
            <About name="about"/>
            <Work name="work"/>
            <Contact name="contact"/>
        </div>
    )
}

export default Pages