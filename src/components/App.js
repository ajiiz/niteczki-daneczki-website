import React, { useState } from "react"

import Sidebar from "./Sidebar"
import Pages from "./Pages"

const App = () => {

  const [isSidebar, setIsSidebar] = useState(false);
  const [isPolish, setIsPolish] = useState(true);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  const handleLanguage = () => {
    setIsPolish(!isPolish)
  }

  return (
    <div className="main">
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} handleLanguage={handleLanguage} isPolish={isPolish}/>
      <Pages isSidebar={isSidebar}/>
    </div>
  )
}

export default App