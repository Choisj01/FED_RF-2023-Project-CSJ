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
                        <Link to="sub2">
                          <span>MAXBONE</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="sub3">
                          <span>MILK&amp;PEPPER</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m7">
                  <Link to="sub5">
                    <span>Outdoor</span>
                  </Link>
                </li>
                <li className="m3">
                  <Link to="sub6">
                    <span>Indoor</span>
                  </Link>
                </li>
                <li>
                  <Link to="sub7">
                    <span>Cotielog</span>
                  </Link>
                </li>
                <li>
                  <Link to="sub8">
                    <span>Store</span>
                  </Link>
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
                    <Link to="https://smartstore.naver.com/cotie_shop">
                      Buy Shop
                      <i
                        className="fa-solid fa-basket-shopping"
                        style={{ color: "#000000" }}
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}); ////////////// TopArea 컴포넌트 ///////////
