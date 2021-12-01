import React from 'react'
import "./sidebar.css"
import { LineStyle,Timeline, TrendingUp,BarChart,PermIdentity,AttachMoney, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report,Storefront}from '@material-ui/icons';
import {Link} from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link"> 
                        <li className="sidebarItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                       <Link to="/" className="link">
                       <li className="sidebarItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                       </Link>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                      <Link to="/users" className="link">
                      <li className="sidebarItem">
                            <PermIdentity className="sidebarIcon"/>
                            Users
                        </li>
                      </Link>
                      <Link to="/product" className="link">
                      <li className="sidebarItem">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li></Link>
                        
                        <li className="sidebarItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarItem">
                            <BarChart/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staffs
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
