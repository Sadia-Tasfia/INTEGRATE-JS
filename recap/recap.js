document.getElementById("apply-bg").addEventListener('click', function(){
  const friends = document.getElementsByClassName("friend");
  for(const friend of friends){
    friend.style.backgroundColor = 'lightblue';
    friend.style.padding = "0.10em";
    friend.style.margin = "0.20em";

  }
});

document.getElementById("center-third").addEventListener('click', function(){
  const third = document.getElementById("third-friend");
  third.style.textAlign = 'center';
});

document.getElementById("add-friend").addEventListener("click", function (){
  const friendContainer = document.getElementById("friend-container");
  const newFriend = document.createElement('div');
  newFriend.classList.add('friend');
  newFriend.innerHTML = `
  <h3 class="friend-name">New Friend </h3>
  <p> Something new div added </p>
  `;
  friendContainer.appendChild(newFriend);
});