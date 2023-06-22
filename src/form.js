const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  const name = document.querySelector('input[name="name"]');
  const price = document.querySelector('input[name="price"]');
  const des = document.querySelector('input[name="des"]');
  const dataForm = {
    name: name.value,
    price: price.value,
    des: des.value,
  };

  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataForm),
  });
});
