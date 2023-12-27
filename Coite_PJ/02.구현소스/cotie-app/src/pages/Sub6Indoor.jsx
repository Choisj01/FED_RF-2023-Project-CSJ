import React from "react";

import "../css/sub6_indoor.css";

export function Sub6Indoor() {
    return (
        <>
            {/* <!-- 2. 아이템 리스트 박스 --> */}
            <div id="itemlists-wrap">
                <div class="item-list-inbox">
                    <div class="list-title-bx">
                        <h2>Outdoor</h2>
                        <div class="item-cat-bx"></div>
                    </div>

                    <div class="product-list-bx">
                        <div class="list-grid-bx">
                            {/* <!-- 각 아이템 박스 랩핑 --> */}
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/indoor/indoor1.jpg" alt="강아지 장난감" />
                                        <img src="./images/indoor/indoor2.jpg" alt="강아지 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MILK & PEPPER</h3>
                                        <h4>밀크 앤 페퍼 PERROQUET 앵무새 강아지 장난감</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/main/bird-toy.jpg" alt="강아지 장난감" />
                                        <img src="./images/main/bird-toy-front.jpg" alt="강아지 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MILK & PEPPER</h3>
                                        <h4>밀크 앤 페퍼 PERROQUET 앵무새 강아지 장난감</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx third">
                                        <img src="./images/indoor/indoor3.jpg" alt="강아지 장난감" />
                                        <img src="./images/indoor/indoor4.jpg" alt="강아지 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MILK & PEPPER</h3>
                                        <h4>밀크 앤 페퍼 HOMARD Toy 랍스타 강아지 장난감</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/indoor/indoor5.jpg" alt="강아지 장난감" />
                                        <img src="./images/indoor/indoor6.jpg" alt="강아지 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MILK & PEPPER</h3>
                                        <h4>밀크 앤 페퍼 FLAMAND 플라밍고 강아지 장난감</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/indoor/indoor7.jpg" alt="강아지 장난감" />
                                        <img src="./images/indoor/indoor8.jpg" alt="강아지 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MILK & PEPPER</h3>
                                        <h4>밀크 앤 페퍼 CRAZY SPIDER Toy 크레이지 스파이더 장난감</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/indoor/indoor9.jpg" alt="쥐모양 장난감" />
                                        <img src="./images//indoor/indoor10.jpg" alt="쥐모양 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>PET SO CHIC</h3>
                                        <h4>펫 소 시크 Cat toy(토이) – Brown Mouse (쥐모양 장난감)</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/indoor/indoor11.jpg" alt="거북이 강아지 장난감" />
                                        <img src="./images/indoor/indoor12.jpg" alt="거북이 강아지 장난감" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MILK & PEPPER</h3>
                                        <h4>밀크 앤 페퍼 TORTUE Toy 거북이 강아지 장난감</h4>
                                    </div>
                                </a>
                            </div>

                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/indoor/indoor15.jpg" alt="사료 스쿱 & 클립" />
                                        <img src="./images/indoor/indoor16.jpg" alt="사료 스쿱 & 클립" />
                                    </div>
                                    <div class="item-txt">
                                        <h3>MAXBONE</h3>
                                        <h4>맥스본 Mb Eats Food Scoop & Bag Clip (사료 스쿱 & 클립)</h4>
                                    </div>
                                </a>
                            </div>
                            <div class="item-wrap">
                                <a href="sub6_item_detail.html">
                                    <div class="img-bx">
                                        <img src="./images/outdoor/outdoor17.jpg" alt="폭스 풉백 홀더" />
                                        <img src="./images/outdoor/outdoor18.jpg" alt="폭스 풉백 홀더" />
                                    </div>
                                    <div class="item-txt">
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
                <i class="fas fa-arrow-up"></i>
            </a>
        </>
    );
}
