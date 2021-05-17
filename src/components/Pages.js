import React from "react"

import Home from "./Home"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"

import "../styles/pages.scss"

const Pages = ({ isSidebar }) => {
    return (
        <div className={isSidebar ? "pages pages-active" : "pages"}>
            <Home />
            <About />
            <Work />
            <Contact />
        </div>
    )
}

export default Pages