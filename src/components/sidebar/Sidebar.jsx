import React from 'react'
import "./sidebar.css"
import { LineStyle,Timeline, TrendingUp}from '@material-ui/icons';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <LineStyle/>
                            Home
                        </li>
                        <li className="sidebarItem">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
