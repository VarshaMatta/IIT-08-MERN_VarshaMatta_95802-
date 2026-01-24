function updateText() {
   
    let inputText = document.getElementById("userInput").value;

  
    let paragraph = document.getElementById("para");
    let button = document.getElementById("button");


    paragraph.innerText = inputText;

 
    paragraph.style.color = "green";


    button.innerText = "Updated";


    button.style.backgroundColor = "purple";
    button.style.color = "white";
}