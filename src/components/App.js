import React, { useState, useEffect } from "react"

import Sidebar from "./Sidebar"
import Pages from "./Pages"

import Data_PL from "../content/data_pl"
import Data_EN from "../content/data_en"

const App = () => {

  const [isSidebar, setIsSidebar] = useState(false)
  const [isPolish, setIsPolish] = useState(true)
  const [content, setContent] = useState(Data_PL)

  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  const handleLanguage = () => {
    setIsPolish(!isPolish)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = isPolish ? Data_PL : Data_EN
      setContent(data)
   }
   fetchData()
  }, [isPolish])

  return (
    <div className="main">
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} handleLanguage={handleLanguage} isPolish={isPolish} content={content.sidebar}/>
      <Pages isSidebar={isSidebar} content={content}/>
    </div>
  )
}

export default App