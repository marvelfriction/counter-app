//initial count
let count = 0

const value =  document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
    // increases or decreases the value when clicked
    item.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if (style.contains("decrease")){
            count--;
        } else if (style.contains("increase")){
            count++;
        } else {
            count = 0;
        }
        // Changes color of the value when the btn is clicked
        if (count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        } else{
            value.style.color = "#222";
        }

        // Displays value content
        value.textContent = count;
    })
});
