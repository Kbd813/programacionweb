const main = document.querySelector(".tech");
const menuItems = Array.from(main.querySelector(".tech-menu").children);

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fillInfo(data.technology, 0);
    menuItems.map(function (item, index) {
      item.index = index;
      item.addEventListener('click', function(e){

        fillInfo(data.technology, e.currentTarget.index);
      })
    })
  })
  .catch(function (err) {
    console.log(err);
  });

function fillInfo(data, index) {
  menuItems.map(function (item, i) {
    item.classList.replace(
      "tech-menu__item--active",
      "tech-menu__item"
    );
    if(i == index){
      item.classList.replace(
        "tech-menu__item",
        "tech-menu__item--active"
      );
    }
  })
  
  main.querySelector(".heading--3").textContent = data[index].name;
  const images = main.querySelectorAll("img");
  images[0].src = data[index].images.landscape;
  images[1].src = data[index].images.portrait;
  main.querySelector("p").textContent = data[index].description;
}