import aboutPage from "./about.js";
import homePage from "./home.js";
import menuPage from "./menu.js";


function switchTab(event) {
  const currentPage = document.querySelector('#container');
  if (currentPage !== null) {
    currentPage.remove();
  }

  switch (event.target.id) {
    case 'home':
      homePage();
      break;
    case 'menu':
      menuPage();
      break;
    case 'about':
      aboutPage();
      break;
  }
}

function index() {
  const content = document.querySelector('#content');

  const topNav = document.createElement('div');
  topNav.classList.add('topnav');

  const homeLink = document.createElement('a');
  homeLink.innerText = 'Home';
  homeLink.href = '#home';
  homeLink.id = 'home';

  const menuLink = document.createElement('a');
  menuLink.innerText = 'Menu';
  menuLink.href = '#menu';
  menuLink.id = 'menu';

  const aboutLink = document.createElement('a');
  aboutLink.innerText = 'About';
  aboutLink.href = '#about';
  aboutLink.id = 'about';


  topNav.appendChild(homeLink);
  topNav.appendChild(menuLink);
  topNav.appendChild(aboutLink);
  
  content.appendChild(topNav);

  const tabs = document.querySelectorAll('.topnav > a');
  tabs.forEach(tab => tab.addEventListener('click', switchTab));

  homePage();
}

index();

// content.appendChild(homePage());

