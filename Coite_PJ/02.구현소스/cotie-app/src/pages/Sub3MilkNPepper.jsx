import React from "react";

import '../css/sub3_milknpepper.css';

export function Sub3MilkNPepper() {
    return (
        <>
            {/* <!-- 2. 밀크앤페퍼 브랜드 타이틀+이미지 영역 --> */}
            <div id="sub-milkpepper-visual-wrap">
                <div className="mnp-visual">
                    <div className="mnp-visual-txt">
                        <h2 className="mnp-visual-title">MILK &amp; PEPPER</h2>
                    </div>
                    <div className="mp-img-wrap">
                        <img src="./images/sub3_milkpepper/visual-milknpepper.gif" alt="밀크앤페퍼 타이틀 이미지" />
                    </div>
                </div>
                {/* <!-- 밀크앤페퍼 레이어 이미지 박스 --> */}
                <div className="mnp-free-items">
                    <div className="layer-img-bx mnp-layer1">
                        <img src="./images/sub3_milkpepper/layer-line-color.png" alt="레이어 선 이미지" />
                    </div>
                    <div className="layer-img-bx mnp-layer2">
                        <img src="./images/sub3_milkpepper/layer-cat.png" alt="고양이 레이어 이미지" />
                    </div>
                    <div className="layer-img-bx mnp-layer3">
                        <img src="./images/sub3_milkpepper/layer-hand.png" alt="고양이 손 레이어 이미지" />
                        <div className="layer-img-bx mnp-layer4">
                            <img src="./images/sub3_milkpepper/layer-heart.png" alt="하트 레이어 이미지" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 3. 컨텐츠 박스 - 밀크앤페퍼 인트로소개 --> */}
            <div id="brands-wrap">
                <div className="mnp-title">
                    <div className="mnp-intro-img">
                        <img src="./images/sub3_milkpepper/intro-milknpepper-01.jpg" alt="밀크앤페퍼 이미지" />
                    </div>
                    <div className="brands-text">
                        <div className="mp-text-img">
                            <img src="./images/sub3_milkpepper/logo-milkpepper.svg" alt="밀크앤페퍼 로고이미지" />
                        </div>
                        <div className="mnp-text">
                            <h4>나의 반려동물을 위한 시크하고 트렌디한 패션 아이템</h4>
                            <p>
                                밀크 앤 페퍼는 실용성은 물론 반려견에게 가장 편안한 착용감을 선사하는 것을 목표로
                                합니다.
                                <br />
                                국내 브랜드에서 찾아보기 힘든 다양하고 체계적인 사이즈를 제공하며, <br />
                                다른 견종들과 체형이 다른 불독과 퍼그를 위한 컬렉션을 제작하는 등 세상 모든 반려견들이
                                <br />
                                입을 수 있는 대표 브랜드가 될 수 있도록 노력하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 4. 창업자 스토리 --> */}
            <div id="founder-story-wrap">
                <article className="founder-inbox">
                    <div className="found-txt">
                        <h4>창업자 스토리</h4>
                        <p>
                            2009년 프랑스 아동복 브랜드의 아트 디렉터인 <br />
                            Sylvain Brejon에 의해 시작된 밀크 앤 페퍼는 뛰어난 품질의 <br />
                            패브릭을 생산하는 것으로 유명한 프랑스 숄레에 자리잡고 있습니다. <br />
                            프렌치한 감성을 담아 시크한 반려견 패션 브랜드로써 성장한 <br />
                            밀크 앤 페퍼는 이제 전 세계적으로 인정받고 있습니다.
                        </p>
                    </div>
                    <div className="dog-img-bx">
                        <img src="./images/sub3_milkpepper/intro-milknpepper-02.jpg" alt="강아지 이미지" />
                    </div>
                </article>
                {/* <!-- 레이어 이미지 박스 --> */}
                <div className="mnp-free-items2">
                    <div className="layer-img-bx mnp-layer5">
                        <img src="./images/sub3_milkpepper/layer-circle-black.png" alt="원 레이어 이미지" />
                    </div>
                    <div className="layer-img-bx mnp-layer6">
                        <img src="./images/sub3_milkpepper/layer-circle-pink.png" alt="원 레이어 이미지" />
                    </div>
                    <div className="layer-img-bx mnp-layer7">
                        <img src="./images/sub3_milkpepper/pattern-grass-03.jpg" alt="패턴 레이어 이미지" />
                    </div>
                    <div className="layer-img-bx mnp-layer8">
                        <img src="./images/sub3_milkpepper/pattern-grass-01.jpg" alt="패턴 레이어 이미지" />
                    </div>
                    <div className="layer-img-bx mnp-layer9">
                        <img src="./images/sub3_milkpepper/pattern-grass-02.jpg" alt="패턴 레이어 이미지" />
                    </div>
                </div>
            </div>

            {/* <!-- 5. 밀크앤페퍼 동영상 박스 영역 --> */}
            <div id="mnp-vid-wrap">
                <div className="vid-inbox">
                    <iframe
                        src="https://player.vimeo.com/video/579216314?autoplay=1&loop=1&autopause=0&muted=1"
                        frameborder="0"
                    ></iframe>
                    {/* <!-- 동영상 박스 내 레이어 이미지 박스 --> */}
                    <div className="mnp-layer10">
                        <img src="./images/sub3_milkpepper/pattern-grass-03.jpg" alt="패턴 레이어 이미지" />
                    </div>
                    <div className="mnp-layer11">
                        <img src="./images/sub3_milkpepper/pattern-grass-04.jpg" alt="패턴 레이어 이미지" />
                    </div>
                </div>
            </div>

            {/* <!-- 6. 흐르는 글자박스영역 --> */}
            <div id="flow-txt-bx">
                <div className="flow-txt txt-ani1">
                    <ul>
                        <li>La marque préférée par vos chiens.</li>
                        <li>La marque préférée par vos chiens.</li>
                    </ul>
                    <ul>
                        <li>La marque préférée par vos chiens.</li>
                        <li>La marque préférée par vos chiens.</li>
                    </ul>
                </div>
            </div>

            {/* <!-- 7.밀크앤페퍼 특징 소개 영역 --> */}
            <div id="mnp-ft-intro-wrap">
                <div className="mnp-ft-intro-inbox">
                    <ul className="flex-bx ft-part1">
                        <li>
                            <img
                                src="./images/sub3_milkpepper/intro-milknpepper-03.gif"
                                alt="밀크앤페퍼 강아지 이미지"
                            />
                        </li>
                        <li>
                            <h3>유쾌한 디자인과 편안한 착용감</h3>
                            <p>
                                밀크 앤 페퍼는 매 시즌 패션과 인테리어 디자인에 <br />
                                영감을 받은 트렌디하고 유쾌한 디자인을 선보이고 있으며, <br />
                                반려견에게 가장 편안한 착용감을 선사하기 위해 <br />
                                최적의 사이즈를 제공합니다.
                            </p>
                        </li>
                    </ul>
                    <ul className="flex-bx ft-part2">
                        <li>
                            <p>
                                Des produits chics et tendances pour <br />
                                nos compagnons fidèles.
                            </p>
                        </li>
                        <li>
                            <img src="./images/sub3_milkpepper/intro-milknpepper-04.jpg" alt="인트로 이미지" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- 8.MD's CHOICE --> */}
            <div id="mp-newproduct-wrap">
                <div className="new-product-inbox">
                    <div className="mp-new-txt-bx">
                        <h2>MD's CHOICE</h2>
                    </div>
                    {/* <!-- 스와이프 박스 --> */}
                    <div className="new-product-list mySwiper">
                        <ul className="new-lists-bx swiper-wrapper">
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods1.jpg" alt="리드줄" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>밀크 앤 페퍼 THETA Leash NavyGolden 쎄타 리드줄 네이비골드</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods2.jpg" alt="스웨터" />
                                        <img src="./images/sub3_milkpepper/goods/goods2-1.jpg" alt="스웨터" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>
                                            밀크 앤 페퍼 [불독전용] ALISTER Sweater Off white <br />
                                            알리스터 스웨터 오프화이트
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods3.jpg" alt="강아지 보타이" />
                                        <img src="./images/sub3_milkpepper/goods/goods3-1.jpg" alt="강아지 보타이" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>밀크 앤 페퍼 Bow (강아지 보타이/ 나비넥타이)</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods4.jpg" alt="강아지 장난감" />
                                        <img src="./images/sub3_milkpepper/goods/goods4-1.jpg" alt="강아지 장난감" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>밀크 앤 페퍼 FLAMAND 플라밍고 강아지 장난감</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods5.jpg" alt="고양이 목줄" />
                                        <img src="./images/sub3_milkpepper/goods/goods5-1.jpg" alt="고양이 목줄" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>
                                            밀크 앤 페퍼 STARDUST Red Cat Collar <br />
                                            (스타더스트 레드 고양이 목줄)
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods6.jpg" alt="강아지 후디" />
                                        <img src="./images/sub3_milkpepper/goods/goods6-1.jpg" alt="강아지 후디" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>밀크 앤 페퍼 ROOKIE Hoody (루키 후디)</span>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="sub6_item_detail.html">
                                    <div className="imbx">
                                        <img src="./images/sub3_milkpepper/goods/goods7.jpg" alt="고양이 목줄" />
                                        <img src="./images/sub3_milkpepper/goods/goods7-1.jpg" alt="고양이 목줄" />
                                    </div>
                                    <div className="swiper-txt-bx">
                                        <h3>MILK & PEPPER</h3>
                                        <span>
                                            밀크 앤 페퍼 STARDUST Titan Cat Collar <br />
                                            (스타더스트 티탄 고양이 목줄)
                                        </span>
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
                    <img src="./images/sub3_milkpepper/pagination-petsochic.jpg" alt="펫소시크 이동페이지 이미지" />
                    <a href="sub1_petsochic.html">
                        <b>PET SO CHIC</b>
                        <div className="txt_inner">
                            <span>BRAND VIEW</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
