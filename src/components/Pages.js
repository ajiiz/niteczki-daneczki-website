import Homepage from "./Home"
import Workpage from "./Work"

import "../styles/pages.scss"

const Pages = ({ isSidebar }) => {
    return (
        <div className={isSidebar ? "pages pages-active" : "pages"}>
            <Homepage />
            <Workpage />
        </div>
    )
}

export default Pages