import React from "react";
import './admin/admin.css';
export default function Displaybook(props){
    return <div className="body__itembook">
                {
                   props.kho.map((u,index)=>{
                        return <div className="body__itembook-item">
                        <div className="body__itembook-item-box"  style={{height:"290px",position:"relative"}}>
                            <img className="body__itembook-item-image" src={u.image} alt="image"></img>
                            <br/>
                            {u.name}
                            <br/>
                            <span style={{position:"absolute",bottom:"50px",right:"50px"}}>Giá:{" "+u.price+"Đ"}</span>
                            <div >
                                <button className="them them2" name={u.name} value={u.price} id={index} onClick={props.them}>Thêm</button>
                                <span className="them them1" name={u.name} value={u.price} id={index} onClick={props.them}>Mua ngay</span>
                            </div>
                        </div>
                    </div> 
                    })
                }
            </div>
}