const main = document.querySelector(".destination");
const menuItems = Array.from(main.querySelector(".destination-menu").children);

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fillInfo(data.destinations, 0);
    menuItems.map(function (item, index) {
      item.index = index;
      item.addEventListener('click', function(e){

        fillInfo(data.destinations, e.currentTarget.index);
      })
    })
  })
  .catch(function (err) {
    console.log(err);
  });

function fillInfo(data, index) {
  menuItems.map(function (item, i) {
    item.classList.replace(
      "destination-menu__item--active",
      "destination-menu__item"
    );
    if(i == index){
      item.classList.replace(
        "destination-menu__item",
        "destination-menu__item--active"
      );
    }

  })
  
  main.querySelector(".heading--2").textContent = data[index].name;
  main.querySelector("img").src = data[index].images.png;
  main.querySelector("p").textContent = data[index].description;
  const travelInfo = Array.from(main.querySelectorAll(".heading--sub1"));
  travelInfo[0].textContent = data[index].distance;
  travelInfo[1].textContent = data[index].travel;
}
