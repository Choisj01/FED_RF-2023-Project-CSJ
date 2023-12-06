// 상단영역 컴포넌트
// GNB 데이터
import { Link, useNavigate } from "react-router-dom";

// 제이쿼리
import $ from "jquery";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useContext } from "react";

// export function TopArea() {
export const TopArea = memo(({ chgPageFn }) => {
  // 보통 props 등 전달변수만 쓰면 하위 속성명으로
  // 값을 전달하지만 중괄호{}를 사용하면 속성명을
  // 직접사용할 수 있다!

  // 컴포넌트 호출확인
  console.log("상단영역이양~!");

  // 리턴코드 ///////////////////////////
  return (
    <>
      <div className="top-bx">
        <div id="header">
          <header className="header_inner">
            <h1 id="logo">
              <Link to="/">
                <img src="./images/cotielogo-removebg.png" alt="로고" />
              </Link>
            </h1>
            <nav id="gnb">
              <ul className="top-menu gnb">
                <li className="m3">
                  <Link to="sub1">
                    <span>Brands</span>
                  </Link>

                  <div className="smenu">
                    <ul className="line-ani">
                      <li>
                        <Link to="sub1">
                          <span>PET SO CHIC</span>
                        </Link>
                      </li>
                      <li>
                        <a href="sub2_maxbone.html">
                          <span>MAXBONE</span>
                        </a>
                      </li>
                      <li>
                        <a href="sub3_milknpepper.html">
                          <span>MILK&amp;PEPPER</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m7">
                  <a href="sub5_outdoor.html">
                    <span>Outdoor</span>
                  </a>
                </li>
                <li className="m3">
                  <a href="sub6_indoor.html">
                    <span>Indoor</span>
                  </a>
                </li>
                <li>
                  <a href="sub7_cotielog.html">
                    <span>Cotielog</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Store</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="etc-menu nav">
              <div className="search">
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass">
                    <span className="ir"></span>
                  </i>
                </a>
              </div>
              <div className="buy-shop">
                <ul className="line-ani">
                  <li>
                    <a href="https://smartstore.naver.com/cotie_shop">
                      Buy Shop
                      <i
                        className="fa-solid fa-basket-shopping"
                        style={{ color: "#000000" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* 검색 모달창 */}
      <div className="modal" id="searchModal">
        <div className="modal-content">
          {/* 검색 폼 등의 내용 */}
          <form action="/search" method="GET">
            <input type="text" name="query" placeholder="검색어를 입력하세요" />
            <button type="submit">검색</button>
          </form>
        </div>
      </div>
    </>
  );
}); ////////////// TopArea 컴포넌트 ///////////
