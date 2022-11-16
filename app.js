//https://www.acme-api.com/api/companies
let loadButton = document.querySelector('#loadButton');
let loadRandomButton = document.querySelector('#loadRandomButton');
let loadCompaniesButton = document.querySelector('#loadCompaniesButton');
console.log(loadRandomButton);
let list = document.querySelector('#usersList');
let h1 = document.querySelector('#randomH1');
console.log(h1);

loadButton.addEventListener('click', function(){
  loadUsers();
});

loadRandomButton.addEventListener('click', function(){
  loadRandomUser();
});

loadCompaniesButton.addEventListener('click', function(){
  loadCompanies();
});

async function loadRandomUser(){
  let response = await fetch('https://www.acme-api.com/api/users/random');
  let user = await response.json();
  randomH1.innerText = user.fullName;
}

async function loadUsers(){
  let response = await fetch('https://www.acme-api.com/api/users');
  let data = await response.json();
  let users = data.users;
  for(let i = 0; i < users.length; i++){
    let user = users[i];
    let li = document.createElement('li');
    li.innerText = user.fullName;
    list.appendChild(li);
  }
}

async function loadCompanies(){
  let response = await fetch('https://www.acme-api.com/api/companies');
  let data = await response.json();
  let name = data.name;
  console.log(data);
  for(let i = 0; i < data.length; i++){
    let company = data[i];
    let li = document.createElement('li');
    li.innerText = company.name;
    list.appendChild(li);
  }}