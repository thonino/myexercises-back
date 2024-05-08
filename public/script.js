// Toggle InputEmail
document.addEventListener("DOMContentLoaded", function () {
  var showInputEmail = document.getElementById("showInputEmail");
  var inputEmail = document.getElementById("inputEmail");
  if (showInputEmail) {
    showInputEmail.addEventListener("click", function () {
      inputEmail.classList.toggle("d-none");
      inputEmail.classList.toggle("d-flex");
    });
  }
});

// Toggle InputPassword
document.addEventListener("DOMContentLoaded", function () {
  var showInputPassword = document.getElementById("showInputPassword");
  var inputPassword = document.getElementById("inputPassword");
  if (showInputPassword) {
    showInputPassword.addEventListener("click", function () {
      inputPassword.classList.toggle("d-none");
      inputPassword.classList.toggle("d-flex");
    });
  }
});

// DELETE CONFIRMATION
function confirmDeleteUser() {
  if (confirm("Are you sure you want delete your account ?")) {
    document.getElementById("deleteUser").submit();
  }
}
function confirmDeleteNoe() {
  if (confirm("Are you sure you want delete your account ?")) {
    document.getElementById("deleteNote").submit();
  }
}

// HIDE CREATE CATEGORY
function hideContainer(selected) {
  var categoryContainer = document.getElementById("categoryContainer");
  if (selected.value === "newCat" || selected.value === "uncategorized") {
    categoryContainer.style.display = "block";
  } else {
    categoryContainer.style.display = "none";
  }
}