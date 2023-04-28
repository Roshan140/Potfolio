
let popup = document.querySelector(".popup");

  function validation(){
   let password = document.getElementById("password").value;
let confirmpassword =document.getElementById("confirmpassword").value;

if (password != confirmpassword) {
  alert("Password and confirm password should be same");
return false;
}
const emailInput = document.getElementById("email");
const emailValue = emailInput.value.trim();

if (!emailValue.includes("@") || !emailValue.endsWith(".com")) {
  alert("Please enter a valid email address");
  emailInput.focus();
  return false;
}

else{
  document.querySelector(".box").style.display="none"
  event.preventDefault();
  popup.classList.add("open-popup");
}
  }
  function closepopup(){
    popup.classList.remove("open-popup");
    location.reload()
  }