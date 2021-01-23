import headerHtml from './Shared/Header/header.html';
import footerHtml from './Shared/Footer/footer.html';
import headerComponent from './Shared/Header/headerComponent';
import './Shared/Footer/footer';

window.onload = function () {
    console.log('project loaded');
    document.getElementsByTagName("header")[0].innerHTML = headerHtml;
    document.getElementsByTagName("footer")[0].innerHTML = footerHtml;
    headerComponent.render();
}