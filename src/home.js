export default function homePage() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.id = 'container';
  const restaurantName = document.createElement('h1');

  restaurantName.innerText = 'Puro Kape';
  container.appendChild(restaurantName);

  const description = document.createElement('p');
  description.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima totam expedita blanditiis quia dignissimos reiciendis modi dolorum accusamus labore, harum et odit facere temporibus repellat consectetur, fugiat pariatur at.';

  container.appendChild(description);

  content.appendChild(container);
}