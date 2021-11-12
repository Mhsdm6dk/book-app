import axios from "axios";
import React,{ useEffect, useState} from "react";
import './admin.css';
export default function Boxitem(props){
    const [state,setState]=useState({price:props.u.price,inventory:props.u.inventory});
    useEffect(()=>{
        setState({price:props.u.price,inventory:props.u.inventory});
    },[props.u])
    const handleItem=(item)=>{
        setState({...state,[item.target.name]:item.target.value});
    }
    const suaitem=()=>{
        axios.put('https://book-python-vip.herokuapp.com/item/'+props.u.id+'/', {
            "id":props.u.id,
            "name":props.u.name,
            "image":props.u.image,
            "price":state.price,
            "describes":"Trống",
            "inventory":state.inventory,
            "category":props.u.category
        })
        .then(alert("Thay đổi thông tin sản phẩm thành công"))
    }
    const xoaitem=()=>{
        fetch('https://book-python-vip.herokuapp.com/item/'+props.u.id,{
            method:"DELETE",
                headers:{
                    'Content-Type': 'application/json'
                  }
        })
        props.xoasanpham(props.u.id);
    }
    return <div className="body__itembook-item">
    <div className="body__itembook-item-box" style={{height:"300px",position:"relative"}}>
        <img className="body__itembook-item-image" src={props.u.image} alt="lol"></img>
        <br/>
        {props.u.name}
        <br/>
        <div style={{position:"absolute", bottom:"35px",right:"40px"}}>
        Giá:{" "}<input type="text" name="price" onChange={handleItem} value={state.price} style={{width:"50px"}}/>
        <br/>
        Số lượng:{" "}<input type="number" name="inventory" onChange={handleItem} value={state.inventory} style={{width:"30px"}}/>
        </div>
        <div >
            <button className="them them1" name={props.u.name} value={props.u.price} id={props.u.image} onClick={suaitem}>Thay đổi</button>
            <button className="them them2" name={props.u.name} value={props.u.price} id={props.u.image} onClick={xoaitem}>Xóa</button>
        </div>
    </div>
</div> 
}