import React from "react";

import "../css/sub2_maxbone.css";

export function Sub2Maxbone() {
    return (
        <>
            {/* <!-- 2. maxbone 브랜드 타이틀+이미지 영역 --> */}
            <div id="sub-maxbone-visual-wrap">
                <div className="maxbone-visual">
                    <div className="mb-visual-txt">
                        <h2 className="mb-visual-title">MAXBONE</h2>
                    </div>
                    <div className="mb-img-wrap">
                        <img src="./images/sub2_maxbone/visual-maxbone.gif" alt="맥스본 이미지" />
                    </div>
                </div>
                {/* <!-- 펫소시크 레이어 이미지 박스 --> */}
                <div className="mb-free-items">
                    <div className="mb-layer-img-bx mb-layer1">
                        <img src="./images/sub2_maxbone/layer-line-black.jpg" alt="레이어 선 이미지" />
                    </div>
                    <div className="mb-layer-img-bx mb-layer2">
                        <img src="./images/sub2_maxbone/layer-heart-broken.jpg" alt="맥스본 레이어 이미지" />
                    </div>
                    <div className="mb-layer-img-bx mb-layer3">
                        <img src="./images/sub2_maxbone/layer-loop.png" alt="맥스본 레이어 이미지" />
                    </div>
                </div>
            </div>

            {/* <!-- 3. 컨텐츠 박스 - maxbone 인트로소개 --> */}
            <div id="brands-wrap">
                <div className="maxbone-title">
                    <div className="mb-intro-img">
                        <img src="./images/sub2_maxbone/intro-maxbone-01.jpg" alt="맥스본 이미지" />
                    </div>
                    <div className="mb-brands-text">
                        <div className="mb-text-img">
                            <img src="./images/sub2_maxbone/logo-maxbone.svg" alt="맥스본 로고이미지" />
                        </div>
                        <div className="mb-text">
                            <h4>
                                모든 반려동물은 최상의 것을 <br />
                                누릴 자격이 있습니다.
                            </h4>
                            <p>
                                맥스본은 시간을 초월하는 아름다운 제품이 심플한 디자인과 <br />
                                불편함을 해소할 수 있는 기능성을 모두 갖출 때 탄생한다고 믿습니다. <br />
                                ‘Every pet deserves the best.’라는 모토를 가지고 만든 맥스본의 제품은 <br />
                                반려동물에게 최고의 선물이 되어 줍니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 4. 창업자 스토리 영역  --> */}
            <div id="mb-founder-story-wrap">
                <article className="mb-founder-inbox">
                    <div className="mb-found-txt">
                        <h4>창업자 스토리</h4>
                        <p>
                            패션 디자이너였던 Parisa Fowles-Pazdro는 <br />
                            반려견 “매킨토시”를 위한 강아지 침대를 구입하고자 했지만 품질, 디자인 <br />
                            그리고 그녀의 스타일을 모두 만족하는 제품을 찾지 못했습니다. <br />
                            기존 반려동물 용품에 한계를 느낀 그녀는 직접 “매킨토시”를 위한 제품을 <br />
                            디자인하기 시작했고, 2016년 미국 로스앤젤레스에서 <br />
                            맥스본이 공식 출시하게 되었습니다.
                        </p>
                    </div>
                    <div className="mb-dog-img-bx">
                        <img src="./images/sub2_maxbone/intro-maxbone-02.jpg" alt="니트입은 강아지 이미지" />
                    </div>
                </article>
            </div>

            {/* <!-- 5. 맥스본 동영상 + 글자이미지 박스 --> */}
            <div id="mb-vid-wrap">
                <div id="mb-vid-bx">
                    <div className="show-txt image-container">
                        <div className="delayed-image image1">
                            <img src="./images/main/layer-maxbone-text.jpg" alt="맥스본 텍스트 이미지" />
                        </div>
                        <div className="delayed-image image2">
                            <img src="./images/main/layer-maxbone-text.jpg" alt="맥스본 텍스트 이미지" />
                        </div>
                        <div className="delayed-image image3">
                            <img src="./images/main/layer-maxbone-text.jpg" alt="맥스본 텍스트 이미지" />
                        </div>
                    </div>
                    <div className="mb-vid-bx">
                        <iframe
                            src="https://player.vimeo.com/video/579215391?autoplay=1&loop=1&autopause=0&muted=1"></iframe>
                    </div>
                </div>
                {/* <!-- 레이어 이미지 박스 --> */}
                <div className="mb-layer-img-bx mb-layer4">
                    <img src="./images/sub2_maxbone/pattern-feed.jpg" alt="패턴 레이어 이미지" />
                </div>
            </div>

            {/* <!-- 6. 콜라보 소개 --> */}
            <div id="colab-intro-wrap">
                <div className="colab-inbox">
                    <div className="colab-img-bx">
                        <img src="./images/sub2_maxbone/intro-maxbone-03.jpg" alt="맥스본 이미지" />
                    </div>
                    <div className="colab-txt-bx">
                        <h3>매력적인 콜라보레이션</h3>
                        <p>
                            맥스본은 유명 브랜드들과 꾸준한 콜라보레이션을 이어가고 있습니다. <br />
                            디즈니의 미키, 겨울왕국, 그리고 디자이너 Christian Cowan 등과 파트너쉽을 맺어 <br />
                            한정판 제품을 출시하였으며, 현대적인 감성에 트렌디함을 더한 <br />
                            컬렉션을 선보이기 위해 노력하고 있습니다.
                        </p>
                    </div>
                </div>
                <div className=" mb-layer-img-bx mb-layer5">
                    <img src="./images/sub2_maxbone/intro-maxbone-05.gif" alt=" 3단 레이어 이미지" />
                </div>
            </div>

            {/* <!-- 7. 맥스본 매거진 컬렉션 박스 --> */}
            <div id="magazine-wrap">
                <div className="mb-magazin-inbox">
                    <div className="cont-bx">
                        <ul className="cont-flex1">
                            <li>
                                <a href="sub7_cotielog.html">
                                    <img
                                        src="./images/sub2_maxbone/maxbone-magazin-vogue.jpg"
                                        alt="맥스본 매거진 이미지"
                                    />
                                    <h4>
                                        스타일을 포기하지 않으면서도 재밌고 <br />
                                        기능적인 제품
                                    </h4>
                                </a>
                            </li>
                            <li>
                                <a href="sub7_cotielog.html">
                                    <img
                                        src="./images/sub2_maxbone/maxbone-magazin-goop.jpg"
                                        alt="맥스본 매거진 이미지"
                                    />
                                    <h4>현존하는 최고의 강아지 우비</h4>
                                </a>
                            </li>
                        </ul>
                        <ul className="cont-flex2">
                            <li>
                                <a href="sub7_cotielog.html">
                                    <img
                                        src="./images/sub2_maxbone/maxbone-magazin-refinery29.jpg"
                                        alt="맥스본 매거진 이미지"
                                    />
                                    <h4>스타일리쉬한 사람들이 열광할 선물</h4>
                                </a>
                            </li>
                            <li>
                                <a href="sub7_cotielog.html">
                                    <img
                                        src="./images/sub2_maxbone/maxbone-magazin-forbes.jpg"
                                        alt="맥스본 매거진 이미지"
                                    />
                                    <h4>
                                        Maxbone은 유니크한 디자인으로 복잡한 <br />펫 시장을 정면돌파한다
                                    </h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- 8.MD's CHOICE --> */}
            <div id="newproduct-wrap">
                <div className="new-product-inbox">
                    <div className="new-txt-bx">
                        <h2>MD's CHOICE</h2>
                    </div>
                    {/* <!-- 스와이프 박스 --> */}
                    <div className="new-product-list mySwiper">
                        <ul className="new-lists-bx swiper-wrapper">
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods7.jpg" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods7-1.jpg" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>맥스본 Weather Ready Parka teal 웨더 레디 파카 청록</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods6.jpg" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods6-1.jpg" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>맥스본 Weather Ready Parka teal 웨더 레디 파카 핑크</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods4.jpg" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods4-1.jpg" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>맥스본 Curly Knit Jumper (컬리 니트 점퍼) Peach (피치)</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods3.jpg" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods3-1.jpg" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>맥스본 Curly Knit Jumper (컬리 니트 점퍼) Sand (샌드)</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods2.png" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods2-1.png" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>
                                            맥스본 Christian Cowan x max-bone Jumper
                                            <br />
                                            (크리스찬 코완 x 맥스본 점퍼) Lavender (라벤더)
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods1.png" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods1-1.png" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>
                                            맥스본 Christian Cowan x max-bone Jumper
                                            <br />
                                            (크리스찬 코완 x 맥스본 점퍼) Light Blue (라이트 블루)
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub2_maxbone/goods/goods5.jpg" alt="상품이미지" />
                                        <img src="./images/sub2_maxbone/goods/goods5-1.jpg" alt="상품이미지" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MAXBONE</h3>
                                        <span>맥스본 Fox Poop Bag Holder (폭스 풉백 홀더)</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                    {/* <!-- 스와이프 박스 끝 --> */}
                </div>
            </div>
            {/* <!-- MD's CHOICE 영역 끝 --> */}

            {/* <!-- 탑버튼 --> */}
            <a href="#" id="go-top" title="Back to Top">
                <i className="fas fa-arrow-up"></i>
            </a>

            {/* <!-- 9. 페이지 이동 박스 영역 : 밀크앤페퍼 (패럴렉스 사용필요) --> */}
            <div id="move-page-wrap">
                <div className="move-page-inbox">
                    <img src="./images/sub2_maxbone/pagination-milknpepper.jpg" alt="밀크앤페퍼 이동페이지 이미지" />
                    <a href="sub3_milknpepper.html">
                        <b>MILK &amp; PEPPER</b>
                        <div className="txt_inner">
                            <span>BRAND VIEW</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
