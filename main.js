import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
// import { createElement } from "parse5/lib/tree-adapters/default";


let figure =  document.getElementById("figure")
let name = document.getElementById("name");
let username =  document.getElementById("username");
let id = document.getElementById("id");
let profileLink = document.getElementById("url");
let repos = document.getElementById("repos");
let location = document.getElementById("location");
let img = document.createElement("img")
let form = document.getElementById("form");
let userInput = document.getElementById("user-name");
let main = document.getElementById("main");



// form.addEventListener(`submit`, (e)=>{
//   e.preventDefault()
//   fetch(`https://api.github.com/users/${userInput.value}`)
//   .then(response => response.json())
//   .then((data) =>{ console.log(data)
//    render(data);
//   })
//   .catch((err) => console.log(err));
//   main.style.display = "block"
  
//     function render(data){
//       let bioData = data;
//       name.innerHTML = `<strong>Name</strong>: ${bioData.name}`;
//       img.src =`${bioData.avatar_url}`;
//       figure.appendChild(img);
//       username.innerHTML =`<strong>Username</strong>: ${bioData.login}`;
//       id.innerHTML =`<strong>id</strong>: ${bioData.id}`;
//       profileLink.innerHTML =`<strong>Github URL</strong>: ${bioData.url}`;
//       repos.innerHTML =`<strong>Public Repo</strong>: ${bioData.public_repos}`;
//       location.innerHTML =`<strong>Location</strong>: ${bioData.location}`;
//     }
// })


form.addEventListener(`submit`, (e)=>{
  e.preventDefault()
  async function fetchUser(){
    try {
      let userSearched = await fetch(`https://api.github.com/users/${userInput.value}`)
      let userSearchedInJSon  = await userSearched.json();
      render(userSearchedInJSon)
    } catch (error) {
      console.log(error)
    }

  }

  fetchUser();

  main.style.display = "block"
  
    function render(data){
      let bioData = data;
      name.innerHTML = `<strong>Name</strong>: ${bioData.name}`;
      img.src =`${bioData.avatar_url}`;
      figure.appendChild(img);
      username.innerHTML =`<strong>Username</strong>: ${bioData.login}`;
      id.innerHTML =`<strong>id</strong>: ${bioData.id}`;
      profileLink.innerHTML =`<strong>Github URL</strong>: ${bioData.url}`;
      repos.innerHTML =`<strong>Public Repo</strong>: ${bioData.public_repos}`;
      location.innerHTML =`<strong>Location</strong>: ${bioData.location}`;
    }
})
// const octokit = new Octokit();