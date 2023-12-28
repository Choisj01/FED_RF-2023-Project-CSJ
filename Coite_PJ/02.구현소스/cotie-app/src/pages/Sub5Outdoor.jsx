import React from "react";

import '../css/sub5_outdoor.css';

export function Sub5Outdoor(){
    return(
        <>
             {/* <!-- 2. 아이템 리스트 박스 --> */}
        <div id="itemlists-wrap">
            <div className="item-list-inbox">
                <div className="list-title-bx">
                    <h2>Outdoor</h2>
                    <div className="item-cat-bx">
                       
                    </div>
                </div>

                <div className="product-list-bx">
                    <div className="list-grid-bx">
                        {/* <!-- 각 아이템 박스 랩핑 --> */}
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor1.jpg" alt="야자수 레인코드" />
                                    <img src="./images/outdoor/outdoor2.jpg" alt="야자수 레인코드" />
                                </div>
                                <div className="item-txt">
                                    <h3>MILK & PEPPER</h3>
                                    <h4>밀크 앤 페퍼 PALOMA Palmier Orange-Kaki 팔로마 오렌지 <br/> 야자수 레인코트</h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor3.jpg" alt="수잔 하트 하네스" />
                                    <img src="./images/outdoor/outdoor4.jpg" alt="수잔 하트 하네스" />
                                </div>
                                <div className="item-txt">
                                    <h3>MILK & PEPPER</h3>
                                    <h4>밀크 앤 페퍼 SUZANNE Harnais 수잔 하트 하네스</h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx third">
                                    <img src="./images/outdoor/outdoor5.jpg" alt="줄무늬 반다나 레드" />
                                    <img src="./images/outdoor/outdoor6.jpg" alt="줄무늬 반다나 레드" />
                                </div>
                                <div className="item-txt">
                                    <h3>MILK & PEPPER</h3>
                                    <h4>밀크 앤 페퍼 YAEL Bandana Rayé Rouge 야엘 줄무늬 반다나 레드</h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor8.jpg" alt="루키 후디" />
                                    <img src="./images/outdoor/outdoor7.jpg" alt="루키 후디" />
                                </div>
                                <div className="item-txt">
                                    <h3>MILK & PEPPER</h3>
                                    <h4>밀크 앤 페퍼 ROOKIE Hoody (루키 후디)</h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor9.jpg" alt="니트 점퍼" />
                                    <img src="./images/outdoor/outdoor10.jpg" alt="니트 점퍼" />
                                </div>
                                <div className="item-txt">
                                    <h3>MAXBONE</h3>
                                    <h4>맥스본_Curly Knit Jumper (컬리 니트 점퍼) – Peach (피치)</h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor11.png" alt="맥스본 점퍼 라벤더" />
                                    <img src="./images/outdoor/outdoor12.png" alt="맥스본 점퍼 라벤더" />
                                </div>
                                <div className="item-txt">
                                    <h3>MAXBONE</h3>
                                    <h4>
                                        맥스본 Christian Cowan x max-bone Jumper <br/> (크리스찬 코완 x 맥스본 점퍼) Lavender
                                        (라벤더)
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor13.jpg" alt="오렌지 텐저린" />
                                    <img src="./images/outdoor/outdoor14.jpg" alt="오렌지 텐저린" />
                                </div>
                                <div className="item-txt">
                                    <h3>PET SO CHIC</h3>
                                    <h4>펫 소 시크 Dog collar Orange Tangerine (오렌지 텐저린)</h4>
                                </div>
                            </a>
                        </div>

                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor15.jpg" alt="포레스트 그린" />
                                    <img src="./images/outdoor/outdoor16.jpg" alt="포레스트 그린" />
                                </div>
                                <div className="item-txt">
                                    <h3>PET SO CHIC</h3>
                                    <h4>펫 소 시크 Dog leash Forest Green (포레스트 그린)</h4>
                                </div>
                            </a>
                        </div>
                        <div className="item-wrap">
                            <a href="sub6_item_detail.html">
                                <div className="img-bx">
                                    <img src="./images/outdoor/outdoor17.jpg" alt="폭스 풉백 홀더" />
                                    <img src="./images/outdoor/outdoor18.jpg" alt="폭스 풉백 홀더" />
                                </div>
                                <div className="item-txt">
                                    <h3>MAXBONE</h3>
                                    <h4>맥스본 Fox Poop Bag Holder (폭스 풉백 홀더)</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* <!-- 탑버튼 --> */}
         <a href="#" id="go-top" title="Back to Top">
            <i className="fas fa-arrow-up"></i>
        </a>

        </>
    );
}