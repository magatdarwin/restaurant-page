export default function aboutPage(mainSection) {
  const title = document.createElement('h1');
  title.innerText = 'About';
  mainSection.appendChild(title);

  const infoList = document.createElement('ul');
  const contactNumber = document.createElement('li');
  contactNumber.innerText = 'Contact Number: 123-4567';
  const address = document.createElement('li');
  address.innerText = 'Address: 123 Barako Street, Brew Village';

  infoList.appendChild(contactNumber);
  infoList.appendChild(address);

  mainSection.appendChild(infoList);
}