const usernameInput = document.querySelector(".input-group_input");
const btn = document.querySelector(".input_button");
const userimage = document.querySelector(".userimage");
const username = document.querySelector(".username_");
const follow = document.querySelector(".follower_Text");
const following = document.querySelector(".following_Text");
const bio_text = document.querySelector(".bio");
const locationUSER = document.querySelector(".location");
const Company = document.querySelector(".company");
const main = document.querySelector(`.main_info`);
const searchCon = document.querySelector(`.container`);
const profileURL = document.querySelector(`.Linkbut`);
const resetbt = document.querySelector(`.resetbut`);
btn.addEventListener("click", () => {
  const user = usernameInput.value;
  fetch("https://api.github.com/users/" + user)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((userdata) => {
      console.log(userdata.avatar_url);
      userimage.src = userdata.avatar_url;
      bio_text.innerHTML = userdata.bio;
      follow.innerHTML = userdata.followers;
      following.innerHTML = userdata.following;
      locationUSER.innerHTML = userdata.location;
      username.innerHTML = userdata.name;
      Company.innerHTML = userdata.company;
      profileURL.href = userdata.html_url;
      main.style.display = "block";
      searchCon.style.display = "none";
    })
    .catch((error) => {
      alert(`Username is Wrong ${error}`);
    });
});

function resetpage() {
  location.reload();
}
