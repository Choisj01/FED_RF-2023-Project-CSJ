import React from "react";

// css 불러오기
import "../css/sub4_aboutus.css";

export function Sub4AboutUs() {
    return (
        <>
            {/* <!-- 2. 컨텐츠1 : 꼬띠샵 소개  --> */}
            <div id="abu-visual-wrap">
                <div class="abu-inbox">
                    <div class="abu-title-bx">
                        <h1>About Us</h1>
                    </div>
                    {/* <!-- 타이틀 텍스트박스&이미지 박스 플렉스1 --> */}
                    <div class="flex-cont-bx">
                        {/* <!-- 텍스트박스1 --> */}
                        <div class="txt-bx abu-txt1">
                            <h3>
                                길지 않은 생애를 사는 <br />
                                반려동물에게 줄 수 있는 최고의 선물은 <br />
                                반려인과 함께하는 시간입니다.
                            </h3>
                            <p>
                                Cotieshop의 팀원들은 반려동물과 함께하는 시간을 <br />
                                더 가치있게 만들어주는 제품을 찾기 위해서 해외 직구, 대형 백화점, <br />
                                유럽의 작은 펫샵 등을 찾아 다니며 <br />
                                품질과 디자인을 비교하던 꼼꼼한 반려인이었습니다.
                            </p>
                        </div>
                        {/* <!-- 패턴 레이어 이미지 박스1 --> */}
                        <div class="layer-img1">
                            <img src="./images/main/pattern-grass-05.jpg" alt="패턴 레이어 이미지" />
                        </div>
                        {/* <!-- 타이틀 이미지1 --> */}
                        <div class="abu-visual-img-bx1">
                            <img src="./images/aboutus/intro-cotie.jpg" alt="강아지 아트 이미지" />
                        </div>
                    </div>

                    {/* <!-- 타이틀 텍스트박스&이미지 박스 플렉스2 --> */}
                    <div class="flex-cont-bx">
                        {/* <!-- 타이틀 이미지2 --> */}
                        <div class="abu-visual-img-bx2">
                            <img src="./images/aboutus/intro-product.jpg" alt="강아지 이미지" />
                        </div>
                        {/* <!-- 텍스트박스1 --> */}
                        <div class="txt-bx abu-txt2">
                            <h3>
                                이렇게 찾아낸 프리미엄 제품들과 <br />
                                훌륭한 브랜드들은 우리만 알고 있기에는 <br />
                                너무 아쉬웠습니다.
                            </h3>
                            <p>
                                그래서 우리는 반려동물의 시각에서 바라본 좋은 디자인을 <br />더 많은 반려인들과 나누고자
                                합니다.
                            </p>
                        </div>
                    </div>
                    {/* <!-- 패턴 레이어 이미지 박스2 --> */}
                    <div class="layer-img2">
                        <img src="./images/main/pattern-grass-01.jpg" alt="패턴 레이어 이미지" />
                    </div>
                    <div class="layer-img3">
                        <img src="./images/main/pattern-grass-02.jpg" alt="패턴 레이어 이미지" />
                    </div>
                    <div class="layer-img4">
                        <img src="./images/main/pattern-grass-03.jpg" alt="패턴 레이어 이미지" />
                    </div>
                </div>
            </div>

            {/* <!-- 3. 꼬띠샵 추구 가치 소개 영역  --> */}
            <div id="abu-cont-bx2-wrap">
                <div class="cont-bx2-inbox">
                    <div class="cont2-img-bx">
                        <img src="./images/aboutus/intro-hello.gif" alt="헬로 도그 움직이는 이미지" />
                    </div>
                    <div class="cont2-txt-bx">
                        <h1>
                            우리가 진짜를 구입하고 그 가치를 평생 느끼며 <br />
                            만족하고 즐기는 것처럼
                        </h1>
                        <p>
                            우리의 반려동물들도 값진 소재에 더해진 장인의 손길과 시간이 흘러도 <br />
                            세련된 디자인을 누리기에 충분합니다. <br />
                            Cotieshop은 우리의 반려동물에게 행복한 시간을 선물한다는 사명으로 <br />
                            오늘도 치열하게 고민하고 발로 뛰겠습니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- 4. 꼬띠샵 슬로건 이미지 박스  --> */}
            <div id="psc-brand-title">
                <div class="psc-title-inbox">
                    <h1>
                        Every Pet Deserves <br />
                        The Best
                    </h1>
                    <div class="psc-title-img-bx">
                        <img src="./images/aboutus/best-bog.jpg" alt="꼬띠샵 슬로건 이미지" />
                    </div>
                </div>
            </div>

            {/* <!-- 5. 꼬띠샵 마스코트 소개영역  --> */}
            <div id="abu-who-wrap">
                <div class="puppy-img-bx">
                    <img src="./images/aboutus/cotie-illust.gif" alt="강아지 일러스트" />
                </div>
                <div class="abu-who-inbox">
                    <div class="about-section__title">
                        <figure>
                            <img src="./images/aboutus/pattern-grass.svg" alt="잔디" />
                        </figure>
                        <h2 lang="en">Who’s cotie?</h2>
                        <div class="about-who__profile">
                            <b>꼬띠샵의 마스코트 꼬띠</b>

                            <ul class="profile-txt">
                                <li>
                                    <span>이름 : 꼬띠</span>
                                </li>
                                <li>
                                    <span>생년월일 : 2020년 7월 9일</span>
                                </li>
                                <li>
                                    <span>견종(품종) : 꼬똥 드 툴레아</span>
                                </li>
                                <li>
                                    <span>성별 : 여자</span>
                                </li>
                                <li>
                                    <span>몸무게 : 비밀</span>
                                </li>
                                <li>
                                    <span>좋아하는것 : 간식, 장난감, 물티슈</span>
                                </li>
                            </ul>
                            <ul class="profile-ani">
                                <li class="item1">
                                    <img src="./images/aboutus/cotie-life-01.jpg" alt="강아지 이미지1" />
                                </li>
                                <li class="item2">
                                    <img src="./images/aboutus/cotie-life-02.jpg" alt="강아지 이미지2" />
                                </li>
                                <li class="item3">
                                    <img src="./images/aboutus/cotie-life-03.jpg" alt="강아지 이미지3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--  6. 위치 안내 영역  --> */}
            <div id="cotie-info-wrap">
                <div class="layer-img5">
                    <img src="./images/aboutus/pattern-grass.svg" alt="잔디" />
                </div>
                <h1>Contact Us</h1>
                <div class="cotie-info-inbox">
                    <div class="map-bx">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3164.027936821439!2d126.99433217642915!3d37.53083872617334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sko!2skr!4v1701419703778!5m2!1sko!2skr"
                            style={{width:"600px",height:"450px",border:"none"}}
                            allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div class="size-relax info-flex-bx">
                        <div class="info-txt-bx1">
                            <h3>꼬띠샵 정보</h3>
                            <ul class="info-bx1">
                                <li>
                                    <b>대표번호</b>
                                    <p>Tel.(02) 2678-3096~7 Fax.(02) 2678-3099</p>
                                </li>
                                <li>
                                    <b>주소</b>
                                    <p>
                                        서울특별시 용산구 우사단로2길 1, 3층 (지번 : 서울특별시 용산구 보광동 274-17
                                        3층)
                                    </p>
                                </li>
                                <li>
                                    <b>영업시간</b>
                                    <p>09:30 - 18:00 (점심시간 12:30 -13:30)</p>
                                </li>
                            </ul>
                        </div>
                        <div class="info-txt-bx2">
                            <h3>교통안내</h3>
                            <ul class="info-bx2">
                                <li>
                                    <b>지하철</b>
                                    <p>6호선 이태원역</p>
                                </li>
                                <li>
                                    <b>자동차</b>
                                    <p>인근 공영주차장 이용 (유료)</p>
                                </li>
                                <li>
                                    <b>버스</b>
                                    <p>
                                        한국폴리텍1대학 (03-281, 03-282) <br />
                                        (간선) 400, 405, 421 <br />
                                        보광동삼거리 (03-542) <br />
                                        (마을) 용산01
                                    </p>
                                </li>
                            </ul>
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
