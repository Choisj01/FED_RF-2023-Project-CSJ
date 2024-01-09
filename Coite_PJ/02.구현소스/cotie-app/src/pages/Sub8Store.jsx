import {React,Link} from "react";

import '../css/sub8_store.css';

export function Sub8Store(){

    return(
        <>
        
    {/* <!-- 2. stor소개 컨텐츠 영역 --> */}
    <div className="container">
        <div className="sticky-box">
            <div className="sticky-inbx">
                <h1>Store</h1>
                {/* <!-- 이미지 박스-부모 --> */}
                <div className="img-bx-wrap">
                    {/* <!-- 자식요소 박스 --> */}
                    <div className="img-bx">
                        <img src="./images/store/store-character-base.jpg" alt="강아지 레이어이미지" />
                        <img src="./images/store/store-character-hover.jpg" alt="강아지 레이어이미지" />
                    </div>
                </div>
            </div>
        </div>
        <div className="scrollable-content">
            <div className="store-cont-bx">
                <ul>
                    <li>
                        <img src="./images/store/store1.jpg" alt="스토어 이미지"/>
                        <h3>Cotieshop Showroom</h3>
                        <h4>Mon-Fri 09:30 -18:00 / Lunch Time 12:30 - 13:30 / Sat, Sun, Holiday is Off <br/>
                            서울특별시 용산구 우사단로 2길 1, 3층</h4>
                        <p>(02) 2678-3096~7 (방문 시 미리 전화 예약 주시기 바랍니다)</p>
                          {/* <!-- 더보기 버튼 박스 --> */}
                        <div id="store-btn-wrap">
                            <div className="st-btn-bx">
                                <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=108836459&q=%EB%8D%B8%ED%95%80&urlLevel=3&urlX=499310&urlY=1119805" className="more-btn">
                                    <span>Map View</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="./images/store/store2.jpg" alt="스토어 이미지"/>
                        <h3>펑키코코(FUNKYCOCO)</h3>
                        <h4>Mon-Fri 11:00-21:00 / Sat-Sun 11:00-20:00 <br/>
                            서울 강남구 봉은사로69길 11 라플빌딩 1층</h4>
                        <p>(02) 2678-3096~7 (방문 시 미리 전화 예약 주시기 바랍니다)</p>
                          {/* <!-- 더보기 버튼 박스 --> */}
                        <div id="store-btn-wrap">
                            <div className="st-btn-bx">
                                <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=1643751917&q=%ED%8E%91%ED%82%A4%EC%BD%94%EC%BD%94&urlLevel=3&urlX=510841&urlY=1114804" className="more-btn">
                                    <span>Map View</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="./images/store/store3.jpg" alt="스토어 이미지"/>
                        <h3>갤러리아 압구정점 - 펫 부티크</h3>
                        <h4>Mon-Thu 10:30 - 20:00 / Fri-Sun 10:30 - 20:30 / Holiday is Off <br/>
                            서울 강남구 압구정로 343 Galleria Luxury Hall West 1F</h4>
                        <p>(02) 3449-4265</p>
                          {/* <!-- 더보기 버튼 박스 --> */}
                        <div id="store-btn-wrap">
                            <div className="st-btn-bx">
                                <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=27347079&q=%ED%8E%AB%EB%B6%80%ED%8B%B0%ED%81%AC+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84%EB%B0%B1%ED%99%94%EC%A0%90+%EC%9B%A8%EC%8A%A4%ED%8A%B8%EC%A0%90&urlLevel=3&urlX=508862&urlY=1119163" className="more-btn">
                                    <span>Map View</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="./images/store/store4.jpg" alt="스토어 이미지"/>
                        <h3>롯데백화점 강남점 - ZIPSA</h3>
                        <h4>Mon-Thu 10:30 - 20:00 / Fri-Sun 10:30 - 20:30 / Holiday is Off <br/>
                            서울특별시 강남구 도곡로 401 (대치동 936-21) 롯데백화점 본관 1층</h4>
                        <p>02-531-2397</p>
                          {/* <!-- 더보기 버튼 박스 --> */}
                        <div id="store-btn-wrap">
                            <div className="st-btn-bx">
                                <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=7863067&q=%EB%A1%AF%EB%8D%B0%EB%B0%B1%ED%99%94%EC%A0%90+%EA%B0%95%EB%82%A8%EC%A0%90&urlLevel=3&urlX=511777&urlY=1110418" className="more-btn">
                                    <span>Map View</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="./images/store/store5.jpg" alt="스토어 이미지"/>
                        <h3>롯데백화점 동탄 - 위드랜드 동탄점</h3>
                        <h4>Mon-Fri 10:30-20:00 / Sat-Sun 10:30-20:30 <br/>
                            경기도 화성시 동탄역로 160(오산동) 롯데백화점 7층</h4>
                        <p>031-8036-2276</p>
                          {/* <!-- 더보기 버튼 박스 --> */}
                        <div id="store-btn-wrap">
                            <div className="st-btn-bx">
                                <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=1323091167&target=car&urlX=521732&urlY=1028230&urlLevel=3" className="more-btn">
                                    <span>Map View</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="./images/store/store6.jpg" alt="스토어 이미지"/>
                        <h3>코코스퀘어 의왕점</h3>
                        <h4>Mon-Sun 10:30 – 21:00 <br/>
                            경기 의왕시 바라산로 1 (학의동 1039) , 롯데 프리미엄 아울렛 타임빌라스 글라스빌 2F</h4>
                        <p>031-329-4012</p>
                          {/* <!-- 더보기 버튼 박스 --> */}
                        <div id="store-btn-wrap">
                            <div className="st-btn-bx">
                                <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=387343121&urlLevel=3&urlX=502126&urlY=1076906" className="more-btn">
                                    <span>Map View</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>



        </>
    );
}