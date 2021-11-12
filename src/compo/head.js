import React, {  useEffect, useState } from "react";
import axios from 'axios';
import Icon from "./icon";
import '../App.css';
import '../fontawesome-free-5.15.4-web/css/all.min.css';
import { useDispatch } from "react-redux";
import { kiemtrauser } from "../actions";
import Dangnhap from "./formdangnhapdangki/Dangnhap";
import Giohang from "./giohang/giohang";
import Dangki from "./formdangnhapdangki/Dangki";
import Thongbao from "./thongbao/thongbao";
import Donhang from "./donhang";
export default function Head(props){
    
    const [state,setState]=useState(
        {
            displayDangnhap:false,
            displayGiohang:false,
            displayDangki:false,
            displayThongbao:false,
            displayDonhang:false
        }
    );
    useEffect(()=>{
        const u=props.opengiohang;
        setState({
            displayDangnhap:false,
            displayGiohang:u,
            displayDangki:false,
            displayThongbao:false,
            displayDonhang:false
        });
    },[props.opengiohang])
    const display=(item)=>{
        if(item=="Đăng nhập"){
            setState({
                displayGiohang:false,
                displayDangki:false,
                displayThongbao:false,
                displayDangnhap:true,
                displayDonhang:false
            });
        }
        else if(item=="Đăng kí"){
            setState({displayDangnhap:false,
                displayGiohang:false,
                displayThongbao:false
                ,displayDangki:true,
                displayDonhang:false
            });
        }
        else if(item=="Giỏ hàng"){
            setState({displayDangnhap:false,
                displayDangki:false,
                displayThongbao:false,
                displayGiohang:true,
                displayDonhang:false
            });
        }
        else if(item=="donhang"){
            setState({displayDangnhap:false,
                displayDangki:false,
                displayThongbao:false,
                displayGiohang:false,
                displayDonhang:true
            });
        }
        else{
            setState({displayDangnhap:false,
                displayGiohang:false,
                displayDangki:false,
                displayThongbao:true,
            });
        }
    }
    const thoatform=()=>{
         setState({
            displayDangnhap:false,
            displayGiohang:false,
            displayDangki:false,
            displayThongbao:false,
            displayDonhang:false
         })
    }
    return(
        <div className="header__head">
            <Headtext/>
            <Headicon admin={props.admin} username={props.username} display={display}/>
            {state.displayDangnhap && <Dangnhap thoatform={thoatform} display={display}/>}
            {state.displayGiohang && <Giohang clear={props.clear} setOpengiohang={props.setOpengiohang} thoatform={thoatform} giohang={props.giohang} xoabot={props.xoabot} themvagiohang={props.themvagiohang} xoa={props.xoa}/>}
            {state.displayDangki && <Dangki thoatform={thoatform} display={display}/>}
            {state.displayThongbao && <Thongbao thoatform={thoatform} admin={props.admin}/>}
            {state.displayDonhang && <Donhang thoatform={thoatform}/>}
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
    const hienthi=()=>{
        props.display("donhang");
    }
    if(props.admin==""){
        return <ul className="header__headicon">
            <Icon name="Thông báo" icon="far fa-bell icon" display={props.display}/>
            <Icon name="Giỏ hàng" icon="fas fa-cart-arrow-down icon" display={props.display}/>
            <Icon name="Đăng nhập" icon="fas fa-sign-in-alt icon" display={props.display}/>
            <Icon name="Đăng kí" icon="far fa-address-card icon" display={props.display}/>
        </ul>
    }
    else{
        return <ul >
            <li className="header__headicon">
            <Icon name="Thông báo" icon="far fa-bell icon" display={props.display}/>
            <Icon name="Giỏ hàng" icon="fas fa-cart-arrow-down icon" display={props.display}/>
            <button className="form__button" onClick={dangxuat}><i class="fas fa-sign-out-alt icon"></i><br/>Đăng xuất</button>
            <button style={{background:"white",border:"none",position:"relative",bottom:"5px"}}><img src="https://taihinhanh.vn/wp-content/uploads/2021/07/joker-Taihinhanh-Vn-26.jpg"
            style={{width:"40px",borderRadius:"20px"}}/><br/>{props.username}</button>      
            </li>
            <li>
            <div onClick={hienthi} className="quanlydonhang">Quản lý đơn hàng <i class="fas fa-angle-down" style={{fontSize:"20px",position:"relative",top:"3px",left:"3px"}}></i></div>
            </li>
        </ul>
    }
    
    
}