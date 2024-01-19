import React from 'react'

function Footer() {
  return (
    <div>
         <footer>
      <div class="footer-column">
        <p>
          تمامی حقوق این سایت متعلق به دانشگاه بوده و هرگونه استفاده از منابع و
          طراحی های این سایت توسط نهادهای خارج از دانشگاه با پیگرد قانونی همراه
          خواهد بود
        </p>
      </div>
      <div class="footer-column">
        <p class="icons-desc">به ما در رسانه‌های اجتماعی بپیوندید</p>
        <div class="icon-links">
          <a href=""><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-google"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
      </div>
      <div class="footer-column">
        <h3>اطلاعات ما</h3>
        <ul>
          <li><a href="#">درباره ما</a></li>
          <li><a href="#">تماس با ما</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>خدمات مشتریان</h3>
        <ul>
          <li><a href="#">سوالات متداول</a></li>
          <li><a href="#">بازگرداندن کالا</a></li>
          <li><a href="#">شرایط استفاده</a></li>
          <li><a href="#">حریم شخصی</a></li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer