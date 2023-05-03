export default function homePage(mainSection) {
  const restaurantName = document.createElement('h1');

  restaurantName.innerText = 'Puro Kape';
  mainSection.appendChild(restaurantName);

  const description = document.createElement('p');
  description.innerText = 'Serving only the finest black coffee for that much needed kick-start!';

  mainSection.appendChild(description);
}