import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="coupon-banner">
        <div>지금 가입하고 최대 1만원 할인쿠폰 받아가세요</div>
      </div>

      <div id="banner">
        <div className="login">
          <ul>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>|</li>
            <li>
              <button onClick={() => navigate("/login")}>로그인</button>
            </li>
            <li>|</li>
            <li>
              <Link to="/help">고객센터</Link>
            </li>
          </ul>
        </div>

        <div id="middle-banner">
          <div id="middle-container">
            <div className="left-box">
              <Link to="/Home">
                <div className="logo" />
              </Link>
              <ul className="logo-right-name">
                <li className="purple">
                  <Link to="/home">마켓컬리</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="#">뷰티컬리</Link>
                </li>
              </ul>
            </div>

            <div className="search-box">
              <input type="text" placeholder="검색어를 입력해주세요" />
              <button type="submit">
                <img src="/img/search.svg" alt="검색" />
              </button>
            </div>

            <div className="login-icons">
              <Link to="#">
                <img src="/img/login1.svg" alt="로그인" />
              </Link>
              <Link to="#">
                <img src="/img/login2.svg" alt="회원가입" />
              </Link>
              <Link to="/cart">
                <img src="/img/login3.svg" alt="장바구니" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Navbar className="kurly-navbar">
        <Container className="kurly-container">
          <div className="navbar-center">
            <Nav className="center-menu">
              <img src="/img/category.svg" alt="카테고리" />
              <Nav.Link href="#">카테고리</Nav.Link>
              <Nav.Link href="#">신상품</Nav.Link>
              <Nav.Link href="#">베스트</Nav.Link>
              <Nav.Link href="#">알뜰쇼핑</Nav.Link>
              <Nav.Link href="#">특가/혜택</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
