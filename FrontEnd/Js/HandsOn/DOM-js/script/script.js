let elementH1 = document.querySelector("h1");
elementH1.textContent = "Contoh hasil manipulasi h1 dengan DOM";

let button = document.getElementById("ubah-text");
let paraph = document.querySelector("p.content");
paraph.innerHTML = "Change 1";
let isEvent = true;

const changeText = () => {
  paraph.innerHTML = isEvent ? "Change 1" : "Change 2";
  isEvent = !isEvent;
};

button.addEventListener("click", changeText);

const alertBtn = document.getElementById("alert-btn");
alertBtn.style.backgroundColor = "blue";
alertBtn.style.padding = "10px";
alertBtn.style.borderRadius = "5px";
alertBtn.style.border = "none";
alertBtn.style.color = "#fff";
alertBtn.style.margin = "25px";

const alertIn = () => {
  alert("Terima Kasih telah berkunjung");
};
