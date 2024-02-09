const header_input = document.getElementById("header-input");
const creat_post = document.querySelector(".creat-post");
const blur_div = document.querySelector(".blur-div");
// function make_post() {
// }
const user_name = document.querySelector(".user-name");
const user_lastname = document.getElementById("user-lastname");
user_name.innerHTML = localStorage.getItem("first-name");
user_lastname.innerHTML = localStorage.getItem("last-name");
header_input.addEventListener("click", () => {
  creat_post.style.display = "block";
  blur_div.style.filter = "blur(4px)";
});
const reject = document.querySelector(".rejecrt");
reject.addEventListener("click", () => {
  creat_post.style.display = "none";
  blur_div.style.filter = "blur(0px)";
});
// const user_name_foo = user_name;
// const user_lastname_foo = user_lastname;
const post_input = document.getElementById("post-input");
const tudu_array = [];
const post_btn = document.querySelector(".post-btn");
function add_post() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const formattedTime = `${hours}:${minutes}`;
  const new_item = post_input.value.trim();
  tudu_array.push(new_item);
  console.log(tudu_array);
  if (new_item === "") {
    alert("please write something!");
  } else {
    const list = document.createElement("li");
    const ul = document.querySelector(".ul");
    ul.insertBefore(list, ul.firstChild);
    list.innerHTML = `
    <div class=li-div>
    <div class=user-first-post>
    <div class= post-user-page>
    <img src="./img-mobile/user.jpg" class=user-img-result>
    <div class="timer-name">
    <p>${user_name}</p><span>${user_lastname}</span>
    <p class="time">${formattedTime}</p>
    </div>
    </div>
    <img src="./img-mobile/reject.png" class="reject">
    </div>
    <li class=result-li>${new_item}</li>
    <hr>
    <div class=like-div>

    <div class=reaction>
    <img src="./img-mobile/likeb.png" class=like>
    <p>Like</p>
    </div>
    <div class=comment>
    <img src=" ./img-mobile/comb.png" class=comment-img>
    <p> Comment </p>
    </div>
    <div class=share>
    <img src="./img-mobile/shareb.png" class=share-img>
    <p>Share</p>
    </div>
    </div>
    <hr>
    <div class=write-comment>
    <img src="./img-mobile/user-girl.png" class=user-girl>
    <form>
    <input placeholder="Write a comment..."/>
    </form>

    </div>
    </div>
    `;
    list
    const deleteBtn = list.querySelector(".reject");
    deleteBtn.addEventListener("click", () => {
      const indexToRemove = tudu_array.pop(new_item);
      if (indexToRemove !== -1) {
        tudu_array.splice(indexToRemove, 1);
      }
      ul.removeChild(list);
    });
  }
}
post_btn.addEventListener("click", () => {
  add_post();
  post_input.value = "";
  creat_post.style.display = "none";
  blur_div.style.filter = "blur(0px)";
});
