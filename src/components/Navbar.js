import React from "react";
import "./styles.css";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

function Navbar() {
  const [showName, setShowName] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const handleClick = () => {
    setShowName(true);
  };
  const onFormSubmit = (name) => {
    setSubmittedName(name);
  };
  return (
    <div>
      <header>
        <nav>
          <div className="navbar-left">
            <div className="search-box">
              <input
                className="border border-black px-5 py-1 focus:outline-none"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <h1>Shoes Shop</h1>
          <div className="navbar-right">
            {showName && (
              <Login
                open={showName}
                setOpen={setShowName}
                onFormSubmit={onFormSubmit}
              />
            )}
            <button className="login-button" onClick={handleClick}>
              ورود
            </button>
            {submittedName}
            <Link to="/cart">
              <button className="">سبد خرید </button>
            </Link>
            <button>عضویت</button>
          </div>
        </nav>
        <div className="navlinks">
          <a href="#">برندها</a>
          <a href="#">تخفیف</a>
          <a href="#">ورزشی</a>
          <a href="#">بچه گانه</a>
          <a href="#">زنانه</a>
          <a href="#">مردانه</a>
        </div>
        <hr />
        <div className="box-container">
          <a href="#" className="box-link">
            <div className="box">
              <i className="fa-solid fa-lock"></i>
              <p>حریم خصوصی</p>
            </div>
          </a>
          <a href="#" className="box-link">
            <div className="box">
              <i className="fa fa-user"></i>
              <p>تقاضای همکاری</p>
            </div>
          </a>
          <a href="#" className="box-link">
            <div className="box">
              <i className="fa-solid fa-angle-left"></i>
              <p>شرایط بازگرداندن</p>
            </div>
          </a>
          <a href="#" className="box-link">
            <div className="box">
              <i className="fa-solid fa-question"></i>
              <p>راهنمای انتخاب سایز کفش</p>
            </div>
          </a>
          <a href="#" className="box-link">
            <div className="box">
              <i className="fa-solid fa-envelope"></i>

              <p>تماس با ما</p>
            </div>
          </a>
          <a href="#" className="box-link">
            <div className="box active">
              <i className="fa-regular fa-comment-dots"></i>
              <p>درباره ما</p>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
