const form = document.querySelector("form");
const btn = document.querySelector("#name");

btn.addEventListener("blur", pForm);

function pForm(e) {
  //   console.log(age);
  // e.preventDefault();
  //alert("hey");
  console.log(form.elements);
  console.log(form.elements.named.value);
}
