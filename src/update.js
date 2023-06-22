const pargam = new URLSearchParams(document.location.search);
const id = pargam.get("id");
const body = document.querySelector("#bodyy");

fetch(`http://localhost:3000/products/${id}`)
  .then((data) => data.json())
  .then((data) => {
    const formValue = `
       <form id="myForm" action="/public/index.html">
      <input name="name" value='${data.name}'  placeholder="name" type="text" />
      <input name="price" value='${data.price}' placeholder="price" type="text" />
      <input name="des" value='${data.des}' placeholder="des" type="text" />
      <button  id='up' value="">chinh sua</button>
    </form>
        `;
    body.innerHTML = formValue;

    const btn = document.querySelector("#up");
    console.log(btn);
    btn.addEventListener("click", (e) => {
      const name = document.querySelector('input[name="name"]');
      const price = document.querySelector('input[name="price"]');
      const des = document.querySelector('input[name="des"]');
      const dataForm = {
        id: id,
        name: name.value,
        price: price.value,
        des: des.value,
      };
      fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });
    });
  });
