import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Displaybook from "./displaybook";
export default function Bookshow(props){
    
    const timkiem=useSelector(state=>state.timkiem);
    const [kho, thaydoikho]= useState([]);
    useEffect(()=>{
        fetch("https://book-python-vip.herokuapp.com/item/?format=json")
    .then(item=>item.json())
    .then(item=>{
        return item.filter((item)=>item.category.name==props.category_name);
    })
    .then(item=>thaydoikho(item))
},[props.category_name])
    const items=kho.filter((item)=>item.name.toUpperCase().includes(timkiem.toUpperCase()));
    if(timkiem==''){
        const them=(item)=>{
            const u={
                ten: kho[item.target.id].name,
                gia: kho[item.target.id].price,
                image: kho[item.target.id].image,
                id: kho[item.target.id].id
            }
            props.themvagiohang(u);
        }
        return <Displaybook kho={kho} them={them}/>
    }
    else{
        const them=(item)=>{
            const u={
                ten: items[item.target.id].name,
                gia: items[item.target.id].price,
                image: items[item.target.id].image,
                id: items[item.target.id].id
            }
            props.themvagiohang(u);
        }
        return <Displaybook kho={items} them={them}/>
    }
        
 }
