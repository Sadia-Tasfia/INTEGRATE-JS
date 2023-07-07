console.log("hello event dom")

// option 2 add on click func on the html element(we use this and important)
function makeBlue() {
  document.body.style.backgroundColor= "lightblue";
}

// option 3
const button = document.getElementById('buttons');
button.onclick = makeButton;

function makeButton() {
  button.style.fontSize = "25px";
  button.style.color= " crimson";
  console.log('JS is the best');
}

// option 4
const pinkButton = document.getElementById('pink-button')
pinkButton.addEventListener("click", makePink);

function makePink(){
  document.body.style.backgroundColor ='pink';
  pinkButton.style.padding ="10px";
  pinkButton.style.fontWeight ="bold";
  console.log("They have great features");

}

// option 4 another
const purpleButton = document.getElementById("purple-button"); 
purpleButton.addEventListener('click', function makePurple(){
  document.body.style.backgroundColor = 'purple';
  console.log('high level language');

});


// option 4 final
// Important : we'll use this 
document
  .getElementById("goldenrod-button")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
    console.log('Its also use front and back end');
  });


// option 5 recap
document.getElementById("btn-update").addEventListener('click',function(){
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  // console.log(inputText);

  const p = document.getElementById("input-text");
  p.innerText = inputText;
  inputField.value = ""; //eta dile input likha por click krle clear hoye jabe
});