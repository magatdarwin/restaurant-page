export default function homePage(mainSection) {
  const restaurantName = document.createElement('h1');

  restaurantName.innerText = 'Puro Kape';
  mainSection.appendChild(restaurantName);

  const description = document.createElement('p');
  description.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima totam expedita blanditiis quia dignissimos reiciendis modi dolorum accusamus labore, harum et odit facere temporibus repellat consectetur, fugiat pariatur at.';

  mainSection.appendChild(description);
}