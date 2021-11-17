import React, { useEffect, useState } from "react";
import Head from './compo/head';
import Search from './compo/search';
import Danhmuc from './compo/danhmuc';
import Foot from "./compo/foot";
import "./App.css";
import { useSelector } from "react-redux";
import Headadmin from "./compo/admin/headamin";
function App(props) {
  const [state,setState]=useState({giohang:[]});
  const [opengiohang,setOpengiohang]=useState(false);
    const user = useSelector(state=>state.user);
    useEffect(()=>{
      setState(JSON.parse(window.localStorage.getItem('state')));
    },[])
    useEffect(()=>{
      window.localStorage.setItem('state',JSON.stringify(state));
    },[state])
  const themvagiohang =(item)=>{
    var a=[];
       if(state.giohang.length==0){
         a.push({
           id: item.id,
            ten: item.ten,
             gia:item.gia,
             image: item.image,
             soluong: 1,
         });
       }
       else{ 
          var kt=0;
         for(var i of state.giohang){
            if(i.ten!=item.ten){
              a.push({
                id: i.id,
                 ten: i.ten,
                  gia:i.gia,
                  image: i.image,
                  soluong: i.soluong,
              });
            }
            else{
               a.push({
                 id: i.id,
                  ten: item.ten,
                  gia:item.gia,
                  image: item.image,
                  soluong: i.soluong+1,
               })
               kt=1;
            }
         }
         if(kt==0){
            a.push({
              id: item.id,
               ten: item.ten,
                gia:item.gia,
                image: item.image,
                soluong: 1,
            });
         }
       }
      
    setState({...state,giohang:a});
    console.log(a);
    setOpengiohang({opengiohang:true});
}
const clear=()=>{
  setState({giohang:[]});
}
const xoa=(item)=>{
  const a=[];
  for(var i of state.giohang){
    if(i.ten!=item.ten){
      a.push(i);
    }
  }
  setState({...state,giohang:a});
}
const xoabot=(item)=>{
  const a=[];
  for(var i of state.giohang){
     if(i.ten==item.ten && i.soluong>1){
       a.push({
          ten: i.ten,
           gia:i.gia,
           image: i.image,
           soluong: i.soluong-1,
       });
     }
     else if(i.ten==item.ten && i.soluong==1){
        continue;
     }
     else{
        a.push(i);
     }
  }
  setState({...state,giohang:a});
}
if(user.admin!="yes"){
  return (
    <div>
        <header className="header">
            <div className="dau">
              <Head clear={clear} opengiohang={opengiohang} setOpengiohang={setOpengiohang} giohang={state.giohang} admin={user.admin} name={user.name} username={user.username} xoa={xoa} xoabot={xoabot} themvagiohang={themvagiohang}/>
              <Search />

            </div>
        </header>
        <body className="body">
          <Danhmuc themvagiohang={themvagiohang}/>
          
        </body>
        <footer>
          <Foot/>
        </footer>
    </div> 
  );
}
else{
  return (
    <div>
        <header className="header">
            <div className="dau">
              <Headadmin admin={user.admin} username={user.username}/>
              <Search />
            </div>
        </header>
        <body className="body">
          <Danhmuc admin={user.admin} themvagiohang={themvagiohang}/>
          
        </body>
        <footer>
          <Foot/>
        </footer>
    </div> 
  );
}
  
}

export default App;
