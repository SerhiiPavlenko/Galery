import React from "react";
import '../Components/Practics/LayoutCss.css'
import AppBar from "../Components/DzRouter/views/AppBar";

const Layout = ({children}) => <div className="head">
        {/* <AppBar/> */}
    {children}
    </div>

export default Layout;