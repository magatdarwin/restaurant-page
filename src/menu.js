export default function menuPage() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.id = 'container';

  const title = document.createElement('h1');
  title.innerText = 'Menu';
  container.appendChild(title);

  const menuList = document.createElement('ul');
  let menuItems = ['Americano', 'Long Black', 'Brewed Coffee', 'Cold Brew'];

  menuItems.forEach(item => {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    menuList.appendChild(listItem);
  });
  container.appendChild(menuList);
  
  content.appendChild(container);
} 