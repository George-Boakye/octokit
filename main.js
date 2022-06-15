import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
// import { createElement } from "parse5/lib/tree-adapters/default";


let figure =  document.getElementById("figure")
let name = document.getElementById("name");
let username =  document.getElementById("username");
let id = document.getElementById("id");
let profileLink = document.getElementById("url");
let email = document.getElementById("repos");
let location = document.getElementById("location");
let img = document.createElement("img")


const octokit = new Octokit();
octokit.users
  .getByUsername({
    username: "asteroid2k",
  })
  .then((data) =>{ console.log(data["data"])
 render(data);
})
  .catch((err) => console.log(err));


  function render(data){
    let bioData = data["data"];
    name.innerHTML = `<strong>Name</strong>: ${bioData.name}`;
    img.src =`${bioData.avatar_url}`;
    figure.appendChild(img);
    username.innerHTML =`<strong>Username</strong>: ${bioData.login}`;
    id.innerHTML =`<strong>id</strong>: ${bioData.id}`;
    profileLink.innerHTML =`<strong>Github URL</strong>: ${bioData.url}`;
    email.innerHTML =`<strong>Public Repo</strong>: ${bioData.public_repos}`;
    location.innerHTML =`<strong>Location</strong>: ${bioData.location}`;
  }