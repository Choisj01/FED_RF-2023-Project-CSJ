// 하단영역 컴포넌트

import { memo } from "react";

export const FooterArea = memo(() => {
  // 컴포넌트 호출확인
  console.log("하단영역이양~!");

  // 리턴 코드 ///////////////////
  return (
    <>
      <div id="footer-move">
        <div className="footer-move">
          <img
            src="./images/main/footer-layer.svg"
            alt="하단영역 레이어이미지"
          />
        </div>
      </div>
      <div id="footer">
        <footer className="footer-inbox">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="sub4_aboutus.html">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="https://smartstore.naver.com/cotie_shop">
                  <span>Buy Shop</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="sns-bx">
            <ul>
              <li>
                <a href="https://www.facebook.com/cotieshop.co.kr/">
                  <span>facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cotie_shop/">
                  <span>instagram</span>
                </a>
              </li>
              <li>
                <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_ivZMs%2Fchat#login">
                  <span>kakao</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-info">
            <a href="#">
              <span>Cotieshop</span>
            </a>
            <div className="footer-info-txt">
              <p>
                주식회사 델핀 서울특별시 용산구 우사단로2길 1, 3층 대표 : 신승호
                사업자 등록번호 : 113-86-83830
              </p>
              <p>
                04413 서울특별시 용산구 우사단로2길 1 (보광동) TEL :
                02-2678-3096~7 FAX : 02-2678-3099
              </p>
            </div>
          </div>
          <div className="copy-right-bx">
            <p className="copyright">
              Copyright 2021. Cotieshop All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}); ///////// FooterArea 컴포넌트 /////////
