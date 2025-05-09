import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "./Footer";
import Header from "./Header";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("로그인 시도: " + id);
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h2 className="login-title">로그인</h2>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <div className="login-links">
          <span>아이디 찾기</span> | <span>비밀번호 찾기</span>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          로그인
        </button>
        <button className="signup-btn">회원가입</button>
      </div>
      <Footer />
    </>
  );
}

export default Login;
