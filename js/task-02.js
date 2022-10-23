const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//1. формування списку вузлів у циклі
//
// const ingredientsEl = document.querySelector("#ingredients");
// function listContent() {
//   let result = [];
//   for (const ingredient of ingredients) {
//     let li = document.createElement("li");
//     li.classList.add("item");
//     li.textContent = ingredient;
//     result.push(li);
//   }
//   return result;
// }
// ingredientsEl.append(...listContent());

//2. рефакторинг через reduce
//
const ingredientsEl = document.querySelector("#ingredients");

const listEl = ingredients.reduce((result, elem) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = elem;
  result.push(li);
  return result;
}, []);

ingredientsEl.append(...listEl);
