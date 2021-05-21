import React, { useState, useEffect } from "react"
import { getUserLocale } from "get-user-locale"

import Sidebar from "./Sidebar"
import Pages from "./Pages"

import Data_PL from "../content/data_pl"
import Data_EN from "../content/data_en"

const App = () => {

  const data_PL = Data_PL
  const data_EN = Data_EN
  const [isSidebar, setIsSidebar] = useState(false)
  const [isPolish, setIsPolish] = useState()
  const [content, setContent] = useState(data_PL)

  const handleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  const handleLanguage = () => {
    setIsPolish(!isPolish)
  }

  useEffect(() => {
    const json = localStorage.getItem("lang")
    if (json === "en" || getUserLocale() !== "pl") {
     setIsPolish(false)
    } else {
      setIsPolish(true)
    }
   }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = isPolish ? data_PL : data_EN
      setContent(data)
   }
   fetchData()

   if (isPolish) {
    localStorage.setItem("lang", "pl")
   } else {
    localStorage.setItem("lang", "en")
   }
  }, [isPolish])

  return (
    <div className="main">
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} handleLanguage={handleLanguage} isPolish={isPolish} content={content.sidebar}/>
      <Pages isSidebar={isSidebar} content={content}/>
    </div>
  )
}

export default App