import React from "react";

// 폰트어썸
import { FaArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//css 적용
import "../css/sub1_petsochic.css";

export function Sub1Petsochic() {
  return (
    <>
      {/* <!-- 2. petsochic 브랜드 타이틀+이미지 영역 --> */}
      <div id="sub-petsochic-visual-wrap">
        <div className="psc-visual">
          <div className="psc-visual-txt">
            <h2 className="psc-visual-title">PET SO CHIC</h2>
          </div>
          <div className="psc-img-wrap">
            <img
              src="./images/sub1_petsochic/visual-petsoshic.jpg"
              alt="펫소시크 이미지"
            />
          </div>
        </div>
        {/* <!-- 펫소시크 레이어 이미지 박스 --> */}
        <div className="psc-free-items">
          <div className="layer-img-bx psc-layer1">
            <img
              src="./images/sub1_petsochic/layer-tower.gif"
              alt="펫소시크 타워 레이어 이미지"
            />
          </div>
          <div className="layer-img-bx psc-layer2">
            <img
              src="./images/sub1_petsochic/layer-neck-petsochic.gif"
              alt="펫소시크 목줄 레이어 이미지"
            />
          </div>
        </div>
      </div>

      {/* <!-- 3. 컨텐츠 박스 - petsochic 소개 --> */}
      <div id="brands-wrap">
        <div className="petsochic">
          <div className="move-dog">
            <img
              src="./images/main/brand-petsoshic.gif"
              alt="petsoshic-img"
            />
          </div>
          <div className="psc-brands-text">
            <div className="psc-text-img">
              <img
                src="./images/main/logo-petsoshic.svg"
                alt="펫 소 시크 로고이미지"
              />
            </div>
            <div className="psc-text">
              <h4>
                먹고, 쉬고, 산책하는 모든 순간들이 <br />한 폭의 예술이 됩니다.
              </h4>
              <p>
                펫 소 시크는 펫 업계에 새로운 패션과 품질의 기준이 되고자
                합니다. <br />
                아름다우면서도 고품질의 제품을 만들기 위해 세계적인 명품 브랜드
                출신의 <br />
                유명 아티스트들이 협력하고 있으며, 각 분야의 장인과 소비자와의
                소통을 통해 <br />
                최고의 품질과 가치를 전달하고, 최고의 스타일을 선물합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 4. 창업자 스토리 영역  --> */}
      <div id="psc-founder-story-wrap">
        <article className="psc-founder-inbox">
          <div className="psc-found-txt">
            <h4>창업자 스토리</h4>
            <p>
              반려동물을 사랑하는 파리지앵 Julien과 Raphaël은 <br />
              패션에 대한 남다른 열정으로 애견용품 사업에 뛰어들었습니다. <br />
              반려동물 업계에 새로운 패션의 기준이 되겠다는 결심으로 <br />
              2018년 프랑스 파리에서 시작하여 현재는 프랑스 대통령의 반려견이{" "}
              <br />
              사용할 만큼 인정받는 프리미엄 브랜드로 자리 잡게 되었습니다.
            </p>
          </div>
          <div className="hello-img-bx">
            <img
              src="./images/sub1_petsochic/intro-petsoshic-02.gif"
              alt="헬로강아지 이미지"
            />
          </div>
        </article>
      </div>

      {/* <!-- 5. 펫소시크 동영상 영역 --> */}
      <div id="psc-brand-vid">
        <div className="psc-vid-inbox">
          <iframe
            src="https://player.vimeo.com/video/579214369?autoplay=1&loop=1&autopause=0&muted=1"></iframe>
        </div>
      </div>

      {/* <!-- 6. 펫소시크 철학 소개 영역 --> */}
      <div id="psc-philosophy-wrap">
        <div className="philosophy-inbox psc-p1">
          <div className="phil-img-bx">
            <img
              src="./images/sub1_petsochic/intro-petsoshic-03.jpg"
              alt=""
            />
          </div>
          <div className="phil-txt-bx">
            <h4>
              유러피안 헤리티지의 세련된 감성 &amp; <br />
              수의사 콜라보레이션
            </h4>
            <p>
              펫 소 시크의 모든 제품은 ‘삶 속의 예술(Art de vivre)’이라는
              프랑스인들의 <br />
              생활 철학을 담고 있습니다. <br />
              세계적인 명품 가죽 브랜드 H사 출신의 아티스트가 직접 디자인하고,{" "}
              <br />
              프랑스 수의사팀의 꼼꼼한 승인을 받아, 반려동물의 움직임과 특성을
              고려한 설계로 <br />
              우리 아이들에게 안전성과 편안함을 제공합니다.
            </p>
          </div>
        </div>
        <div className="philosophy-inbox psc-p2">
          <div className="phil-img-bx phil-img1">
            <img
              src="./images/sub1_petsochic/intro-petsoshic-05.gif"
              alt=""
            />
          </div>
          <div className="phil-img-bx phil-img2">
            <img
              src="./images/sub1_petsochic/intro-petsoshic-04.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <!-- 7.펫소시크 브랜드 슬로건 영역 --> */}
      <div id="psc-brand-title">
        <div className="psc-title-inbox">
          <h1>
            PET SO CHIC WORKS <br />
            WITH FRENCH ARTIST
          </h1>
          <div className="psc-title-img-bx">
            <img
              src="./images/sub1_petsochic/note-petsoshic.jpg"
              alt="펫소시크 타이틀 이미지"
            />
          </div>
        </div>
      </div>

      {/* <!-- 8. MD's choice 영역 --> */}
      <div id="psc-newproduct-wrap">
        <div className="new-product-inbox">
          <div className="psc-new-txt-bx">
            <h2>MD's CHOICE</h2>
          </div>
          {/* <!-- 스와이프 박스 --> */}
          <div className="psc-new-product-list mySwiper">
            <ul className="new-lists-bx swiper-wrapper">
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic1.jpg"
                      alt="포레스트 그린 리드줄"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic1-1.jpg"
                      alt="포레스트 그린 리드줄"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>
                      펫 소 시크 Dog leash Forest Green (포레스트 그린)
                    </span>
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic2.jpg"
                      alt="패딩자켓(레드)"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic2-1.jpg"
                      alt="패딩자켓(레드)"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>펫 소 시크 Warm so chic(패딩 자켓) – Red(레드)</span>
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic3.jpg"
                      alt="미스테리 블랙 목줄"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic3-1.jpg"
                      alt="미스테리 블랙 목줄"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>
                      펫 소 시크 Dog collar Mystery Black (미스테리 블랙)
                    </span>
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic4.jpg"
                      alt="토프 리드줄"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic4-1.jpg"
                      alt="토프 리드줄"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>펫 소 시크 Dog leash Taupe (토프)</span>
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic5.jpg"
                      alt="고양이 반다나"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic5-1.jpg"
                      alt="고양이 반다나"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>
                      펫 소 시크 Cat collar(고양이 반다나) – Fat The Cat
                    </span>
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic6.jpg"
                      alt="포레스트 그린 리드줄"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic6-1.jpg"
                      alt="포레스트 그린 리드줄"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>
                      펫 소 시크 Dog leash Forest Green (포레스트 그린)
                    </span>
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="sub6_item_detail.html">
                  <div className="imbx">
                    <img
                      src="./images/sub1_petsochic/goods/petsochic7.jpg"
                      alt="오렌지 텐저린 리드줄"
                    />
                    <img
                      src="./images/sub1_petsochic/goods/petsochic7-1.jpg"
                      alt="오렌지 텐저린 리드줄"
                    />
                  </div>
                  <div className="swiper-txt-bx">
                    <h3>PET SO CHIC</h3>
                    <span>
                      펫 소 시크 Dog leash Orange Tangerine (오렌지 텐저린)
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

      {/* <!-- 9. 페이지 이동 박스 영역 : maxbone (패럴렉스 사용필요) --> */}
      <div id="move-page-wrap">
        <div className="psc-move-page-inbox">
          <img
            src="./images/sub1_petsochic/pagination-maxbone.jpg"
            alt="맥스본 이동페이지 이미지"
          />
          <a href="sub2_maxbone.html">
            <b>MAXBONE</b>
            <div className="psc-txt_inner">
              <span>BRAND VIEW</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
} //////////// Sub1Petsochic 컴포넌트 ////////////
