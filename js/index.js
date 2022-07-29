// ITERATION 1

function updateSubtotal(product) {

  // const price = row.querySelector(".price span").innerText; // price is the class, span is the field within
  // console.log(price);
  
  // const quantity = row.querySelector(".quantity input").value; //for "input" html it must be value
  // console.log(quantity);
  
  // const result = Number(price) * Number(quantity);
  // row.querySelector(".subtotal span").innerText = result
  // console.log(result);

  //ALT
  
  row.querySelector(".subtotal span").innerText = row.querySelector(".price span").innerText * row.querySelector(".quantity input").value

}

function calculateAll() {
  let productRows = document.querySelectorAll(".product")
  console.log(productRows);
  console.log(productRows.length);
  let result = 0

  for (row of productRows){

    updateSubtotal(row);
    result += Number(row.querySelector(".subtotal span").innerText)
  }

 document.querySelector("#total-value span").innerText = result

}

// ITERATION 4

const removeButtons = document.querySelectorAll(".btn-remove");
  for (var i=0; i<removeButtons.length; i++) { 
    removeButtons[i].onclick= function(){ 
      this.parentElement.parentElement.remove();
    }
  }

// function removeProduct() {
//   // const target = event.currentTarget;
//   // console.log('The target in remove is:', target);
//   console.log(`test`)

//   // let removeBtn = document.querySelctorAll(`.btn-remove`)

//   // for (row of removeBtn){
//   //   console.log(row)
//   //}
//   //... your code goes here
// }

// ITERATION 5

document.getElementById("create").onclick = createProduct

function createProduct() {

  const name = document.querySelectorAll(`.create-product input`)[0].value;
  let price = document.querySelectorAll(`.create-product input`)[1].value;
  price = Number(price).toFixed(2);

const htmlString = `
<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

const newRow = document.createElement("tr");
newRow.classList.add(`product`);
newRow.innerHTML = htmlString;
document.querySelector(`tbody`).appendChild(newRow);

newRow.querySelector(".btn-remove").onclick= function(){ 
  this.parentElement.parentElement.remove();
  }

  document.querySelectorAll(`.create-product input`)[0].value = '';
  document.querySelectorAll(`.create-product input`)[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
