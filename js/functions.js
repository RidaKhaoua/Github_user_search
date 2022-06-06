const URL = "https://api.github.com";

let image = document.querySelector("[data-img]")
let userName = document.querySelector("[data-name]");
let dateJoin = document.querySelector("[data-date]");
let bioUser = document.querySelector("[data-bio]");
let numberRepo = document.querySelector("[data-number-repo]");
let numberFollowers = document.querySelector("[data-number-followrs]");
let numberFollowing = document.querySelector("[data-number-following]");
let locationUser = document.querySelector("[data-location]");
let link = document.querySelector("[data-link]");
let twitter = document.querySelector("[data-twitter]");
let nameRepo = document.querySelector("[data-name-repo]")
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


function getUser(username) {
  try {
    const myRequest = fetch(`${URL}/users/${username}`)
                      .then(response => response.json())
                      .then(data => console.log(showUser(data)))
                      .catch(error => console.log("message: ",error));  
  } catch (error) {
    console.log("error: ", error.message);
  }
}

function showUser(data) {
  if (data.message === "Not Found") {
    alert("The user is not found");
  } else {
    const {
      name,
      avatar_url,
      bio,
      created_at,
      location,
      twitter_username,
      html_url,
      followers,
      following,
      public_repos,
    } = data;
    let date = new Date(created_at);
        image.src = avatar_url;
        image.alt = "avatar";
        userName.textContent = name || "Unkown";
        dateJoin.textContent = `Join ${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`;
        bioUser.textContent = bio || "The repo is not have bio";
        numberRepo.textContent = public_repos || "Unkown";
        numberFollowers.textContent = followers || 0;
        numberFollowing.textContent = following || 0;
        locationUser.textContent = location || "Uknonw";
        link.href = html_url;
        link.textContent = "Go To repo";
        twitter.textContent = twitter_username || "Not found it";
  }  
}


export { getUser};