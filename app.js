document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggleBtn");
  const menu = document.querySelector(".menu");
  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("hidden");
  });
});

// plan create

const coffeePreference = document.querySelector(".coffee-preference");
const coffeeType = document.querySelector(".coffee-type");
const coffeeQuantity = document.querySelector(".coffee-quantity");
const coffeeGrind = document.querySelector(".coffee-grind");
const coffeeTime = document.querySelector(".coffee-time ");

const prefVal = document.querySelector(
  'input[name="preference"]:checked'
).value;
const typeVal = document.querySelector('input[name="beantype"]:checked').value;
const grindedVal = document.querySelector('input[name="grind"]:checked').value;
const prefAmount = document.querySelector(
  'input[name="quantity"]:checked'
).value;
const prefTime = document.querySelector('input[name="time"]:checked').value;

coffeePreference.innerHTML = prefVal;
coffeeType.innerHTML = typeVal;
coffeeGrind.innerHTML = grindedVal;
coffeeQuantity.innerHTML = prefAmount;
coffeeTime.innerHTML = prefTime;

document.querySelectorAll('input[name="preference"]').forEach((item) => {
  item.addEventListener("change", (e) => {
    coffeePreference.innerHTML = e.target.value;
  });
});

document.querySelectorAll('input[name="beantype"]').forEach((item) => {
  item.addEventListener("change", (e) => {
    coffeeType.innerHTML = e.target.value;
  });
});

document.querySelectorAll('input[name="grind"]').forEach((item) => {
  item.addEventListener("change", (e) => {
    coffeeGrind.innerHTML = e.target.value;
  });
});

document.querySelectorAll('input[name="quantity"]').forEach((item) => {
  item.addEventListener("change", (e) => {
    coffeeQuantity.innerHTML = e.target.value;
  });
});

document.querySelectorAll('input[name="time"]').forEach((item) => {
  item.addEventListener("change", (e) => {
    coffeeTime.innerHTML = e.target.value;
  });
});
