// buscador

const d = document;


function buscador(input,selector){  
    
    d.addEventListener("keyup",e =>{
     
        if(e.target.matches(input)){
           // console.log(e.target.value)
            d.querySelectorAll(selector).forEach((el) =>  el.textContent.toLowerCase().includes(e.target.value)?el.classList.remove("filter"):el.classList.add("filter"))
        }
    })
}

buscador(".card-filter" , ".card");

