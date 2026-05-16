

// هنا الارييه الي هنحمل عليها
async function get_information(){
    let respons=await fetch("./products.json");
    let convert_response=await respons.json();
    // ######
    let container=document.getElementsByTagName("section")[0];
    // ***
      
        container.innerHTML=""
        // #####

    
    convert_response.forEach(element => {
    
         let card$=document.createElement("div");
         card$.classList.add('card');
       let imag$=document.createElement("img");
       imag$.classList.add("img");
       imag$.src=element.image;
       let divContainer = document.createElement("div")
       divContainer.classList.add('cardContent')

       let input$=document.createElement("input");
       input$.classList.add("category");
       input$.value=element.category;
       input$.type="button"
       let h2$=document.createElement("h2");
       h2$.textContent=element.title;
    //    let h4$=document.createElement("h4");
    //    h4$.textContent=element.description;
       let full_disc=document.createElement("a");
       full_disc.classList.add("all")
       full_disc.textContent=element.description.slice(0,50);
       let read_more=document.createElement("input");
       read_more.classList.add("more")
       read_more.value="read more";
       read_more.type="button"
       read_more.addEventListener("click",()=>{
        if(read_more.value==="read more"){
        full_disc.textContent=element.description;
        read_more.value="read less"
    }else{full_disc.textContent=element.description.slice(0,50);
            read_more.value="read more";}
       });
      
       read_more.classList.add("more")
       let h3$=document.createElement("h3");
       h3$.textContent=element.price;
       let p$=document.createElement("p");
       p$.innerHTML=`&#10032; ${element.rating.rate} (${element.rating.count}k views)`;
       let input1$=document.createElement("input");
       input1$.classList.add("add");
       input1$.value="Add to Card";
       input1$.type="button"
        // ***
       container.appendChild(card$);
       card$.appendChild(imag$);
       card$.appendChild(divContainer);
       
       divContainer.appendChild(input$);
       divContainer.appendChild(h2$);
       divContainer.appendChild(full_disc);
       divContainer.appendChild(read_more)
       divContainer.appendChild(h3$);
       divContainer.appendChild(p$);
       divContainer.appendChild(input1$)
       card$.id=element.id; 

       input1$.addEventListener("click",()=>{
        input1$.value="Added to Card";
        let product_save={
            id:element.id ,
            title:element.title,
            image:element.image,
            price:element.price,
            quantity:1
        };
       let cart = JSON.parse(localStorage.getItem("mycart") || "[]");  
            let found = cart.find(item => item.id === product_save.id);
            if(found){
            found.quantity ++;
          }else{
          cart.push(product_save);
                }

        localStorage.setItem("mycart",JSON.stringify(cart));
       })
    });
    };

 get_information()

       