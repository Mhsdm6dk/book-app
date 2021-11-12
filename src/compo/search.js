import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { timkiem } from "../actions";
import "../App.css";
export default function Search(props){
    const [state,setState]=useState({searchname:""});
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(timkiem(state))
    },[])
    const getvalue=(item)=>{
        setState({[item.target.name]:item.target.value});
       
        
    }
    const searchitem=()=>{
        if(state.searchname==""){
            dispatch(timkiem(state))
        }
        else{
            dispatch(timkiem(state))
        }
    }
    
        return <div className="header__searchborder">
                <input type="text" placeholder="Nhập tên sản phẩm muốn tìm kiếm..." name="searchname" className="header__search-input" onChange={getvalue}></input>
                <button className="header__search-button" onClick={searchitem}>
                    <i class="fas fa-search"></i>
                </button>
            </div>

}