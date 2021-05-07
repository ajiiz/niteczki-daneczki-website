import React from "react"

import Homepage from "./Home"
import Aboutpage from "./About"
import Workpage from "./Work"

import "../styles/pages.scss"

const Pages = ({ isSidebar }) => {
    return (
        <div className={isSidebar ? "pages pages-active" : "pages"}>
            <Homepage />
            <Aboutpage />
            <Workpage />
        </div>
    )
}

export default Pages