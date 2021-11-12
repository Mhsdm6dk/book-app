
import React from "react";
import '../../App.css';
export default function Thongbao(props){   
    if(props.admin==""){
        return <div className="form__inputform" id="formthongbao" >
            <div style={{margin:"0px 0px 20px 10px"}}>
                <p>Vui lòng đăng nhập để xem thông báo</p>
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_notiflogin.svg" style={{marginLeft:"97px"}}/>
                <button className="button__boqua form__inputform-button" onClick={props.thoatform}>Bỏ qua</button>
        </div>
    </div>
    }
    else{
        return <div className="form__inputform" id="formthongbao" >
            <div style={{margin:"0px 0px 20px 10px"}}>
                <p style={{marginLeft:"50px"}}>Không có thông báo nào</p>
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_notiflogin.svg" style={{marginLeft:"97px"}}/>
                <button className="button__boqua form__inputform-button" onClick={props.thoatform}>Bỏ qua</button>
        </div>
    </div>
    }
        
}
