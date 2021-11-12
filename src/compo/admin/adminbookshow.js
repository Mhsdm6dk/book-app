import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Themsanpham from "./themsanpham";
import Boxitem from "./boxitem";
export default function Adminbookshow(props){
    const timkiem=useSelector(state=>state.timkiem);
    const [kho, thaydoikho]= useState([]);
    useEffect(()=>{fetch("https://book-python-vip.herokuapp.com/item/?format=json")
    .then(item=>item.json())
    .then(item=>{
        return item.filter((item)=>item.category.name==props.category_name);
    })
    .then(item=>thaydoikho(item))
},[props.category_name])
    const them=(item)=>{
        thaydoikho([...kho,item]);
    }
    const items=kho.filter((item)=>item.name.toUpperCase().includes(timkiem.toUpperCase()));
    const xoasanpham=(index)=>{
        const arr=kho.filter(item=>item.id!=index);
        thaydoikho(arr);
    }
        if(timkiem==''){
            return<div className="body__itembook">
                {
                   kho.map((u)=>{
                        return <Boxitem u={u} xoasanpham={xoasanpham} category_name={props.category_name}/>
                    })
                }
                     <Themsanpham themsanpham={them} category_name={props.category_name}/>
            </div>
        }
        else{
            return<div className="body__itembook">
                {
                   items.map((u)=>{
                        return <Boxitem u={u} xoasanpham={xoasanpham} category_name={props.category_name}/>
                    })
                }
                     <Themsanpham themsanpham={them} category_name={props.category_name}/>
            </div>
        }
        
 }
