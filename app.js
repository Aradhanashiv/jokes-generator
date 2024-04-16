const joke_container = document.querySelector("#joke");
const button = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";

let getjoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => joke_container.innerText = `${item.joke}`);

}

btn.addEventListener("click" , getjoke);
// getjoke();













