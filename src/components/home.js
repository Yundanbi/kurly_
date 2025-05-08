<<<<<<< HEAD
=======
// src/components/Home.jsx
>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import rawData from "../db/product.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import CartModal from "./CartModal";
import Footer from "./Footer";
<<<<<<< HEAD
import Board from "./Board";

=======
import Header from "./Header";
>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd
function Home() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(rawData);
  const [modalProduct, setModalProduct] = useState(null);
  const handleAddAndGoToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    navigate("/cart");
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

<<<<<<< HEAD
  const [input, setInput] = useState("");
  const filteredData = rawData.filter(
    (item) => item.name && item.name.toLowerCase().includes(input.toLowerCase())
  );

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
=======
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd
  const handleModalOpen = (item) => setModalProduct(item);
  const handleModalClose = () => setModalProduct(null);

  const handleAddToCart = (product, qty) => {
    dispatch(addToCart({ ...product, quantity: qty }));
    handleModalClose();
  };

  const todayItems = rawData.filter(
    (item) => item.id === "17" || item.id === "18"
  );

  return (
    <div className="App">
      {modalProduct && (
        <CartModal
          product={modalProduct}
          onClose={handleModalClose}
          onAdd={handleAddToCart}
        />
      )}
      <>
        {" "}
<<<<<<< HEAD
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
              <li>|</li>
              <li>
                <Nav.Link
                  onClick={() => {
                    navigate("/Board");
                  }}
                >
                  {" "}
                  게시판
                </Nav.Link>
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
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
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
                <button>
                  <span>샛별·하루</span> 배송안내
                </button>
              </Nav>
            </div>
          </Container>
        </Navbar>
=======
        <Header />
>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd
        <div className="slider">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <Carousel.Item key={num}>
                <img
                  className="d-block w-100"
                  src={`img/slider/${num}.${
                    num === 2 || num === 6 || num === 7 ? "png" : "jpg"
                  }`}
                  alt={`slide${num}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
<<<<<<< HEAD
        {input && (
          <section className="search-result-section easy-meal-section">
            <div className="section-title"></div>
            <div className="product-list">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <div className="product-card" key={item.id}>
                    <div className="badge">+10% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))
              ) : (
                <p style={{ padding: "20px" }}>검색 결과가 없습니다.</p>
              )}
            </div>
          </section>
        )}
        {!input && (
          <>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  🍖 간편하게 준비하는 가족 밥상{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>아이부터 어른까지 남녀노소 취향 저격!</p>
              </div>

              <div className="product-list">
                {data.slice(0, 4).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge">+10% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  🛒지금 가장 많이 담는 특가{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>꼭 담아야 할 추천 특가템 최대 60% OFF</p>
              </div>

              <div className="product-list">
                {data.slice(4, 8).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge">+10% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <div id="coupon">
              <Link to="#">
                <img src="/img/coupon/1.png"></img>
              </Link>
            </div>
            <div className="today-deal-wrapper">
              <div className="deal-left">
                <div className="timer">
                  <h2>🍀일일특가</h2>
                  <span>🕒</span> {formatTime(timeLeft)}
                </div>
                <p>망설이면 늦어요!</p>
              </div>

              <div className="deal-products">
                {todayItems.map((item) => (
                  <div className="deal-card" key={item.id}>
                    <span className="deal-badge">일일특가</span>

                    <div className="img-wrapper">
                      <Link to={`/goods/${item.id}`}>
                        {item.id === "17" && (
                          <img
                            src="img/special price.png"
                            alt="장보기 특가"
                            className="tag-badge-img"
                          />
                        )}

                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="product-img"
                        />
                      </Link>
                    </div>

                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="price">
                        <span className="discount">
                          {item.price.discountRate}%
                        </span>{" "}
                        {item.price.discounted} <del>{item.price.original}</del>
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div></div>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  놓치면 후회할 가격{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>꼭 담아야 할 추천 특가템 최대 60% OFF</p>
              </div>

              <div className="product-list">
                {data.slice(8, 12).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge">+20% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  🛒단골손님 장바구니 구경하기!{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>컬리에서 주 5회 이상 쇼핑하는 고객님의 선택은?</p>
              </div>

              <div className="product-list">
                {data.slice(12, 16).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge"></div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <div id="coupon">
              <Link to="#">
                <img src="/img/coupon/2.jpg"></img>
              </Link>
            </div>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  공유가 많은 상품 랭킹{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>최근 2주간 공유가 많았어요</p>
              </div>

              <div className="product-list">
                {data.slice(18, 22).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge">+10% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  ✌MZ세대 인기 BEST 상품{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>MZ세대라면 모를 수가 없는 컬리 인기템</p>
              </div>

              <div className="product-list">
                {data.slice(22, 26).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge">+8% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>
                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <div id="coupon">
              <Link to="#">
                <img src="/img/coupon/3.jpg"></img>
              </Link>
            </div>
            <section className="easy-meal-section">
              <div className="section-title">
                <h2>
                  1만원대 구매가 많은 인기상품{" "}
                  <Link to="/easy-meal">
                    <span>&gt;</span>
                  </Link>
                </h2>
                <p>최근 2주간 판매량이 가장 많았어요</p>
              </div>

              <div className="product-list">
                {data.slice(26, 30).map((item, i) => (
                  <div className="product-card" key={i}>
                    <div className="badge">+8% 쿠폰</div>
                    <Link to={`/goods/${item.id}`}>
                      <img src={item.thumbnail} alt={item.name} />
                    </Link>

                    <button
                      className="cart-btn"
                      onClick={() => handleModalOpen(item)}
                    >
                      🛒 담기
                    </button>
                    <Link to={`/goods/${item.id}`}>
                      <p className="title">{item.name}</p>
                      <p className="original-price">
                        <del>{item.price.original}</del>
                      </p>
                      <p className="discounted-price">
                        <span className="rate">{item.price.discountRate}%</span>{" "}
                        <strong>{item.price.discounted}원</strong>
                      </p>
                      <p className="review">💬 {item.reviews}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <Footer />
          </>
        )}
=======
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              🍖 간편하게 준비하는 가족 밥상{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>아이부터 어른까지 남녀노소 취향 저격!</p>
          </div>

          <div className="product-list">
            {data.slice(0, 4).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge">+10% 쿠폰</div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              🛒지금 가장 많이 담는 특가{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>꼭 담아야 할 추천 특가템 최대 60% OFF</p>
          </div>

          <div className="product-list">
            {data.slice(4, 8).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge">+10% 쿠폰</div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div id="coupon">
          <Link to="#">
            <img src="/img/coupon/1.png"></img>
          </Link>
        </div>
        <div className="today-deal-wrapper">
          <div className="deal-left">
            <div className="timer">
              <h2>🍀일일특가</h2>
              <span>🕒</span> {formatTime(timeLeft)}
            </div>
            <p>망설이면 늦어요!</p>
          </div>

          <div className="deal-products">
            {todayItems.map((item) => (
              <div className="deal-card" key={item.id}>
                <span className="deal-badge">일일특가</span>

                <div className="img-wrapper">
                  <Link to={`/goods/${item.id}`}>
                    {item.id === "17" && (
                      <img
                        src="img/special price.png"
                        alt="장보기 특가"
                        className="tag-badge-img"
                      />
                    )}

                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="product-img"
                    />
                  </Link>
                </div>

                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="price">
                    <span className="discount">{item.price.discountRate}%</span>{" "}
                    {item.price.discounted} <del>{item.price.original}</del>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              놓치면 후회할 가격{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>꼭 담아야 할 추천 특가템 최대 60% OFF</p>
          </div>

          <div className="product-list">
            {data.slice(8, 12).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge">+20% 쿠폰</div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              🛒단골손님 장바구니 구경하기!{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>컬리에서 주 5회 이상 쇼핑하는 고객님의 선택은?</p>
          </div>

          <div className="product-list">
            {data.slice(12, 16).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge"></div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div id="coupon">
          <Link to="#">
            <img src="/img/coupon/2.jpg"></img>
          </Link>
        </div>
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              공유가 많은 상품 랭킹{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>최근 2주간 공유가 많았어요</p>
          </div>

          <div className="product-list">
            {data.slice(18, 22).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge">+10% 쿠폰</div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              ✌MZ세대 인기 BEST 상품{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>MZ세대라면 모를 수가 없는 컬리 인기템</p>
          </div>

          <div className="product-list">
            {data.slice(22, 26).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge">+8% 쿠폰</div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div id="coupon">
          <Link to="#">
            <img src="/img/coupon/3.jpg"></img>
          </Link>
        </div>
        <section className="easy-meal-section">
          <div className="section-title">
            <h2>
              1만원대 구매가 많은 인기상품{" "}
              <Link to="/easy-meal">
                <span>&gt;</span>
              </Link>
            </h2>
            <p>최근 2주간 판매량이 가장 많았어요</p>
          </div>

          <div className="product-list">
            {data.slice(26, 30).map((item, i) => (
              <div className="product-card" key={i}>
                <div className="badge">+8% 쿠폰</div>
                <Link to={`/goods/${item.id}`}>
                  <img src={item.thumbnail} alt={item.name} />
                </Link>

                <button
                  className="cart-btn"
                  onClick={() => handleModalOpen(item)}
                >
                  🛒 담기
                </button>
                <Link to={`/goods/${item.id}`}>
                  <p className="title">{item.name}</p>
                  <p className="original-price">
                    <del>{item.price.original}</del>
                  </p>
                  <p className="discounted-price">
                    <span className="rate">{item.price.discountRate}%</span>{" "}
                    <strong>{item.price.discounted}원</strong>
                  </p>
                  <p className="review">💬 {item.reviews}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Footer />
>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd
      </>
    </div>
  );
}

export default Home;
