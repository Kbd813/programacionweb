const main = document.querySelector(".crew");
const menuItems = Array.from(main.querySelector(".crew-menu").children);

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fillInfo(data.crew, 0);
    menuItems.map(function (item, index) {
      item.index = index;
      item.addEventListener('click', function(e){

        fillInfo(data.crew, e.currentTarget.index);
      })
    })
  })
  .catch(function (err) {
    console.log(err);
  });

function fillInfo(data, index) {
  menuItems.map(function (item, i) {
    item.classList.replace(
      "crew-menu__item--active",
      "crew-menu__item"
    );
    if(i == index){
      item.classList.replace(
        "crew-menu__item",
        "crew-menu__item--active"
      );
    }
  })
  
  main.querySelector(".heading--4").textContent = data[index].role;
  main.querySelector(".heading--3").textContent = data[index].name;
  main.querySelector("img").src = data[index].images.png;
  main.querySelector("p").textContent = data[index].bio;
}