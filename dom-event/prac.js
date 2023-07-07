console.log("Hello World");

// getElementsByClassName
const tagCollection = document.getElementsByClassName("h2-tag");
for(const tag of tagCollection) {
  tag.style.color = "lightblue";
}

// getElementById
const secondPart = document.getElementById("second-container"); 
secondPart.style.backgroundColor ="tomato"

// getElementsByTagName
const pList = document.getElementsByTagName('p');
for(const p of pList){
  p.style.textAlign= 'center';
  p.style.color = 'red';
  p.innerText = 'eid mubarak'
}

// querySelector
const liList = document.querySelector("#second-container");
  console.log(liList);

// querySelectorAll
const liList2 = document.querySelectorAll("#second-container li");
for (const li of liList2) {
  console.log(li);
}

// createElement and  appendChild
const containerList = document.getElementById("second-container");
const li = document.createElement('li');
li.innerText ="ChatGPT is a sibling model to InstructGPT";

containerList.appendChild(li);

// Directly createElement and  appendChild
const section = document.createElement('section')
section.innerHTML = `
<ul>
<li> welcome to the website world </li>
<li> there is a large session </li>
</ul>`
containerList.appendChild(section);

// option-1 event handler (we'll use this)
function makeBlue() {
  document.body.style.color= 'lightblue';
  document.body.style.backgroundColor = 'gray';
}

// option-2 add event listener(we'll use this)
document.getElementById("orange").addEventListener('click',function() {
  document.body.style.padding = '15px';
  document.body.style.color = 'lightorange'
});

// option -3 event adding using  addEventListener

// document.getElementById("input-text").addEventListener('keyup', function(event){
//   console.log(event.target.value)
// });

document.getElementById("submit-btn").addEventListener('click',function(){
  const textArea = document.getElementById("input-text");
  const input =textArea.value;
  // console.log(input)

  const container2 = document.getElementById("third-container");
  const p =document.createElement('p');
  p.innerText = input;
  container2.appendChild(p);
  
});

// document.getElementById("third-container").addEventListener("click", function (event) {
//     // event.target.parentNode.removeChild(event.target)
//   });