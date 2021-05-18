import React from "react"

import Home from "./Home"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"

import "../styles/pages.scss"

const Pages = ({ isSidebar, content }) => {
    return (
        <div className={isSidebar ? "pages pages-active" : "pages"}>
            <Home name="home" content={content.about}/>
            <About name="about" content={content.work}/>
            <Work name="work" content={content.gallery}/>
            <Contact name="contact"/>
        </div>
    )
}

export default Pages