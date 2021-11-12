import React, { useEffect, useState } from "react";
import Icon from "../icon";
import '../../App.css';
import '../../fontawesome-free-5.15.4-web/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";
import { kiemtrauser } from "../../actions";
import Quanlydonhang from "./quanlydonhang";
export default function Headadmin(props){
    const [state,setState] = useState({
        displayQuanlydonhang:false
    });
    const display=()=>{
        setState({displayQuanlydonhang:true});
    }
    const thoat=()=>{
        setState({displayQuanlydonhang:false});
    }
    return(
        <div className="header__head">
            <Headtext/>
            <Headicon admin={props.admin} username={props.username} display={display}/>
            {state.displayQuanlydonhang && <Quanlydonhang thoat={thoat}/>}
        </div>
    )
}
function Headtext(props){
    return(
        <ul className="header__headtext">
            <li className="header__headtext-text"><i class="fas fa-truck"></i>{" "}Miễn phí giao hàng |</li>
            <li className="header__headtext-text"><i class="fas fa-book-open"></i>{" "}80.000 tựa sách |</li>
            <li className="header__headtext-text">LovelyBook Reader</li>
        </ul>
    )
}
export function Headicon(props){
    const dispatch=useDispatch();
    const dangxuat=()=>{
        dispatch(kiemtrauser({
            username:"",
            password:"",
            id:0,
            name: "",
            email: "",
            address: "",
            telephone: "",
            order: "",
            admin:""
        }))
    }
        return <ul className="header__headicon">
            <Icon name="Thông báo" icon="far fa-bell icon" display={props.display}/>
            <Icon name="Đơn hàng" icon="fas fa-cart-arrow-down icon" display={props.display}/>
            <button className="form__button" onClick={dangxuat}><i class="fas fa-sign-out-alt icon"></i><br/>Đăng xuất</button>
            <button style={{background:"white",border:"none",position:"relative",bottom:"5px"}}><img src="https://taihinhanh.vn/wp-content/uploads/2021/07/joker-Taihinhanh-Vn-26.jpg"
            style={{width:"40px",borderRadius:"20px"}}/><br/>{props.username}</button>         
        </ul>
    
    
}