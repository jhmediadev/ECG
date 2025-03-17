import '../styles/styles.css';
import '../scripts/headandfoot.js';
import { handleScrollToTop, scrollToTop } from '../scripts/scrollToTop.js';

if (module.hot) {
  module.hot.accept();
}

handleScrollToTop();
scrollToTop();

window.onscroll = handleScrollToTop;
document.getElementById('myBtn').addEventListener('click', scrollToTop);
