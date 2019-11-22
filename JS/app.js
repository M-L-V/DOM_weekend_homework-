document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const foodListItem = createFoodListItem(event.target);
  const foodList = document.querySelector('#favourite-foods');
  foodList.appendChild(foodListItem);

  event.target.reset();
}

const createFoodListItem = function (form) {
  const foodListItem = document.createElement('li');
  foodListItem.classList.add('food-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  foodListItem.appendChild(name);


  const country = document.createElement('h3');
  country.textContent = form.country.value;
  foodListItem.appendChild(country);


  const type = document.createElement('h3');
  type.textContent = form.type.value;
  foodListItem.appendChild(type);


  return foodListItem;
}


const handleDeleteAll = function (event) {
  const foodList = document.querySelector('#favourite-foods');
  foodList.innerHTML = 'No foods left :(';
}
