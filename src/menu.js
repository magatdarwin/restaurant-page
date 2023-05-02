export default function menuPage(mainSection) {
  const title = document.createElement('h1');
  title.innerText = 'Menu';
  mainSection.appendChild(title);

  const menuList = document.createElement('ul');
  let menuItems = ['Americano', 'Long Black', 'Brewed Coffee', 'Cold Brew'];

  menuItems.forEach(item => {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    menuList.appendChild(listItem);
  });
  mainSection.appendChild(menuList);
} 