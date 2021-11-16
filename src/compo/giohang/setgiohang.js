import React from "react";
export default function Setgiohang(props){
        const xoaitem=()=>{
            const u={
                ten: props.ten,
                gia: props.gia,
            }
            props.xoa(u);
        }
        var sl=props.soluong;
        const them=()=>{
            const u={
                ten: props.ten,
                gia: props.gia,
                image: props.image
            }
            props.themvagiohang(u);
        }
        const bot=()=>{
            const u={
                ten: props.ten,
                gia: props.gia,
            }
            props.xoabot(u);
        }
        return <div style={{margin:"5px 0px 10px 10px"}}>
        <table>
            <tr>
                <td rowSpan="2"><img className="giohang__sach" src={props.image}></img></td>
                <td>Tên:{" "+props.ten}</td>
            </tr>
            <tr>
            <td>Giá:{" "+props.gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+"Đ"}</td>
            </tr>
            
        </table>
        <span className="giohang__soluong">Số lượng:<button className="giohang__button-thembot" style={{border:"none",outline:"none",background:"white",fontWeight:"bold",fontSize:"25px",cursor:"pointer"}} onClick={bot}>-</button><input type="text" value={sl} name="soluong" style={{width:"15px"}}/><button className="giohang__button-thembot" style={{border:"none",outline:"none",background:"white",fontWeight:"bold",cursor:"pointer",fontSize:"16px"}} onClick={them}>+</button></span>
        <span className="giohang__button-xoa"><button onClick={xoaitem} style={{border:"none",outline:"none",background:"white",fontWeight:"bold",color:"#c92127",cursor:"pointer"}}>Xóa</button></span>
    </div>
}