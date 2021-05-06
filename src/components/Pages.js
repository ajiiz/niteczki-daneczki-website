import Homepage from "./Home"
import Aboutpage from "./About"

import "../styles/pages.scss"

const Pages = ({ isSidebar }) => {
    return (
        <div className={isSidebar ? "pages pages-active" : "pages"}>
            <Homepage />
            <Aboutpage />
        </div>
    )
}

export default Pages