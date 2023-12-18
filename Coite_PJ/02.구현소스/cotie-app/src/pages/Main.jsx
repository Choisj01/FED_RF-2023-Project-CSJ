// 메인페이지 메인컨텐츠
import React from "react";
import { Link } from "react-router-dom";

import "../css/main.css";

export function Main(){
    // cat 속성으로 메뉴분류 전달
    return(
        <> 
           
        {/* 2.메인 컨텐츠 : 메인비주얼 */}
        <div id="main-visual-wrap">
            <div className="main-visual">
                <div className="main-visual-txt">
                    <h2 className="main-visual-title">
                        Every Pet Deserves <br />
                        The Best
                    </h2>
                </div>
                <img src="./images/main/main_visual.gif" alt="메인 이미지" />
                <div className="main-visual-txt2">
                    <h3>가치있는 우리는 사랑받기 충분합니다.</h3>
                    <h3>값진 소재와 세련된 디자인을 함께 즐기고 만족할 수 있습니다.</h3>
                    <div id="btn-wrap">
                        <div className="ab-btn-bx">
                            <Link to="sub4">
                                <span>Discover more</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* 메인페이지 레이어 이미지 박스 */}
        <div className="free-items">
            <div className="layer-img-bx main-layer1">
                <img src="./images/main/layer-bib.png" alt="레이어 이미지1" />
            </div>
            <div className="layer-img-bx main-layer2">
                <img src="./images/main/layer-bone.png" alt="레이어 이미지1" />
            </div>
            <div className="layer-img-bx main-layer3">
                <img src="./images/main/layer-cloud.png" alt="레이어 이미지1" />
            </div>
        </div>
        {/* 메인페이지 레이어 이미지 박스 */}
        <div className="brand-free-items">
            <div className="layer-img-bx fish-layer">
                <img src="./images/main/layer-fish.png" alt="레이어 이미지1" />
            </div>
        </div>
        {/* 3. 컨텐츠 박스 - brands */}
        <div id="brands-wrap">
            <section className="title">
                <h2>Brands</h2>
                <div className="petsochic">
                    <div className="move-dog">
                        <img src="./images/main/brand-petsoshic.gif" alt="petsoshic-img" />
                    </div>
                    <div className="brands-text">
                        <div className="text-img">
                            <img src="./images/main/logo-petsoshic.svg" alt="" />
                        </div>
                        <div className="p-text">
                            <p>
                                프랑스 파리는 파리지앵의 본고장입니다.<br />
                                이곳에서 시작된 펫 소 시크는<br />
                                우아함, 세련됨, 고상함을 대표하고 흠잡을 데 없는<br />
                                스타일을 연출합니다.
                            </p>
                        </div>
                        <div id="btn-wrap">
                            <div className="ab-btn-bx">
                                <a href="sub1_petsochic.html" className="more-btn">
                                    <span>Discover more</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 동영상 영역 레이어 이미지 박스 */}
                <div className="vid-free-items">
                    <div className="layer-img-bx vid-layer1">
                        <img src="./images/main/pattern-grass-01.jpg" alt="레이어 이미지1" />
                    </div>
                    <div className="layer-img-bx vid-layer2">
                        <img src="./images/main/pattern-grass-02.jpg" alt="레이어 이미지1" />
                    </div>
                    <div className="layer-img-bx vid-layer3">
                        <img src="./images/main/pattern-footprint.png" alt="레이어 이미지1" />
                    </div>
                    <div className="layer-img-bx vid-layer4">
                        <img src="./images/main/pattern-grass-03.jpg" alt="레이어 이미지1" />
                    </div>
                    <div className="layer-img-bx vid-layer5">
                        <img src="./images/main/pattern-grass-05.jpg" alt="레이어 이미지1" />
                    </div>
                </div>
                {/* 컨텐츠 브랜드 동영상 */}
                <div id="main-brands-vid">
                    <div className="main-brands-vid col-12">
                        <iframe src="https://player.vimeo.com/video/579214369?autoplay=1&loop=1&autopause=0&muted=1" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </div>

        {/* 4. 컨텐츠 박스 - maxbone */}
        <div id="maxbone-wrap">
                {/* 맥스본 인트로 이미지+텍스트+버튼 박스 */}
                <div className="max-bone-intro">
                    <div className="mb-txt-bx">
                        <img src="./images/main/logo-maxbone.svg" alt="맥스본 로고" />
                        <p>
                            반려동물과 내가 함께하는 <br />
                            스타일의 최종 목적지는 맥스본입니다. <br />
                            현대적인 라이프 스타일을 반영하고 재미와 기능을 <br />
                            같이 생각합니다.
                        </p>
                        <div id="btn-wrap">
                            <div className="ab-btn-bx">
                                <a href="sub2_maxbone.html" className="more-btn">
                                    <span>Discover more</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-img-bx">
                        <img src="./images/main/brand-maxbone.gif" alt="맥스본 이미지" />
                    </div>
                </div>
                <div className="layer-img-toy show-ele">
                    <img src="./images/main/layer-toy.png" alt="레이어 이미지" />
                </div>
                {/* 맥스본 동영상 + 글자이미지 박스 */}
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
                        <iframe src="https://player.vimeo.com/video/579215391?autoplay=1&loop=1&autopause=0&muted=1" frameborder="0"></iframe>
                    </div>
                </div>
        </div>

        {/* 5. 컨텐츠 박스 - milknpepper */}
        <div id="milkpepper-wrap">
            <section>
                <div className="mp-layer-bx show-ele2">
                    <div className="layer-img-cathand">
                        <img src="./images/main/layer-hand.png" alt="레이어 이미지" />
                    </div>
                    <div className="layer-img-heart">
                        <img src="./images/main/layer-heart.png" alt="레이어 이미지" />
                    </div>
                </div>
                <div className="milkpepper-inbox">
                    <div className="mp-img-bx">
                        <img src="./images/main/brand-milkpepper-cat.jpg" alt="밀크앤페퍼 이미지" />
                    </div>
                    <div className="mp-txt-bx">
                        <img src="./images/main/logo-milkpepper.svg" alt="밀크앤페퍼 텍스트 이미지" />
                        <p>
                            일년 내내 우아할 수 있는 <br />
                            밀크&페퍼는 세련되고 독창적입니다. <br />
                            계절마다 제안하는 상상력과 영감은 최적의 <br />
                            스타일리쉬를 제공합니다.
                        </p>
                        <div id="btn-wrap">
                            <div className="ab-btn-bx">
                                <a href="sub3_milknpepper.html" className="more-btn">
                                    <span>Discover more</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* 6. 컨텐츠 박스 - newproduct */}
        <div id="newproduct-wrap">
            <div className="new-product-inbox">
                <div className="new-txt-bx">
                    <h2>New</h2>
                </div>
                {/* 스와이프 박스 */}
                <div className="new-product-list mySwiper">
                    <ul className="new-lists-bx swiper-wrapper">
                        <li className="swiper-slide">
                            <a href="sub6_item_detail.html">
                                <div className="imbx">
                                    <img src="./images/main/bird-toy.jpg" alt="앵무새장난감" />
                                    <img src="./images/main/bird-toy-front.jpg" alt="앵무새장난감" />
                                </div>
                                <div className="swiper-txt-bx">
                                    <h3>MILK & PEPPER</h3>
                                    <span>밀크 앤 페퍼 PERROQUET 앵무새 강아지 장난감</span>
                                </div>
                            </a>
                        </li>
                        <li className="swiper-slide">
                            <a href="sub6_item_detail.html">
                                <div className="imbx">
                                    <img src="./images/main/Bandana-red.jpg" alt="반다나레드" />
                                    <img src="./images/main/Bandana-red-front.jpg" alt="반다나레드" />
                                </div>
                                <div className="swiper-txt-bx">
                                    <h3>MILK & PEPPER</h3>
                                    <span>밀크 앤 페퍼 YAEL Bandana Rayé Rouge 야엘 줄무늬 반다나 <br />레드</span>
                                </div>
                            </a>
                        </li>
                        <li className="swiper-slide">
                            <a href="sub6_item_detail.html">
                                <div className="imbx">
                                    <img src="./images/main/rain-coat1.jpg" alt="야자수 레인코드" />
                                    <img src="./images/main/rain-coat2.jpg" alt="야자수 레인코드" />
                                </div>
                                <div className="swiper-txt-bx">
                                    <h3>MILK & PEPPER</h3>
                                    <span>밀크 앤 페퍼 PALOMA Palmier Orange-Kaki 팔로마 오렌지 <br />야자수 레인코트</span>
                                </div>
                            </a>
                        </li>
                        <li className="swiper-slide">
                            <a href="sub6_item_detail.html">
                                <div className="imbx">
                                    <img src="./images/main/SUZANNE-Harnais1.jpg" alt="수잔하트 하네스" />
                                    <img src="./images/main/SUZANNE-Harnais2.jpg" alt="수잔하트 하네스" />
                                </div>
                                <div className="swiper-txt-bx">
                                    <h3>MILK & PEPPER</h3>
                                    <span>밀크 앤 페퍼 SUZANNE Harnais 수잔 하트 하네스</span>
                                </div>
                            </a>
                        </li>
                        <li className="swiper-slide">
                            <a href="sub6_item_detail.html">
                                <div className="imbx">
                                    <img src="./images/main/JAYDEN-Harnais1.jpg" alt="제이든 그린 야자수 하네스" />
                                    <img src="./images/main/JAYDEN-Harnais2.jpg" alt="제이든 그린 야자수 하네스" />
                                </div>
                                <div className="swiper-txt-bx">
                                    <h3>MILK & PEPPER</h3>
                                    <span>밀크 앤 페퍼 JAYDEN Harnais set 제이든 그린 야자수 하네스<br />
                                        +리드줄 세트</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                {/* 스와이프 박스 끝 */}
            </div>
        </div>

        {/* 7. 흐르는 글자 박스 - flowfont */}
        <div id="flow-txt-bx">
            <div className="flow-txt txt-ani1">
                <ul>
                    <li>PET SO CHIC</li>
                    <li>MAXBONE</li>
                    <li>MILK &amp; PEPPER</li>
                </ul>
                <ul>
                    <li>PET SO CHIC</li>
                    <li>MAXBONE</li>
                    <li>MILK &amp; PEPPER</li>
                </ul>
            </div>
        </div>

        {/* 8. 뉴스 박스 - cotielog */}
        <div id="cotielog-wrap">
            <div className="cotielog-inbox">
                <div className="cotielog-title">
                    <h2>Cotielog</h2>
                </div>
                <div className="cotielog-cont">
                    <ul>
                        <li>
                            <a href="sub7_cotielog.html">
                                <img src="./images/main/review-puppy.jpg" alt="우수리뷰고객 캐리커쳐 이미지" />
                                <h4>2022.04 우수 리뷰 고객 캐리커쳐</h4>
                            </a>
                        </li>
                        <li>
                            <a href="sub7_cotielog.html">
                                <img src="./images/main/cotielog-02.jpg" alt="오프라인입점매장안내 이미지" />
                                <h4>오프라인 입점 매장 안내</h4>
                            </a>
                        </li>
                        <li>
                            <a href="sub7_cotielog.html">
                                <img src="./images/main/GDWEB.png" alt="GDWEB 디자인 어워즈 수상 이미지" />
                                <h4>2021 GDWEB 디자인 어워즈 GRAND PRIZE 수상🎉</h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="btn-wrap">
                    <div className="ab-btn-bx">
                        <a href="sub7_cotielog.html" className="more-btn">
                            <span>＋ more</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* 탑버튼 */}
        <a href="#" id="go-top" title="Back to Top">
            <i className="fas fa-arrow-up"></i>
        </a>
        </>
    )

} ////////////  Main 컴포넌트 ///////////