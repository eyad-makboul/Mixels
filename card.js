 let myCart=JSON.parse(localStorage.getItem("mycart"))||[];
main_container=document.getElementById("main_container")
myCart.forEach(element => {
    
   let container=document.createElement("div");
    container.classList.add("item_card");
   let img$=document.createElement("img");
    let title_cont=document.createElement("div");
    title_cont.classList.add("2");
    let title=document.createElement("h2");
    let quantity=document.createElement("p");
    let price=document.createElement("p")
    let input_cont=document.createElement("div");
    input_cont.classList.add("3")
    let add=document.createElement("input");
    let less=document.createElement("input");
    let remove=document.createElement("input");

    img$.src=element.image;
    title.textContent=element.title;
    quantity.textContent=element.quantity;
    price.textContent=element.price;
    add.value="+";
    add.type="button";
    less.value="-";
    less.type="button";
    remove.value="Delete";
    remove.type="button";

    main_container.appendChild(container);
    container.appendChild(img$);
    container.appendChild(title_cont);
    container.appendChild(input_cont);
    title_cont.appendChild(title);
    title_cont.appendChild(quantity);
    title_cont.appendChild(price);
    input_cont.appendChild(add);
    input_cont.appendChild(less);
    input_cont.appendChild(remove);

   add.addEventListener("click", () => {

    element.quantity++;

    quantity.textContent = element.quantity;
    price.textContent = element.quantity * element.price;

    localStorage.setItem("mycart", JSON.stringify(myCart));
});
less.addEventListener("click", () => {

    if (element.quantity > 1) {
        element.quantity--;

        quantity.textContent = element.quantity;
        price.textContent = element.quantity * element.price;

        localStorage.setItem("mycart", JSON.stringify(myCart));
    }
});
remove.addEventListener("click", () => {

    myCart = myCart.filter(item => item.id !== element.id);

    localStorage.setItem("mycart", JSON.stringify(myCart));

    container.remove();
});
});
