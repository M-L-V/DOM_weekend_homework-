document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const foodListItem = createFoodListItem(event.target);
  const foodList = document.querySelector('#favourite-foods');
  foodList.appendChild(foodListItem);

  event.target.reset();
}
