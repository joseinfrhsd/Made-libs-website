let sumbit = document.getElementById("button");
// console.log(button);

sumbit.addEventListener('click',getWords);

function getWords(){
    var words = document.querySelectorAll('input[type=text]');
    var placeholders =document.querySelectorAll(".userInput");
    placeholders.forEach((placeholder, index) =>  {
        placeholder.innerHTML=words[index].value;
    });

// Show hidden story
document.getElementById("story-screen").style.display="block"
}