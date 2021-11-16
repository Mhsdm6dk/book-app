import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Donhang(props){
    const [userlist,setUserlist]= useState([]);
    const user=useSelector(state=>state.user);
    useEffect(()=>{
        fetch('https://book-python-vip.herokuapp.com/customer/')
        .then(item=>item.json())
        .then(item=>{
            setUserlist(item.filter(u=>u.username==user.username));
        })
    },[])
    return<div className="background">
    <div className="quanlidonhang">
        <div className="quanlidonhang__head">
                <h3 style={{margin:"20px 630px 0px 20px"}}>Danh sách đơn hàng</h3>
                <p className="them 2" onClick={props.thoatform}>Đóng</p>
        </div>
        <div className="quanlidonhang__body">
            {
                userlist.map((item)=>{
                    return<div className="quanlidonhang__body-list" >
                        <p style={{background:"white",padding:"2px 15px 15px 15px",borderRadius:"4px"}}>
                        <h3 style={{borderBottom:"1px solid #ececec",padding:"0px 0px 10px 0px"}}>THÔNG TIN KHÁCH HÀNG</h3>
                        <div>
                        Name:{" "+item.name}<br/>
                        Địa chỉ:{" "+item.address}<br/>
                        SĐT:{" "+item.telephone}<br/>
                        Email:{" "+item.email}<br/>
                        </div>
                        </p>
                         <Order user={item} />
                    </div>
                })
            }
        </div>
    </div>
    </div>
}
function Order(props){
    const [kho,setKho]=useState([]);
    useEffect(()=>{
        fetch('https://book-python-vip.herokuapp.com/oder/')
        .then(item=>item.json())
        .then(item=>{
            setKho(item.filter((u)=>(u.customer.name==props.user.name)))
        })
    },[])
   const xoaOrder=(u)=>{
       fetch('https://book-python-vip.herokuapp.com/oder/'+u.target.value,{
           method:"DELETE",
           headers:{
               'Content-Type':'application/json'
           }
       })
       setKho(kho.filter((item)=>item.id!=u.target.value))
   }
    return<div >
        {kho.map((item)=>{
            return<div className="quanlidonhang__body-list-order" style={{background:"white",padding:"2px 15px 15px 15px",borderRadius:"4px"}} >
               Mã đơn hàng: <span style={{fontWeight:"500"}}>{item.code}</span> <br/>
               Thời gian tạo: <span style={{fontWeight:"500"}}>{item.creatDate} </span><button className="button__dangnhap form__inputform-button2" style={{fontWeight:"bold",color:"#c92127",border:"2px solid #c92127",borderRadius:"6px",height:"30px",width:"150px",marginRight:"-50px",background:"white"}} value={item.id} onClick={xoaOrder}>Hủy đơn hàng</button><br/>
                Tổng số tiền: <span style={{fontWeight:"500"}}>{item.cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+" Đồng"}</span><br/>
                <DDonhang code={item.code}/>
                </div>
        })}
    </div>
}
function DDonhang(props){
    const [itemlist,setItemlist]= useState([]);
    useEffect(()=>{
        fetch('https://book-python-vip.herokuapp.com/oder_item/')
        .then(item=>item.json())
        .then(item=>{
            return item.filter((item)=>( item.oder.code==props.code))
        })
        .then(item=>{
            setItemlist(item);
        })
    },[props.code])
    if(itemlist.length>0){
        return<>
        {itemlist.map((item)=>{
            if(item.item!=null){
                return <table>
            <tr>
                <td rowSpan="2"><img className="giohang__sach" src={item.item.image}></img></td>
                <td>Tên:{" "+item.item.name}</td>
            </tr>
            <tr>
            <td>Giá:{" "+item.item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+" Đồng"}</td>
            </tr>
            <tr>
            <td>Số lượng:{" "+item.quantity}</td>
            </tr>
            
        </table>
            }
        })}
    </>
    }
    else return null;
    
}