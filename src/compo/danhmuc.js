import React, { memo,useState,useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router,Route, Switch,Link } from "react-router-dom";
import Adminbookshow from "./admin/adminbookshow";
import Bookshow from "./bookshow";
function Danhmuc(props){
    const [category,setCategory]= useState([]);
    // const [themdanhmuc,setThemdanhmuc]= useState(false);
    function xoa_dau(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
    // const displayThemdanhmuc=()=>{
    //     setThemdanhmuc(true);
    // }
    useEffect(()=>{
        fetch('https://book-python-vip.herokuapp.com/category/')
        .then(item=>item.json())
        .then(item=>{
            setCategory(item);
        })
    },[])
    // const themdm=(u)=>{
    //     setCategory([...category,u]);
    // }
    if(props.admin=="yes"){
        return <>
    <Router>
    <div className="body__danhmuc">
            <div className="body__danhmuc-form">
                <h3 style={{marginLeft:10,marginTop:12,paddingTop:10}}><i class="fas fa-list-ul"></i>{" "}Danh mục</h3>
                <ul className="body__danhmuc-list"> 
                {
                    category.map((item)=>{
                        return <Link to={"/"+xoa_dau(item.name)} style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">{item.name}<i class="fas fa-chevron-right"></i></li></Link>
                    })
                }
                {/* <li className="body__danhmuc-item" onClick={displayThemdanhmuc}>Thêm danh mục<i class="fas fa-chevron-right"></i></li> */}
                </ul>
            </div>
        </div>
        <Switch>
            {
                category.map((item)=>{
                    return <Route path={"/"+xoa_dau(item.name)}>
                    <Adminbookshow themvagiohang={props.themvagiohang} category_name={item.name}/>
                </Route>
                })
            }
            <Route path="/">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách bán chạy"}/>
            </Route>
        </Switch>
    </Router>
    {/* {themdanhmuc && <Themdanhmuc themdanhmuc={themdm}/>} */}
        </>
        
    }
    else{
        return <>
    <Router>
    <div className="body__danhmuc">
            <div className="body__danhmuc-form">
                <h3 style={{marginLeft:10,marginTop:12,paddingTop:10}}><i class="fas fa-list-ul"></i>{" "}Danh mục</h3>
                <ul className="body__danhmuc-list"> 
                    {
                        category.map((item)=>{
                            return <Link to={"/"+xoa_dau(item.name)} style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">{item.name}<i class="fas fa-chevron-right"></i></li></Link>
                        })
                    }
                </ul>
            </div>
        </div>
        <Switch>
        {
                category.map((item)=>{
                    return <Route path={"/"+xoa_dau(item.name)}>
                    <Bookshow themvagiohang={props.themvagiohang} category_name={item.name}/>
                </Route>
                })
            }
            <Route path="/">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách bán chạy"}/>
            </Route>
        </Switch>
    </Router>
        </>
    }
}
// function Themdanhmuc(props){
//     const [danhmuc,setDanhmuc]=useState("");
//     const handleValue=(item)=>{
//         setDanhmuc(item.target.value);
//     }
//     const themDanhmuc=()=>{
//         if(danhmuc==""){
//             alert('Vui lòng nhập danh mục!');
//         }
//         else{
//             console.log(danhmuc)
//             axios.post('https://book-python-vip.herokuapp.com/category/?format=api',danhmuc)
//             .then(props.themdanhmuc(danhmuc));
//         }
//     }
//     return <div style={{position:"fixed",backgroundColor:"white",height:"100px",width:"300px",zIndex:"10",left:"500px",top:"200px",border:"1px solid black",borderRadius:"4px"}}>
//         <p>Tên danh muc:</p>
//         <input type="text" onChange={handleValue}/>
//         <button onClick={themDanhmuc}>Gửi</button>
//     </div>
// }
export default memo(Danhmuc);