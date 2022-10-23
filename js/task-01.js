const categorys = document.querySelectorAll("ul > .item");
console.log("Number of categories: " + categorys.length);
for (const category of categorys) {
  console.log("Category: " + category.firstElementChild.textContent);
  const elementsCategory = category.querySelectorAll("ul > li");
  console.log("Elements: " + elementsCategory.length);
}
