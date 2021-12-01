import React from 'react'
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
function topbar() {
    return (
        <div className="topbar">
        
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                       <NotificationsNone/>
                       <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                       <Language/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                      </div>
                      <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default topbar
