const range = document.querySelector(".range-progress");
const page = document.querySelector(".page-views");
const price = document.querySelector(".price span");
const date = document.querySelector(".price");
const month = document.querySelector(".month");
const checkbox = document.querySelector(".checkbox-input");
const checkboxLabel = document.querySelector(".checkbox");

range.addEventListener("touchmove", (e) => changeRange(e));
range.addEventListener("touchend", (e) => changeRange(e));
range.addEventListener("mousemove", (e) => changeRange(e));

let year = 1,
  discount = 1,
  pay = 0,
  time = "monthly";

const changeRange = (e) => {
  const value = e.target.value;
  const color = `linear-gradient(
      90deg,
      hsl(174, 77%, 80%) ${value}%, 
      rgb(234, 238, 251) ${value}%
    )`;
  range.style.background = color;
  pageView(value);
};

const setValue = (pay = 16) => {
  if (checkbox.checked === true) {
    discount = 0.75;
    time = "yearly";
    year = 12;
    checkboxLabel.style.backgroundColor = "hsl(174, 86%, 45%)";
  } else {
    checkboxLabel.style.backgroundColor = "hsl(224, 65%, 95%)";

    year = 1;
    discount = 1;
    time = "monthly";
  }
  price.textContent = `$${pay * year * discount}`;
  month.textContent = time;
};

const pageView = (value) => {
  if (value <= 20) {
    page.textContent = "10K PAGEVIEWS";
    pay = 8;
  } else if (value > 20 && value <= 40) {
    page.textContent = "50K PAGEVIEWS";
    pay = 12;
  } else if (value >= 40 && value <= 60) {
    page.textContent = "100K PAGEVIEWS";
    pay = 16;
  } else if (value > 60 && value <= 80) {
    page.textContent = "500K PAG    EVIEWS";
    pay = 24;
  } else {
    page.textContent = "1M PAGEVIEWS";
    pay = 36;
  }
  setValue(pay);
};

checkbox.addEventListener("input", (e) => setValue(16));
