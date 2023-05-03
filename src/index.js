import aboutPage from "./about.js";
import homePage from "./home.js";
import menuPage from "./menu.js";
import './style.css';

function switchTab(event, mainSection) {
  while (mainSection.firstChild) {
    mainSection.removeChild(mainSection.firstChild);
  }

  switch (event.target.id) {
    case 'home':
      homePage(mainSection);
      break;
    case 'menu':
      menuPage(mainSection);
      break;
    case 'about':
      aboutPage(mainSection);
      break;
  }
}

function index() {
  const header = document.createElement('header');
  const topNav = document.createElement('nav');
  topNav.id = 'topnav'; 

  const homeLink = document.createElement('a');
  homeLink.innerText = 'Home';
  homeLink.id = 'home';

  const menuLink = document.createElement('a');
  menuLink.innerText = 'Menu';
  menuLink.id = 'menu';

  const aboutLink = document.createElement('a');
  aboutLink.innerText = 'About';
  aboutLink.id = 'about';

  topNav.appendChild(homeLink);
  topNav.appendChild(menuLink);
  topNav.appendChild(aboutLink);
  
  header.appendChild(topNav)
  content.appendChild(header);

  const mainSection = document.createElement('main');
  mainSection.id = 'page';
  content.appendChild(mainSection);

  const tabs = document.querySelectorAll('#topnav > a');
  tabs.forEach(tab => tab.addEventListener('click', (event) => {
    switchTab(event, mainSection);
  }));

  homePage(mainSection);

  const footer = document.createElement('footer');
  footer.innerText = 'Background image by ';
  const attribution = document.createElement('a');
  attribution.innerText = 'Janko Ferlič';
  attribution.href = 'https://unsplash.com/@itfeelslikefilm';
  footer.appendChild(attribution);
  content.appendChild(footer);

}

index();