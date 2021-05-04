import Homepage from "./Home"
import Workpage from "./Work"

import "../styles/pages.scss"

const Pages = () => {
    return (
        <div className="pages">
            <Homepage />
            <Workpage />
        </div>
    )
}

export default Pages