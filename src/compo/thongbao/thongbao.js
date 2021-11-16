
import React from "react";
import '../../App.css';
export default function Thongbao(props){   
    if(props.admin==""){
        return <div className="background">
        <div className="form__inputform" id="formthongbao" style={{height:"500px",position:"fixed",left:"450px",top:"35px"}}>
            <div style={{margin:"0px 0px 20px 10px"}}>
                <p style={{marginLeft:"55px"}}>Vui lòng đăng nhập để xem thông báo</p>
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_notiflogin.svg" style={{marginLeft:"92px",height:"200px"}}/>
                <button  style={{marginLeft:"115px",marginTop:"50px"}} className="button__boqua form__inputform-button" onClick={props.thoatform}>Bỏ qua</button>
        </div>
    </div>
    </div>
    }
    else{
        return <div className="background">
        <div className="form__inputform" id="formthongbao" style={{height:"500px",position:"fixed",left:"450px",top:"35px"}}>
            <div style={{margin:"0px 0px 20px 10px"}}>
                <p style={{marginLeft:"102px"}}>Không có thông báo nào</p>
                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_notiflogin.svg" style={{marginLeft:"92px",height:"200px"}}/>
                <button  style={{marginLeft:"115px",marginTop:"50px"}} className="button__boqua form__inputform-button" onClick={props.thoatform}>Bỏ qua</button>
        </div>
    </div>
    </div>
    }
        
}
