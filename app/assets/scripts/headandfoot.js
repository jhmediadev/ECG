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
                        <a class="list nav__item dropmenu" href="#">SERVICES</a>
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
      <hr>
      <div class="">
        <div class="">
            <ul class="">  
              <li><a class="" href="">About Us</a></li>
              <li><a class="">Portfolio</a></li>
              <li><a class="">Our Process</a></li>
              <li><a class="">Contact Us</a></li>
              <li><a class="">Careers</a></li>
            </ul>  
          </div>  
        </div>
        <div class="">
        <div>
            <h3>Connect with us on Social Media</h3>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            
          </div>
        <div>
        <div class="">
        <div>
            <h3>Contact Us</h3>
            <a href="#"><i class="fa-solid fa-phone" style="border: solid 1px dodgerblue; border-radius: 100px; padding: 10px"></i></a>
            <p>407-555-5555</p>
          </div>
        <div>
          <p>Copyright &copy; 2024 Eclipse Construction Group. All Rights Reserved.</p>
        </div>
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
