import axios from "axios";
import React, {  useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {kiemtrauser} from "../../actions";
export default function Dangnhap(props){
        const dispatch=useDispatch();
        const [state,setState]=useState({
            username:"",
            password:""
        });
        const [nguoidung,setNguoidung]=useState([]);
        useEffect(()=>{
            axios.get('https://book-python-vip.herokuapp.com/customer/?format=json')
            .then(user=>{
                setNguoidung(user.data);
            })
        },[])
        const getinfo=(item)=>{
            setState({...state, [item.target.name]:item.target.value});
        }
        const dangnhap=()=>{
            if(state.username!=''){
              var u=0;
              for(var i of nguoidung){
                  if(i.username==state.username && i.password==state.password){
                     u=1;
                     if(i.username=="hanhtshh"){
                        dispatch(kiemtrauser({
                            ...i
                            ,admin:"yes"}));
                     }
                     else{
                        dispatch(kiemtrauser({
                            ...i
                            ,admin:"no"}));
                     }
                      
                      props.thoatform();
                      break;
                  }
              }
              if(u==0){
                alert("Thông tin đăng nhập chưa chính xác!");
              }
          }
          }
        const gotodangki=()=>{
            props.display("Đăng kí");
        }
        return <div className="form__inputform" id="formdangnhap" >
            <div style={{margin:"0px 0px 20px 10px"}}>
                <div className="form__header">
                <h3 >Đăng nhập</h3>
                <span className="form__header-link" onClick={gotodangki}>Đăng kí</span>
            </div>
            <div className="spaceline">Tên đăng nhập:</div>
            <input type="text" id="tendangnhap" placeholder="Nhập tên đăng nhập" name="username" onChange={getinfo} className="form__inputform-text"></input>
            <div className="spaceline">Mật khẩu:</div>
            <input type="password" id="matkhau" name="password" onChange={getinfo} placeholder="*******" className="form__inputform-text"></input>
            <button className="button__dangnhap form__inputform-button2" onClick={dangnhap}>Đăng nhập</button>
            <button className="button__boqua form__inputform-button" onClick={props.thoatform}>Bỏ qua</button>
            </div>
        </div>

}