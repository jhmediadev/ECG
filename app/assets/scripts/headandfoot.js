'use strict';

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
    <nav class="nav collapsible">
        <div class="block__logo">
            <a href="../index.html"><img class="logo" href="/"  src="/images/EclipseLogo.png"></a>
            <p class="slogan" >Central Florida's Construction Leader</p>
        </div>
        <span class="menu--span">
            <img class="menu--item" src="/images/hbgr-menu-icon.png" alt="">
        </span>

        <div class="collapsible__content collapsible--expanded">
            <ul class="list nav__list">
                <li class="nav__item"><a href="../index.html">HOME</a></li>
                    <div class="dropmenu">
                        <a class="list nav__item nav__item__services dropmenu" href="#">SERVICES</a>
                            <ul class="dropcontent">
                                <a href="#">DESIGN</a>
                                <a href="#">INDUSTRIAL BUILDINGS</a>
                                <a href="#">OFFICE BUILDINGS</a>
                                <a href="#">OFFICE BUILD OUTS</a>
                                <a href="#">RETAIL / STRIP CENTERS</a>
                                <a href="#">RESIDENTIAL PROJECTS</a>
                            </ul>
                    </div>   
                <li class="nav__item"><a href="#">PORTFOLIO</a></li>
                <li class="nav__item"><a href="#">ABOUT</a></li>
                <li class="nav__item"><a href="#">CONTACT US</a></li>
                <li class="nav__item"><a href="#">CAREERS</a></li>
            </ul>
        </div>
    </nav>

    `;

    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach((item) =>
      item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
      })
    );
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="grid grid--1x4">
        <a href="/"><img src="../../images/EclipseLogo.png"></a>

        <div class="footer-box">
          <div class="footer-link-list">  
            <ul>  
              <p class="">LINKS</p>
              <li><a class="footer-link-color" href="#">About Us</a></li>
              <li><a class="footer-link-color href="#">Portfolio</a></li>
              <li><a class="footer-link-color href="#">Our Process</a></li>
              <li><a class="footer-link-color href="#">Contact Us</a></li>
              <li><a class="footer-link-color href="#">Careers</a></li>
            </ul>
          </div>
        </div>    
        <div>
            <p>CONNECT WITH US ON SOCIAL MEDIA</p>
            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook icon" style="border: solid 1px #b7d4f1; border-radius: 100px; padding: 20px"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram icon" style="border: solid 1px #b7d4f1; border-radius: 100px; padding: 20px"></i></a>
            <a href="https://x.com/?lang=en" target="_blank"><i class="fa-brands fa-x-twitter icon" style="border: solid 1px #b7d4f1; border-radius: 100px; padding: 20px"></i></a>
            <a href="https://www.linkedin.com/"><i class="fab fa-linkedin icon" style="border: solid 1px #b7d4f1; border-radius: 100px; padding: 20px"></i></a>
        </div>
        <div>
            <p>CONTACT</p>
            <p><i class="fa-solid fa-phone" style="border: solid 1px #b7d4f1; border-radius: 100px; padding: 20px; margin-bottom: 20px"></i></p>
            <p><a href="tel:407-555-5555">407-555-5555</a></p>
        </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright &copy; 2024 Eclipse Construction Group. All Rights Reserved.</p>
      </div>
    </footer>

    
    `;

    $('img#backtotop').click(() => {
      $('html').animate({ scrollTop: 0 }, 300);
    });
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
