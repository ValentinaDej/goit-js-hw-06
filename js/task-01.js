const categorys = document.querySelectorAll("ul > .item");
console.log("Number of categories: " + categorys.length);
for (const category of categorys) {
  console.log("Category: " + category.firstElementChild.textContent);
  console.log("Elements: " + category.querySelectorAll("ul > li").length);
  console.log("");
}
