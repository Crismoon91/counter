//set initial count
let count = 0;

//select value and buttons

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("btnDecrease")) {
      count--;
    } else if (styles.contains("btnIncrease")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "#90BE6D";
    } else if (count < 0) {
      value.style.color = "#F94144";
    } else {
      value.style.color = "hsl(209, 61%, 16%)";
    }
    value.textContent = count;
  });
});
