import React, { useState } from "react";
import './admin.css';
export default function Themsanpham(props){
    const [hienthi,setHienthi]=useState(false);
    const them=()=>{
        setHienthi(true);
    }
    const dong=()=>{
        setHienthi(false);
    }
    return <div className="body__itembook-item" >
            <div className="body__itembook-item-box" style={{height:"300px",cursor:"pointer"}}>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4QDg8NEA8NDRIPDw8VDQ8NDg8NDw8RFR0aFhUTFRUYHCggGBolGxcTITEhJSkrLjouFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIGBwUE/8QAORABAAECAwMJBAgHAAAAAAAAAAECAwQGERYhcgUHEjM0U2KS8BMxQcFRUnGBk6GxsiIkdNHS4fH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKqgRVUUQU0+tdVgAAAAAAAAAAARNQIqqKI+KKafp9SuAAAAAAAAAAAAAjTf696QAAAAAAAAAAAABGm/8AVIAAAAAACs1evpWAAAAAAAAAAAAAFaqtFgAAAAAAAAAAAAAAAAABWqQTMpVpp+PyWAAAAAAAAAAABFUgTOiVKafjP6LgAAAAAAAAAAAAiqVYp3b/AL1wAAAAAAB4eauV7uFt0V2otzNVWk+0iao0+6Ye4ynOD1FrjB4+22M+rhvw6/8ANrctcpXMTh/a3IoirpTH8ETEaR9sy5c6NkXsccdQNCACKpRFP0rAAAAAAAAAAAAAAAAAAABEomCIBIADKc4PUWuNq2U5weotcYMG6NkXsccdTnLo2Rexxx1A0IAAAAABEkoiASAAAAAAAAAAAAAAPG5TzJh8PdmzX0ulTFMzpGsb41j9Xy7ZYTx+UGjGc2ywnj8ptlhPH5QaNlOcHqLXG+jbLCePyvDzXy7ZxNuii30taatZ1jQGXdGyL2OOOpzlrss5isYfD+yudLXpTO6NQbkZzbLCePym2WE8flBoxnNssJ4/KbZYTx+UGjHk8k5gsYm5Nq30tYomqdY03RMR84esAAAAAAAAAAAAAAAADm2d+33OC1+2Hguk8rZXtYm9VfqrrpmqKYmI938MRHyfHsRY7y4DBDe7EWO8uInJNjvK/wAgYKZIbynI9jvLjyMz5ft4W3RXRVVV0qtJ6QM2DU5dy1axNj2tVddM9KY0j3bgZYb3Yix3lw2Isd5cBghvdiLHeXCMkWO8ufkDyeb6P5u5/T1/uodAeLyLl23hbtV2mqqqZomnSfdpMxPye0AAACJkCqrRFOvv+eqKY37/AFK4AAAAAAAAAAAACOjv9e9IAynOD1FrjatlOcHqLXGDBujZF7HHHU5y6NkXsccdQNCAAAAAAAAiaf8AaQAAAAAAFZqWAAAAAAAAABlOcHqLXG1bKc4PUWuMGDdGyL2OOOpzl0bIvY446ge/VUsAAAAAAAAAAAAAAAAAAK1VAmZSrTT8VgAAAAHg5u5LvYm1RRaimqaatZ6VUU7vve8A5vsfjvqW/wAWj+7YZW5Pu4fD+yuxEVdKZ0iqKo0+2HsAAAAIqkCZ0SpFPxlcAAAAAAAAAAAAETPr4KxTrG/XeuAAAAAAAAAAAAAiZVinX/q4AAAAAAAAAAAAAAAAAAAImCIBIAAAAAAAAAAABqSiIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=="
                style={{height:"150px",marginTop:"30px"}} onClick={them}/>
                Thêm sản phẩm
                {hienthi &&  <Infosanpham themsanpham={props.themsanpham} dong={dong} category_name={props.category_name}/>}
            </div>
        </div>  
}
function Infosanpham(props){
    const [state,setState]= useState({
        "name":"",
        "image":"",
        "price":0,
        "describes":"",
        "inventory":0,
        "category_name":props.category_name
    });
    const handleState=(item)=>{
        setState({...state,[item.target.name]:item.target.value});
    }
    const them=()=>{
        if (state.name=="" || state.image=='' || state.price==0 || state.describes=="" || state.inventory==0 ){
            alert('Vui lòng nhập đủ thông tin!')
        }
        else{
            fetch('https://book-python-vip.herokuapp.com/item/',{
            method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                  },
            body:JSON.stringify({
                "name":state.name,
                "image":state.image,
                "price":state.price,
                "describes":state.describes,
                "inventory":state.inventory,
                "category":state.category_name
            })
        })
        props.themsanpham({
            "name":state.name,
            "image":state.image,
            "price":state.price,
            "describes":state.describes,
            "inventory":state.inventory,
            "category":state.category_name
        });
        props.dong();
        }
    }

    return<div className="additem__form" style={{top:"110px"}}>
        <h3>Thông tin sản phẩm</h3>
        <table>
        <tr>
            <td>Tên sách:</td><td><input className="additem__form-input" type="text" name="name" onChange={handleState}/></td>
        </tr>
        <tr>
            <td>Giá sách:</td><td><input className="additem__form-input" type="number" name="price" onChange={handleState}/></td>
        </tr>
        <tr>
            <td>image link:</td><td><input className="additem__form-input" type="text" name="image" onChange={handleState}/></td>
        </tr>
        <tr>
            <td>Số lượng:</td><td><input className="additem__form-input" type="number" name="inventory" onChange={handleState}/></td>
        </tr>
        <tr>
            <td>Phân loại:</td><td><input className="additem__form-input" type="text" name="category_name" value={props.category_name}/></td>
        </tr>
        <tr>
            <td>Mô tả:</td><td><textarea className="additem__form-textarea" name="describes" onChange={handleState}/></td>
        </tr>
        </table>
        <div className="additem__form-butoon" onClick={them}>Thêm sản phẩm</div>
        <div className="additem__form-butoon" onClick={props.dong}>Hủy</div>
    </div>
}