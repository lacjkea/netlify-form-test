const form = document.querySelector("form");
const inputNameEl = document.querySelector("#name");

inputNameEl.addEventListener("blur", handleFormData);

function handleFormData(e) {
  // e.preventDefault();
  //alert("hey");
  console.log("form.elements: ", form.elements);
  console.log("form.elements.named.value", form.elements.named.value);
  console.log("form.elements.age.value:", form.elements.age.value);
}
