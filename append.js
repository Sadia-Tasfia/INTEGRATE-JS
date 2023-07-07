/* 
Topic:
1. full section add process
2. Set innerHtml directly
*/ 
//  where to add
const placesList = document.getElementById("places-list");

// what to be added
const li = document.createElement('li');
li.innerText = 'Rangamati';

// add the child
placesList.appendChild(li)

// full section add process
const mainContainer =document.getElementById('main-contain');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= 'My favourite Food';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1 =document.createElement('li');
li1.innerText ='Pasta';
ul.appendChild(li1);

const li2 =document.createElement('li');
li2.innerText ='Pizza';
ul.appendChild(li2);

const li3 =document.createElement('li');
li3.innerText ='french fry';
ul.appendChild(li3);

const li4 =document.createElement('li');
li4.innerText ='Tacos';
ul.appendChild(li4);

section.appendChild(ul);    
mainContainer.appendChild(section);


//  Set innerHtml directly
const fullSection =document.createElement('section');
fullSection.innerHTML = `
<h1> My dress collection </h1>
<ul> 
<li>Pakistani dress </li>
<li>Indian dress </li>
<li>Sari </li>
<li>Tops </li>
</ul>
`;
mainContainer.appendChild(fullSection);
