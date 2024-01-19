import React from "react";
import "./styles.css";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

function Navbar() {
  const [showName, setShowName] = useState(false);
  const handleClick = () => {
    setShowName(true);
  };
  return (
    <div>
      <header>
        <nav>
          <div class="navbar-left">
            <div class="search-box">
              <input
                className="border border-black px-5 py-1 focus:outline-none"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <h1>Shoes Shop</h1>
          <div class="navbar-right">
            {showName && <Login open={showName} setOpen={setShowName} />}
            <button class="login-button" onClick={handleClick}>
              ورود
            </button>
            <Link to="/cart">
              <button className="">سبد خرید </button>
            </Link>
            <button>عضویت</button>
          </div>
        </nav>
        <div class="navlinks">
          <a href="#">برندها</a>
          <a href="#">تخفیف</a>
          <a href="#">ورزشی</a>
          <a href="#">بچه گانه</a>
          <a href="#">زنانه</a>
          <a href="#">مردانه</a>
        </div>
        <hr />
        <div class="box-container">
          <a href="#" class="box-link">
            <div class="box">
              <i class="fa-solid fa-lock"></i>
              <p>حریم خصوصی</p>
            </div>
          </a>
          <a href="#" class="box-link">
            <div class="box">
              <i class="fa fa-user"></i>
              <p>تقاضای همکاری</p>
            </div>
          </a>
          <a href="#" class="box-link">
            <div class="box">
              <i class="fa-solid fa-angle-left"></i>
              <p>شرایط بازگرداندن</p>
            </div>
          </a>
          <a href="#" class="box-link">
            <div class="box">
              <i class="fa-solid fa-question"></i>
              <p>راهنمای انتخاب سایز کفش</p>
            </div>
          </a>
          <a href="#" class="box-link">
            <div class="box">
              <i class="fa-solid fa-envelope"></i>

              <p>تماس با ما</p>
            </div>
          </a>
          <a href="#" class="box-link">
            <div class="box active">
              <i class="fa-regular fa-comment-dots"></i>
              <p>درباره ما</p>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
