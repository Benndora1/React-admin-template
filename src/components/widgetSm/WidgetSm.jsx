import React from 'react'
import "./widgetSm.css"
import {Visibility} from '@material-ui/icons/';

function widgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Member</span>
           <ul className="widgetSmList">
               <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Benson Ndora</span>
                <span className="widgetSmUserTitle">Software Developer</span>
        </div>  
           <button className="widgetSmButton">
               <Visibility/>
               Display   
             </button>

           </li>
           <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Benson Ndora</span>
                <span className="widgetSmUserTitle">Software Developer</span>
        </div>  
           <button className="widgetSmButton">
               <Visibility/>
               Display   
             </button>

           </li>
           <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Benson Ndora</span>
                <span className="widgetSmUserTitle">Software Developer</span>
        </div>  
           <button className="widgetSmButton">
               <Visibility/>
               Display   
             </button>

           </li>
           <li className="widgetSmListItem">
               <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Benson Ndora</span>
                <span className="widgetSmUserTitle">Software Developer</span>
        </div>  
           <button className="widgetSmButton">
               <Visibility/>
               Display   
             </button>

           </li>
           
           </ul>
        </div>
    ) 
} 

export default widgetSm
