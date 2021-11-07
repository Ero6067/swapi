function getFilm() {
  axios({
    method: "get",
    url: "https://swapi.dev/api/films/1",
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

// Event Listener
document.getElementById("sw-films").addEventListener("click", getFilm);
