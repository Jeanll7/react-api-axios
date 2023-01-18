import axios from "axios";

const url = "https://api.github.com/";

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}

getUsers();
