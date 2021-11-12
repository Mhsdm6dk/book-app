import React from "react";
export default function Foot(props) {
    return<>
    <div class="chan">
            <div class="chan__thongtinlienhe">
                <h3>Thông tin liên hệ:</h3>
                <ul class="chan__thongtinlienhe-set" style={{listStyle: "none",padding: "0px 5px 10px"}}>
                    <li class="chan__thongtinlienhe-diachi">
                        Địa chỉ: Nhà sách Lovely Book, 142 Trần Phú, Hà Đông, Hà Nội
                    </li>
                    <li class="chan__thongtinlienhe-dienthoai">
                        Điện thoại: 0966835110
                    </li>
                </ul>
            <div class="chan__thongtinlienhe-link">
            <a href="https://www.facebook.com/Guppy2022" class="chan__thongtinlienhe-link-messenger">
                <i class="fab fa-facebook-messenger" style={{color: "#01a6ff"}}></i> Messenger
            </a>
            <a href="https://twitter.com/?lang=vi" class="chan__thongtinlienhe-link-messenger">
                <i class="fab fa-twitter-square" style={{color: "#31c8f6",marginLeft:"40px"}}></i> Twitter
            </a>
        </div>
    </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4017456995075!2d105.7803845141223!3d20.97652709493711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d7da696f%3A0x108cd5d0fe8035a1!2zMTQyIFRy4bqnbiBQaMO6LCBQLiBN4buZIExhbywgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1632471203733!5m2!1svi!2s" width="900" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</>
}