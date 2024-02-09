const main_div = document.querySelector(".main-div");
const creat_account = document.querySelector(".creat-account");
const sign_up = document.querySelector(".sign-up");
const remove_btn = document.querySelector(".remove-btn");
creat_account.addEventListener("click", () => {
  main_div.style.filter = "blur(4px)";
  sign_up.style.display = "block";
});

remove_btn.addEventListener("click", () => {
  main_div.style.filter = "none";
  sign_up.style.display = "none";
});
// if you input wrong email and password
const login_btn = document.querySelector(".login-btn");
const email_input = document.querySelector(".email-input");
const error_email = document.querySelector(".error-email");
const email_form = document.querySelector(".email-form");
const passowrd_input = document.querySelector(".password");
const error_password = document.querySelector(".error-password");
const password_form = document.querySelector(".pasword-form");
const registration_div = document.querySelector(".registration-div");
const main_page = document.querySelector(".main-page");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = email_input.value.trim();
function input_test() {
  if (email.value === "" || !emailRegex.test(email)) {
    error_email.style.display = "block";
    email_form.style.borderColor = " red";
  } else if (email.value != localStorage.getItem("email-mobile")) {
    error_email.style.display = "block";
    email_form.style.borderColor = "red";
  } else {
    error_email.style.display = "none";
    email_form.style.borderColor = "gray";
  }
  if (passowrd_input.value === "") {
    error_password.style.display = "block";
    password_form.style.borderColor = "red";
  } else if (passowrd_input.value != localStorage.getItem("paswword")) {
    error_password.style.display = "block";
    password_form.style.borderColor = "red";
  } else {
    error_password.style.display = "none";
    password_form.style.borderColor = "gray";
  }
}
login_btn.addEventListener("click", () => {
  if (
    passowrd_input.value == localStorage.getItem("paswword") &&
    email_input.value == localStorage.getItem("email-mobile")
  ) {
    document.body.style.display = "none";
    window.location.href = "main.html";
    console.log("hello");
  } else {
    input_test();
    // document.body.style.display = "block";
  }
});
// sing up validation
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const mobile_email = document.getElementById("mobile-email");
const new_password = document.getElementById("new-password");
const signup_btn = document.querySelector(".signup-btn");
const signup_div = document.querySelector(".sign-up");
const female_radio = document.querySelector(".female-radio");
const male_radio = document.querySelector(".male-radio");
const custom_radio = document.querySelector(".custom-radio");
const female_div = document.querySelector(".Female");
const male_div = document.querySelector(".male");
const custom_div = document.querySelector(".custom");
// let arry_validation=[first_name,last_name,mobile_email,new_password];
function validation_input(validation) {
  validation.style.borderColor = "grey";
  if (validation === mobile_email) {
    const email = validation.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      validation.style.borderColor = "red";
      return false;
    }
  }
  if (validation.value === "") {
    validation.style.borderColor = "red";
    return false;
  } else {
    if (validation === first_name) {
      localStorage.setItem("first-name", validation.value);
    } else if (validation === last_name) {
      localStorage.setItem("last-name", validation.value);
    } else if (validation === mobile_email) {
      localStorage.setItem("email-mobile", validation.value);
    } else if (validation === new_password) {
      localStorage.setItem("paswword", validation.value);
    }
    return true;
  }
}
const month_select = document.getElementById("month-select");
const day_select = document.getElementById("day-select");
const years_select = document.getElementById("years-select");
function birthday(){
  if (
    month_select.value == "January" &&
    day_select.value == 1 &&
    years_select.value == "01"
  ) {
    console.log("hello");
    month_select.style.border = "1px solid red";
    day_select.style.border = "1px solid red";
    years_select.style.border = "1px solid red";
  }

}

function radio_validation() {
  if (female_radio.check === false) {
    female_div.style.borderColor = "red";
  }
}
signup_btn.addEventListener("click", () => {
  validation_input(first_name);
  validation_input(last_name);
  validation_input(mobile_email);
  validation_input(new_password);
  radio_validation();
  if (
    validation_input(first_name) &&
    validation_input(last_name) &&
    validation_input(mobile_email) &&
    validation_input(new_password)
  ) {
    signup_div.style.display = "none";
    main_div.style.filter = "blur(0px)";
  } else {
    signup_div.style.display = "block";
  }
});
// const post_input = document.getElementById("header-input");
// const creat_post = document.querySelector(".creat-post");
// console.log(creat_post);
// post_input.addEventListener("click", () => {
//   creat_post.style.display = "block";
//   console.log("hello");
// });
