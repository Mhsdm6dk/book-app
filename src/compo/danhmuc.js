import React, { memo } from "react";
import {BrowserRouter as Router,Route, Switch,Link } from "react-router-dom";
import Adminbookshow from "./admin/adminbookshow";
import Bookshow from "./bookshow";
function Danhmuc(props){
    if(props.admin=="yes"){
        return <>
    <Router>
    <div className="body__danhmuc">
            <div className="body__danhmuc-form">
                <h3 style={{marginLeft:10,marginTop:12,paddingTop:10}}><i class="fas fa-list-ul"></i>{" "}Danh mục</h3>
                <ul className="body__danhmuc-list"> 
                <Link to="/sachbanchay" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho sách bán chạy<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachmoi" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho sách mới<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachgiaokhoa" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho sách giáo khoa<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachngoaingu" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho sách ngoại ngữ<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/truyenngan" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho truyện ngắn<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/tieuthuyet" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho tiểu thuyết<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachtieusu" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho sách tiểu sử<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachkinhte" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Kho sách kinh tế<i class="fas fa-chevron-right"></i></li></Link>
                </ul>
            </div>
        </div>
        <Switch>
            <Route path="/sachbanchay">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách bán chạy"}/>
            </Route>
             <Route path="/sachmoi">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách mới"}/>
            </Route>
            <Route path="/sachgiaokhoa">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách giáo khoa"}/>
            </Route>
            <Route path="/sachngoaingu">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách ngoại ngữ"}/>
            </Route>
            <Route path="/truyenngan">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Truyện ngắn"}/>
            </Route>
            <Route path="/tieuthuyet">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Tiểu thuyết"}/>
            </Route>
            <Route path="/sachtieusu">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách tiểu sử - Hồi kí"}/>
            </Route>
            <Route path="/sachkinhte">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách kinh tế"}/>
            </Route>
            <Route path="/">
                <Adminbookshow themvagiohang={props.themvagiohang} category_name={"Sách bán chạy"}/>
            </Route>
        </Switch>
    </Router>
        </>
        
    }
    else{
        return <>
    <Router>
    <div className="body__danhmuc">
            <div className="body__danhmuc-form">
                <h3 style={{marginLeft:10,marginTop:12,paddingTop:10}}><i class="fas fa-list-ul"></i>{" "}Danh mục</h3>
                <ul className="body__danhmuc-list"> 
                <Link to="/sachbanchay" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Sách bán chạy<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachmoi" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Sách mới<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachgiaokhoa" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Sách giáo khoa<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachngoaingu" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Sách ngoại ngữ<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/truyenngan" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Truyện ngắn<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/tieuthuyet" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Tiểu thuyết<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachtieusu" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Sách tiểu sử - Hồi ký<i class="fas fa-chevron-right"></i></li></Link>
                <Link to="/sachkinhte" style={{textDecoration:"none",color:"black"}}><li className="body__danhmuc-item">Sách kinh tế<i class="fas fa-chevron-right"></i></li></Link>
                </ul>
            </div>
        </div>
        <Switch>
            <Route path="/sachbanchay">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách bán chạy"}/>
            </Route>
             <Route path="/sachmoi">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách mới"}/>
            </Route>
            <Route path="/sachgiaokhoa">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách giáo khoa"}/>
            </Route>
            <Route path="/sachngoaingu">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách ngoại ngữ"}/>
            </Route>
            <Route path="/truyenngan">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Truyện ngắn"}/>
            </Route>
            <Route path="/tieuthuyet">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Tiểu thuyết"}/>
            </Route>
            <Route path="/sachtieusu">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách tiểu sử - Hồi kí"}/>
            </Route>
            <Route path="/sachkinhte">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách kinh tế"}/>
            </Route>
            <Route path="/">
                <Bookshow themvagiohang={props.themvagiohang} category_name={"Sách bán chạy"}/>
            </Route>
        </Switch>
    </Router>
        </>
    }
}
export default memo(Danhmuc);