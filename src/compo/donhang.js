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
    return<div className="quanlidonhang">
        <div className="quanlidonhang__head">
                <h3 style={{margin:"20px 630px 0px 20px"}}>Danh sách đơn hàng</h3>
                <p className="them 2" onClick={props.thoatform}>Đóng</p>
        </div>
        <div className="quanlidonhang__body">
            {
                userlist.map((item)=>{
                    return<div className="quanlidonhang__body-list" >
                        <p>
                        Name:{" "+item.name}<br/>
                        Địa chỉ:{" "+item.address}<br/>
                        SĐT:{" "+item.telephone}<br/>
                        Email:{" "+item.email}<br/>
                        </p>
                         <Order user={item} />
                    </div>
                })
            }
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
            return<div className="quanlidonhang__body-list-order" >
                Mã đơn hàng:{item.code}<br/>
                Thời gian tạo:{item.creatDate}<button className="list-order-button" value={item.id} onClick={xoaOrder}>Xóa</button><br/>
                Tổng số tiền:{item.cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+" Đồng"}<br/>
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