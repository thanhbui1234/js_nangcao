const tbody = document.querySelector("#tbody");

const showData = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      tbody.innerHTML = data
        .map((product, index) => {
          return `
                <tr>
                <td>  ${index + 1}</td>
                <td>  ${product.name} </td>
                <td>  ${product.price} </td>
                <td>  ${product.des} </td>
                <td class='flex'> <button  class="btnRemove" data-id='${
                  product.id
                }'>Xoa</button>
                  <a href='/update.html?id=${product.id}'>update sp</a>
                 </td>
                
                </tr>`;
        })
        .join("");
      const BtnRemove = document.querySelectorAll(".btnRemove");
      BtnRemove.forEach((btn) => {
        btn.addEventListener("click", () => {
          const dataId = btn.getAttribute("data-id");
          handleDelete(dataId);
        });
      });
    });
};

const handleDelete = (id) => {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};
showData();
