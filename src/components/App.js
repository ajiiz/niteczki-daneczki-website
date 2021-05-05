import React, { useState } from "react"

import Sidebar from "./Sidebar"
import Pages from "./Pages"

const App = () => {

  const [isSidebar, setIsSidebar] = useState(false);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  return (
    <div className="main">
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar}/>
      <Pages isSidebar={isSidebar}/>
    </div>
  )
}

export default App