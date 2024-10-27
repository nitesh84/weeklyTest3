const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];

let leftSection=document.querySelector("#left-section");
console.log(leftSection);

function loadProducts() {

  Products.forEach((ele)=>{
    let product = `
        <div>
                      <span>${ele.name}</span>
                      <span>${ele.price}</span>
                      <div>
                            <button class="plus">+</button>
                            <input type="number" value="0" min="0">
                            <button class="minus">-</button>
                      </div>
          </div>
      `;
    leftSection.innerHTML+=product;
   
    
  })

  let button1=Array.from(document.getElementsByClassName("plus"))
  let input=Array.from(document.getElementsByTagName("input"))
  let button2=Array.from(document.getElementsByClassName("minus"))
  console.log(button1);
  console.log(input);
  console.log(button2);
  
  button1.forEach((ele,index)=>{
    
    ele.addEventListener('click',function increase(){
      
      input[index].value++;
       addToCart(  );

    });
  });

  button2.forEach((ele,index)=>{
    ele.addEventListener('click',function decrease(){
console.log("called");

      if(input[index].value>0)
        input[index].value--;

      if(input[index].value>0) addToCart();
let right=document.getElementsByClassName("right")[0];
console.log(right);
console.log("ele",ele);

      let div=document.createElement("div");
      let content=`<div>
                <span>${ele.name}</span>
                <span>${ele.price}</span>
            </div>`
       div.innerHTML= (content);
       right.appendChild(div); 
        
    })
  })

  function addToCart(){

  }




}

window.addEventListener("load", loadProducts);


