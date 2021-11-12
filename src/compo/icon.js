import React, { useEffect, useState } from "react";
import "../App.css";
import "../fontawesome-free-5.15.4-web/css/all.min.css";
export default function Icon(props){
    const displayform=()=>{
     props.display(props.name);
    }
       return <>
       <li className="form">
            <button className="form__button" onClick={displayform}>
                <i class={props.icon}></i>
                <br/>
                {props.name}
            </button>
            
        </li>
       </>
    
}