import React,{useState} from "react";
import './admin/admin.css';
export default function Displaybook(props){
    const [show,setShow]= useState({display:false,item:{},id:0});
    const hienthi=(item)=>{
        setShow({display:true,item:props.kho[item.target.id],id:item.target.id})
    }
    const thoat=()=>{
        setShow({display:false,item:{},id:0})
    }
    return <div className="body__itembook" >
                {
                   props.kho.map((u,index)=>{
                        return <div className="body__itembook-item">
                        <div className="body__itembook-item-box"  style={{cursor:"pointer",height:"290px",position:"relative"}}>
                            <img className="body__itembook-item-image" onClick={hienthi} id={index} src={u.image} alt="image"></img>
                            <br/>
                            {u.name}
                            <br/>
                            <span style={{position:"absolute",bottom:"50px",right:"50px"}}>Giá:{" "+u.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+"Đ"}</span>
                            <div >
                                <button className="them them2" name={u.name} value={u.price} id={index} onClick={props.them}>Thêm</button>
                                <span className="them them1" name={u.name} value={u.price} id={index} onClick={props.them}>Mua ngay</span>
                            </div>
                        </div>
                    </div> 
                    })
                    
                }
                {show.display && <Display item={show.item} them={props.them} id={show.id} thoat={thoat}/> }
            </div>
}
function Display(props){
    const them=(item)=>{
        props.them(item);
        props.thoat();
    }
    return <div className="background" style={{top:"0px",left:"0px"}}>
    <div className="itemshow">
        <p style={{color:"#c92127",float:"right",margin:"10px 20px",cursor:"pointer",fontWeight:"bold"}} onClick={props.thoat}>Đóng</p>
        <div style={{display:"inline-flex",flexWrap:"wrap",marginTop:"40px"}}>
            <div className="itemshow__image">
            <img src={props.item.image} style={{height:"60px",position:"relative",bottom:"320px",left:"20px"}} alt="image"></img>
            <img src={props.item.image} style={{height:"330px",position:"relative",left:"50px",top:"-20px"}} alt="image"></img>
            </div>
            <div className="itemshow__info">
                    <p style={{fontSize:"20px",fontWeight:"bold",marginLeft:"20px"}}>{props.item.name}</p>
                    <span style={{marginLeft:"20px",fontSize:"25px",fontWeight:"bold",color:"#c92127"}}>Giá:{" "+props.item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')+"Đ"}</span>
                    <p style={{marginLeft:"20px"}}><b>Mô tả:</b>{" "+props.item.describes}</p>
            </div>
            <div style={{position:"relative",bottom:"120px",right:"45px",zIndex:"15"}}>
                <button className="button__dangnhap form__inputform-button2" style={{fontWeight:"bold",color:"#c92127",border:"2px solid #c92127",borderRadius:"6px",height:"40px",width:"200px",marginRight:"-50px",background:"white"}} name={props.item.name} value={props.item.price} id={props.id} onClick={them}>Thêm vào giỏ hàng</button>
                <button className="button__boqua form__inputform-button" style={{fontWeight:"bold",color:"white",backgroundColor:"#c92127",borderRadius:"6px",height:"40px",width:"200px"}} onClick={props.thoat} >Bỏ qua</button>
            </div>
        </div>

    </div>
    </div>
}