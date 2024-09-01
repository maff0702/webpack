import { BrowserRouter } from "react-router-dom"
import { Routing } from "../../public/routing"
import { NavBar } from "../ui/nav-bar"
import React from "react"

export const App = () => {

return (
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
  )
}