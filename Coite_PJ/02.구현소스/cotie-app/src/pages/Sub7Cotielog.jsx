import React from "react";

import '../css/sub7_cotielog.css';

export function Sub7Cotielog(){
    return(
        <>
              {/* <!-- 2. cotielog-content 영역 --> */}
        <div className="container">
            <div className="sticky-box">
                <div className="sticky-inbx">
                    <h1>Cotielog</h1>
                    <ul className="category-bx">
                        <li>
                            <a href="">ALL</a>
                        </li>
                        <li>
                            <a href="">공지</a>
                        </li>
                        <li>
                            <a href="">뉴스</a>
                        </li>
                        <li>
                            <a href="">이벤트</a>
                        </li>
                        <li>
                            <a href="">스토리</a>
                        </li>
                    </ul>
                    {/* <!-- 이미지 박스-부모 --> */}
                    <div className="img-bx-wrap">
                        {/* <!-- 자식요소 박스 --> */}
                        <div className="img-bx">
                            <img src="./images/cotielog/cotielog-character-base.jpg" alt="강아지 레이어이미지" />
                            <img src="./images/cotielog/cotielog-character-hover.jpg" alt="강아지 레이어이미지" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollable-content">
                <div className="cont-bx">
                    <ul>
                        <li className="first">
                            <a href="">
                                <img src="./images/cotielog/cotielog1.jpg" alt="이벤트 공지" />
                            </a>
                            <h4>🎉오픈 1주년 감사 이벤트🎉</h4>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/cotielog/cotielog2.jpg" alt="이벤트 공지" />
                            </a>
                            <h4>2022.05 우수 리뷰 고객 캐리커쳐</h4>
                        </li>
                    </ul>
                    <ul>
                        <li className="first">
                            <a href="#">
                                <img src="./images/cotielog/cotielog3.jpg" alt="이벤트 공지" />
                            </a>
                            <h4>2022.04 우수 리뷰 고객 캐리커쳐</h4>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/cotielog/cotielog4.jpg" alt="이벤트 공지" />
                            </a>
                            <h4>2022년 6월 배송 안내</h4>
                        </li>
                    </ul>
                    <ul>
                        <li className="first">
                            <a href="#">
                                <img src="./images/cotielog/cotielog5.jpg" alt="이벤트 공지" />
                            </a>
                            <h4>[밀크 앤 페퍼] 불독 전용 사이즈 #2</h4>
                        </li>
                        <li>
                            <a href="">
                                <img src="./images/cotielog/cotielog6.jpg" alt="이벤트 공지" />
                            </a>
                            <h4>2022.03 우수 리뷰 고객 캐리커쳐</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- 더보기 버튼 박스 --> */}
        <div id="cotie-btn-wrap">
            <div className="ab-btn-bx">
                <a href="sub7_cotielog.html" className="more-btn">
                    <span>＋ more</span>
                </a>
            </div>
        </div>

        </>
    );
}