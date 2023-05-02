export default function aboutPage() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.id = 'container';

  const title = document.createElement('h1');
  title.innerText = 'About';
  container.appendChild(title);

  const infoList = document.createElement('ul');
  const contactNumber = document.createElement('li');
  contactNumber.innerText = 'Contact Number: 123-4567';
  const address = document.createElement('li');
  address.innerText = 'Address: 123 Barako Street, Brew Village';

  infoList.appendChild(contactNumber);
  infoList.appendChild(address);

  container.appendChild(infoList);
  content.appendChild(container);
}