function changeText(id) {
    id.innerHTML = "Ooops!";
  }

let button = document.getElementById("Btn");
button.addEventListener("click", function(){
    button.innerHTML = "Get to it"
    console.log("Hello World!");
})

button.addEventListener("mouseover", function inner(){
    button.innerHTML = "Mouse in."

})


button.addEventListener("mouseout", function out(){
    button.innerHTML = "Mouse out."
})

