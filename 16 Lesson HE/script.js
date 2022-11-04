"use strict"

const infoUser = document.querySelector(".infoUser");
const input = document.querySelector(".input-name");
const getUserButt = document.querySelector(".btn");
const reset = document.querySelector(".btn-reset");

getUserButt.addEventListener("click", onGetUserButtClick);

function onGetUserButtClick(e) {
   e.preventDefault();

   fetch(`https://api.github.com/users/${input.value}`)
    .then((res) =>
      res.ok ? res.json() : Promise.reject("Error: " + res.status)
    )
    .then(renderUser)
    .catch((err) => {
      alert("Invalid user name! Try again");
      console.warn(err);
    });

  clearInput();
}

function renderUser(user) {
  const html = genUserHtml(user);

  infoUser.insertAdjacentHTML("afterbegin", html);
}

function clearInput() {
   input.value = "";
}

function genUserHtml(user) {
  return `
        <div class="userPost">
            <h1 class="userPost-name">${user.name}</h1>
            <img class="userPost-avatar" src="${user.avatar_url}">
            <p class="userPost-text"><span class="userPost-text-title">Number of Repos:</span> ${user.public_repos}</p>
            <p class="userPost-text"><span class="userPost-text-title">Followers:</span> ${user.followers}</p>
            <p class="userPost-text"><span class="userPost-text-title">Following:</span> ${user.following}</p>
        </div>
    `;
}