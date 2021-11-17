import React, {  useEffect, useState } from "react";
import axios from 'axios';
import Icon from "./icon";
import '../App.css';
import '../fontawesome-free-5.15.4-web/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";
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
            <Headicon admin={props.admin} username={props.username} name={props.name} display={display}/>
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
    const [tt,setTt]=useState(false);
    const [formtt,setFormtt]=useState(false);
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

        const displayThongtin=()=>{
            if(tt==false){
                setTt(true)
            }
            else{
                setTt(false)
            }
        }
        const hienthiformthongtin=()=>{
            setFormtt(true);
            setTt(false);
        }
        const thoatform=()=>{
            setFormtt(false);
        }
        return <ul style={{zIndex:"5",listStyle:"none",position:"relative"}} >
            <li className="header__headicon">
            <Icon name="Thông báo" icon="far fa-bell icon" display={props.display}/>
            <Icon name="Giỏ hàng" icon="fas fa-cart-arrow-down icon" display={props.display}/>
            <button className="form__button" style={{position:"relative",bottom:"2px"}} onClick={dangxuat}><i class="fas fa-sign-out-alt icon"></i><br/>Đăng xuất</button>
            <button style={{marginLeft:"10px",background:"white",border:"none",position:"relative",bottom:"5px"}}><img onClick={displayThongtin} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBAQDg4ODhAODg4ODhAODg4ODhAODg4OFxMYGRcTFxcaICwkGxw1HRgXMTUkKC0vMjIyGSM4PzgxPCwxMjEBCwsLDw4PFxERGS8gICExMTEvMTExMS8xMS8xMTExLzEvLzExLzExMS8xLy8vMTEvMTExLy8xLy8xMzExMTEvL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAACAgEDAQQHBAgGAwAAAAABAgADEQQSITEFE0FRBiIyYXGBkQcUUqEjQmJykrHB8BUzQ4LC0SSi4v/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAuEQACAgEDAQYEBwEAAAAAAAAAAQIRAwQSITETIkFRYfBxscHhBTKBkaHR8RX/2gAMAwEAAhEDEQA/APCYjjxDE6x6SMxQjxFFoujkHmGYooKH3lZik5hmTaHcVmSTFmLMNCuQyYiYiYiYUityAmSYyZMdIplIDJMZijUVtgZMZijlbFFKkxkIwijijIRijhHGFFCOOQNCijjkDRMJUJCUdCGI4YmWixTDEWI4QUWrITiLEqBEFDrIQZJlkSSJKG7QkycyiJBhoO8MxZgZJMNCuQ8xSXdV9o7PjMP3urPt/k2P5QOUY9WkVSyRT5aRniMwtq6wcb/pkj8pddqt7LZ93j9IynFuk1+4naRbpMqEcUsIEmOEcQUI4owAjhCEgQjhIQWI4QkCEIQkIdKEcUpcTKphCEIu0sUycRGXJgoftCTEZURgobtCDIImQySIaG7QxMJz9XrdpK19ehfx+Amx2hdsr49p+B7h4n+/OcOZNTnce7EzZ9Q13YlsSTk5JPiZEJ3NJ6Kdo3UfeadHfZTjcrqnLr5ovVx8AZz20upiSs4cJ3NJ6KdpXUm+rRah6hn1ghBcD8Cnl/8AaDONYhVirAqykhlYEMCOoIPQwcMFG1p9aRw/rL+Y/wC50eMZHIPIPmJwZ0ezreCh8OV/qJ0dJqG5bJePQ1YMrvazcjhCdI2BDEBHCAIR4gBCEMQxKxDEgaFiGJWIYkCLEcMRyEN6EIQ7TkKYQhCLtHUwijhF2jqZERlGSYtDdoIyDLIkmChlM4naz5sC/hUfU/2Jz5tdonN1nxA+gEvs3Th7UD57pd9lmM811qXcD37R+YnFzSvJJ+pnl3pM9L9nno8NXqw9q5qqKYVhlXsYZGR4gLk4+HnPv6KFUKowqgKB5AdJ8r9CkuQU+rjvf/M1HdhkttNzHalZHs8BR4dDzyAfq0wTnukzcsXZxivPn3+nh4BPmv2tei6W0HtOhAt9WBqdox31XQO3my+flx4CfSpxddpS2qYMM6bVafuLwwypOWC4Pgcsoweu7joYqltdgcFPhn5mmfStixD78fUYnQ7c7NOmsesg7qL7dK/A5KHKsfipH8JnKU4IPlzN8JU1LyMP5Zc+B3I4HxhPRHUCMCAEoSBFGBGBGBIEWI8R4jkCLEMR4hiEgoSsQkIbcIQmpwPPKQQhCVuI+8IQhK3EO8RkmXJMRxG3kmSZRiMWhlM81rTm6398j6HE7lOlKaAOow12lsfPj62sqqx8NqH+KcHVf5tn77fzM9rdpS/ZGkfBGdJqKsc+0lq3LnHgVqs6/iHjPPZn338S7Crcvh9j6L2B2jpatW1Bup7zulpWsOhsqKFuozkcNj3T2c+CdsaLR5VVWip7q9Nbp7dKrhdNvf8ASrepffuVcEYTJ4OACJ7b0K1faqjS0vbptbpr0LFnsJ1OiAY4VmUHcdgztbnJAJXxyvHSs0dtvl0/b7n0Wc7tbtzSaPb95vqqZ/ZR3RXb3gE9PfOR6VavtFXro0b6TTVXZ3668ktp1AAYbcbfeGJPXoMbp8m0Olqe/GsdL9ZdbTm/VOW09ILFbu9c2LuKqMgjcCPHgQQx3yLLJT5RtenNYfUdp3ADFn3PV4ByMnfX1+DTwc9x2pplWntQVVLUm/T6etU3hH7vdc7qHwVGwBtp5GSPj4eXx/L78inP1T8/7Z6A9fnACA6fKUJ6c6IARgRiMSBDEeIYjAhCLEeI8RwhFiErEMSUQWISsQkohlzHIzGDOtLGeVsqOKOUSgNuCEISmUSbgiMcDKnEbeQYjKMRlTRZGR5bVf5tn77fzM+t+hQp1Oh0lV5Irt/Qkgj1LkyqAn9UkomM9SwHjz8o164ut/fJ+vP9Zvej3bNui1CWIxWsuouQZ2smeTj8QGcHqJ5rUQblJer+ZuwZFF89Gfcew+ya1oXRXq5t0bfdt6q2y5FANdgByADWUz4BgwycGd9dKtVZro21swwrEZPx564GeOk1r9fTTpW7QtJCV6fdayAEuq59XHidxOP3j5z5r259oeouZX0OivqdPWpvuZixQ9VFYG0g8ZGWzgeQxkUXLlGlz28N/U+rWurWmmwKQ9XeIG534Yh8fDKfxTka/TaLShrXDDjKoA+HbPCKVUksTgBepJE+dUennaK6nvNZoTe1Y2VJQ1lQpz7TKBvDE8cnPAIGAWB+jejnben7VoXUIlqHT3lXptG013qnUgHBGH49/hkCRwa5BHJ4XX8Hhu1dAqdl63VWI4txcpZlNa/eb23XKqEbiqju0DtycMMAAT5HPe/ah21Y2rPZqOfu+kCd4FG0XalwLLLGA/abp4EGeCl8E9tszZpJuo9EehToPl/KUIgJYE9QuDpoAIxARgQhACViGJQENBEBGBGBGBCQWIYlwxIQnEJWI5A0Yg0oGYVaZFM9BKB5VqjIDGJIMoTNNCFRxCEzSQBxGOKUSISZJlmSZRIvicjtTTlmLKMsWX55T/5mi+lYKGAJH62B04B+mD+RnZ1OqVW2qNzg+eFBweCfPBMo1EAsz7QBnFSgcDPi2fM+U4+oWHfK3z6e6NS6HpfRz7Qq+5q0HalJfT76ib6ydwCOrrvr/WXcoLYPIzwc4n0PtyzV2aZ9V2Vbo7VKrai2CtqdTUR6wLnGGyODuAO4ggEZnxvsrsanUX6eu/v1W537x6EN1yg1uy4TndghcgDJAOOZt+k3oVrNDpltXUVazs1mV6rKrgqMzjCsKmPLHn2N3A6zmPEr4L1lfN8n030NPaV4e7X/AHKnTpxXp9IlLl38Wd1LBVx4A5PuA54npH9oul0Wo1C9nVJqrrQgtu3bdKLEUqpG3mw7doOCBhVwZ8/9EvRnX9oWXV6N1pUIF1DPf3Q7tuMMq+synnopE3+0fR3S6HUV1Fm7QUV7rbCr0UWEtjFRVsnGGG7JUn4ECdmr5I8rrg8zqbbdVfbqLDmy53tdsYBd2J492T8gPdMKUZfGPVDAZ8xPTnSUgshN9boShtUJdW+043Cs7SARz7Z69Jiv7P25et0urrxZY9W8NUp9QF0cAjnxG4cdZvx48MqW7n1GjHG65MMYijAnaOkMCUIgJYEKCAEYEAJYEJAAjAgBKAhCLEeI8R4kCTiErEIaIcytpnWYUWZ1E9JkPLyMglCSJQmKZUyhHCEyyFHEY4jM8goRmtrLiigL7b8L+yPFv78SJtTmZ7y8nwVto/dXr+efynP1uV48drq+DViVsL9OEpH4gwYnqSfEfzmyo3044OVK89CenMu5NyMvmOPjNbs9+Cnln6g4M4JoOr6MXd1q+zbAW9XWaUNuOSA1yq4+hafT/tM7N0/+E6y5qwLK3ptR16pc1yoWA6Aned2B63j0BHyOu3uXLj9Rheo96kEgfMA/7p9g+1WzHYt4H+pdplHvHfI3/GQh5v7IOzaLaNe9qd5aLq6tzEjFOzds4xwTu3DowGDkTn/aHmztd0QZxTp6EQeqN2XIA8vbE6f2LWc9p1+A+6OPie9B/kJw/Sq0ntTtK7Ps2hK+ceua1QYPmAHYe9JAnBsCBn7ok1b37tixYtVk7CT4+riZVZqNS+zabaWFdm4B0LBdtlTDxGTYpHiD75k7NrRr03nFaB7reM/oakaywAeJ2I2B54mhQ7Pvtf27rbLX/fdiTIQ2O0NNWjI1Gfu96s1IZizUsuBZQxPJKllwfFWQ+c1hN6r16b6urIh1dI5/zKlJsA+NRs+ar5TSnb0mV5Ic9V79/odHTZN0afgMCUBACWBNhoGBGBACUBCEAJQEAJQENBFiPEoCGIxBYhKxCQlHMCzIBGBKAnblM8m2AlCICMTNOQpUIQmaTAOKEDKJDIx32bEd+u1ScTR7NTAOeoAGc5B8zmbHaDfosfjZV+Wcn8gZGn0ygBsesRkkZH8pwvxGd5Ix8l8/8NmJUh6q7/TQ/pHIUfsg9W+mZraRdlm0ZwHdeepGTNuxQbayOqhiT+zjGPqfyM1GJW7hSfXz1Azu5/rMzx1hU/N/xX9lpvWjj8vkeD/fun0z7T7z/gejz1tv0oPx7ixz+az5nncjcY9oY94yJ9J+0+iyzsbQPWjPVTZRbcyjIrrNDIGPuy458MyghyvsXfGq16/i09Dfw2MP+U4Pb1mdVqh4nV6hm9+LGVB8gD/GZ2/sc09v37U3hG7hdI1Lvj1BcbK2RM+J2q546cZ6jPne22A1esbqPvFx+jnP8pCC0HW8frHQa8L72+6W8fTM42ms7tjUx46oxP6vh/funX7LZu8chfWGm1m1dy5JOmtGRnjjOfgDjJ4nIswLkY+yQV92c5/v4TRCClhlLya+5bGF45S8qOt2fqRTfTcQzrXajMqAMzpn1kAJ8RkfOarUmtnpLI5odqd1dneVtjybAzxjwHIPEoqMgkZIIIzzgjoZs9ptvtW4nc2o01FzE4GbFzS5482oY/7pdoJVka80W6SXfo1QJYEQEoCdk6BQEoCICWBGQwwJQEQEsCMQQEeJQEMRqILEUyYhJRDnYjAhiE3uZ5EYjhCVSkAI4o5TJkFAwiMpkWRNTtEeoh8rB+asP6ibFWWA2gn4Kcz0HoZ2Sms1wSwnZQn3hq622WWOrDYoORgZ5JyPZx45HsdZcgam3RVVmptNqbmbVtcRtrNWXFftEruOQSvU9Z538RyJZ2vFJX7+FHQwYnKNny1kIZtwKthVwQQcDJ/5Tn3t+kY+RGPkBPcdvaSnS2G66oaq3UXuVV3JqrsrsU2Kytkd2yWV7PVJAPhgTwLbgWwq4ySMs3Qk45I54knlU9PBKLS9fNXfzHlHbxfv38jrLjAxwCM/Xme00n2jXPp9Ppk02lr/APGWtrb9SbEZUoO7ehQAA7eeTgHxngqXuIHqVqMYBLtz+UzVJsRF/WRAu4cHIXHBmYrPY9m+n1mhqNFWl0Hc1j9GlNjVopySxztO7ORyeePHPHkjqO+NlzAA3W22lQdwG92YgHxHM09DazZDszkAbS7FyBgZAzMiLaowBUwyxGWZTgsT5HzkIdLstf0px1NGrAGT1OmtH9ZydSuVJ/CQ3yzz+WZ0uyLLRqacV1MWfuwGuZFJsBQZbYcD1uuIuyNPa2p01NYJua+pFHKkPuBJPiAACT5AGb9JXZZU+lfRmvT04TTNZbkIB3LyAfaE2tQ4ZdMFZWC6Y52kNtdr7yQcdPV2HHv98+0HQaLve4LMbtu41/erd+MdSobifK/TBK17T1aVDCI9ScszksKU3ZLEnrkfKU/h0t+bp0Tf0+ocGLbkTs44lgSQJYnfR0CgJkAkqJYEcgwJQEFEoCOQAIwIwJYENEJxCVthCE5cqKEO88ttDEIRxdwu0UIQiOQu0JPdnLFg3qqGChtvXzIPXnp0+MCZSt7XTkY5mTVQlkjSk4/B03yvGn69DZpJRxyuUU/K+UuH4ePNdfU6vYXpHdomr7uqk1o7sauVZwy4K94Bxzz7J5nT1HpfSTV3ehFeyu5SV1DWMRZWymslgPULMGY4PKg4JwR5ImIzF/zNNHiEdvXo3zfndl71GTI7k7/b6UV2r2jbcTZdYXsbAGPVrVu7RCyr4ErWmT47ROfp69zY8Byfh5StY/rIvkCx93QD+svSoeqsoz1XGZk1dKeyKpJfdgfJtMcDPl78TCupB6KfeTgCRqhuYJxnG52HBA6AD6H6RcAYHAHQR9Npu070unzLcOLdy+hrlCmMdPMTYq1Xg/PvHWLM17E2kfhbp7j5RtVpNi3w6ePp79+jZsO3vLodBLgxwueBkt0wfDE7H+JWabWU9o6cVC22prSttZevc5eu7gMDy9bsMEYDAThaWzjaByOSfDHn8Z0tQxbSaVscV3arTk/wWIP/AGt/hMp0qUp7JdJKn9P5oXB+en0Z6fs30m01DV6strLtSwbvqO7ry9r/AOY7szBQMqu3YTgYBGBgeW1moN1+ovYFTfqbr9pYMyrZazBSfMAgceU11EsTqafRQwScottvz/xHQjjUXZQmQSBMizai0tZSiSsyKI6IMCWBEomRRHRBgRgRgSgI9EJxCXiENEONCEJj3HA2DhFCDcLsCSY5JMG4XYBiJgYxjxz8okpVyWQx2STJJgTNW+6wcLWxH4gQTj3CLOSirf8AY8Ua+pcC1ieOFGSDjpnr85u0aqsqMOgwAMFgDxMC64rx3Tj4kZmtqNVvbds2kYAzg+M4mROU3KmrYaNtH3bm/Gcr+4OF/wC/nGTNE6tv2fpF96bzH0nUx5scIqK8DZDJCKSN8RXplDjqvrD3keH0z9ZpDVN5j6ShrH930hlqMUouL6MseWDTTMmn1KKyncuDwckdDOrTfW2kvqVwx7/S2LgFhkC1GORwDh/pmcavUHfu25Of1cAdMTp6Pti2tiUpZlcbbKnw1VyfgdfEfmOoIPM5cIyhkTSbp+RiimpJpXR6O8UB2ZPuwV23hWTSMFUNnaDnoR85ytUUNtprCis3WFAmNoUsSAMcY+E021G6093RbXW2Cq2OrMhPUbuNwB6HAOOvPJzKJ2NPjS7ybd+ao6GGFc2/1LWZFkLMgmxGgpZkEhZYjohYEyqJCzIojohYEoCJRMiiWIhOIS8QjUCzgQiizOTuOXsKik5hmTcLsCKLMCZNwuwMySYEySZLGUQJkkxExEyFkYgTIJgTIJjWXRiMmAkiUIxeihLBkiWIRygZQMgS1hQTIssTGsyLGCZFmQTGsyCMgmQTIsxiZBHRDIsyLMYmRZYiMyLMiiQsyLLUQrEJUI5DzEMycx5nBszbAhETFmGxdgGImImImGxHACZJMCZJMgdgEyCYEyCYxYogTCEUYdIJQijEYhYliQJYhGGJYkCWsZDGRZYkLLEYKMizIsxrMgjIJkWZFmJZlWWIhkEyrMKzKsdEMqzIswrMqmWJkMkJOYR7IeZMIQnAEEYjCEIrJkmOEYVmMxGOEJDGYoQjIdBHCEJAgIQjoDKEsQhCEpZawhGQxkWWIQjDGRZkEUIyIZFlrHCOiGRZkWEI6IZBLEIS1EHCEISH/9k="
            style={{cursor:"pointer",width:"30px",borderRadius:"20px"}}/><br/>{props.username}</button>      
            </li>
            <li>
            <div onClick={hienthi} className="quanlydonhang">Quản lý đơn hàng <i class="fas fa-angle-down" style={{fontSize:"20px",position:"relative",top:"3px",left:"3px"}}></i></div>
            </li>
            {tt && <Displaythongtin hienthiformthongtin={hienthiformthongtin} name={props.name}/>}
            {formtt && <Displayformthongtin thoatform={thoatform}/>}
        </ul>
    }
    
    
}
function Displaythongtin(props){
    return<ul className="thongtincanhan">
        <li className="thongtincanhan__info">
        <table onClick={props.hienthiformthongtin}>
            <tr>
                <td rowSpan="2" style={{padding:"0px"}}>
                    <img src="data:image/jpeg;base64,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"
            style={{cursor:"pointer",width:"55px",borderRadius:"50px",left:"10px",position:"relative",top:"5px"}}/>
                </td>
                <td style={{position:"relative",left:"15px" ,top:"6px"}}>
                   <b>Name: {props.name}</b>
                </td>
            </tr>
            <tr><td style={{position:"relative",left:"15px" , bottom:"3px",color:"#86888a"}}>Sửa đổi thông tin tài khoản</td></tr>
        </table>
        </li>
        <li style={{borderTop:"1.5px solid #999999",position:"relative",right:"20px"}}></li>
        <li className="thongtincanhan__info" style={{height:"40px",paddingLeft:"10px",paddingTop:"5px",width:"299px"}}>
        <i class="far fa-envelope"  style={{fontSize:"25px",padding:"7px",borderRadius:"50px",background:"#e4e6eb"}}></i> <b style={{position:'relative',bottom:"4.5px",color:"#353535",fontWeight:"500"}}>Đóng góp ý kiến</b>
        </li>
        <li style={{borderTop:"1.5px solid #999999",position:"relative",right:"20px"}}></li>
        <li className="thongtincanhan__info" style={{height:"40px",paddingLeft:"10px",paddingTop:"5px",width:"299px"}}>
        <i class="fas fa-cog"  style={{fontSize:"25px",padding:"7px",borderRadius:"50px",background:"#e4e6eb"}}></i> <b style={{position:'relative',bottom:"4.5px",color:"#353535",fontWeight:"500"}}>Cài đặt và quyền riêng tư</b>
        </li>
        <li style={{borderTop:"1.5px solid #999999",position:"relative",right:"20px"}}></li>
        <li className="thongtincanhan__info" style={{height:"40px",paddingLeft:"10px",paddingTop:"5px",width:"299px"}}>
        <i class="far fa-question-circle" style={{fontSize:"25px",padding:"7px",borderRadius:"50px",background:"#e4e6eb"}}></i> <span style={{position:'relative',bottom:"4.5px",color:"#353535",fontWeight:"500"}}>Trợ giúp và hỗ trợ</span>
        </li>
        <li style={{borderTop:"1.5px solid #999999",position:"relative",right:"20px"}}></li>
        <li className="thongtincanhan__info" style={{height:"40px",paddingLeft:"10px",paddingTop:"5px",width:"299px"}}>
        <i class="far fa-moon" style={{fontSize:"25px",padding:"7px",borderRadius:"50px",background:"#e4e6eb"}}></i> <span style={{position:'relative',bottom:"4.5px",color:"#353535",fontWeight:"500"}}>Trợ giúp và hỗ trợ</span>
        </li>
    </ul>
}
function Displayformthongtin(props){
    const user=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const [state,setState]= useState({
        name:"",
        email:"",
        address:"",
        telephone:""
    });
    const dathang=()=>{
        if(state.name=="" || state.email=="" || state.address=="" || state.telephone==""){
            alert('Vui lòng nhập đủ thông tin!');
        }
        else{
            const u={
                name: state.name,
                email: state.email,
                address: state.address,
                telephone: state.telephone,
                username: user.username,
                password:user.password
            }
            
            fetch('https://book-python-vip.herokuapp.com/customer/'+user.id+'/',{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(u),
                redirect: 'follow'
            })
            
            alert("Thay đổi thông tin thành công!");
            dispatch(kiemtrauser({...user,name: state.name,
                email: state.email,
                address: state.address,
                telephone: state.telephone}))
            props.thoatform();
        }
    }
    const handleForm=(item)=>{
        setState({...state,[item.target.name]:item.target.value})
    }
    const dong=()=>{
        props.thoatform();
    }
    return <div className="formthanhtoan" id="formdathang" style={{top:"115px"}}>
    <table style={{marginLeft:"20px"}}>
    <tr><td colSpan="2"><h3>Thay đổi thông tin</h3></td><td ><span onClick={dong} style={{marginLeft:"60px",color:"#c92127",fontWeight:"500",cursor:"pointer"}}>Đóng</span></td></tr>
    <tr><td>Họ và tên</td><td><input type="text" name="name" value={state.name} className="thanhtoan__inputtext" onChange={handleForm}></input></td></tr>
    <tr><td>Email</td><td><input type="email" name="email" value={state.email} onChange={handleForm} className="thanhtoan__inputtext"></input></td></tr>
    <tr><td>Số điện thoại</td><td><input type="text" name="telephone" onChange={handleForm} value={state.telephone} className="thanhtoan__inputtext" ></input></td></tr>
    <tr><td>Quốc gia</td><td><select className="thanhtoan__inputtext" style={{width:"457px"}}>
                    <option>Việt Nam</option>
                    <option>Tiểu vương quốc PTIT</option>
                    <option>Thái Lan</option>
                    <option>Trung Quốc</option>
                </select></td></tr>
    <tr><td>Địa chỉ</td><td><input type="text" name="address" value={state.address} onChange={handleForm} className="thanhtoan__inputtext"></input></td></tr>
    </table>
    <button className="form__inputform-button2" style={{marginLeft:"275px" ,marginBottom:"30px"}} onClick={dathang} >Thay đổi thông tin</button>
</div>
}