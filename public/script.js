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

// Toggle InputDelete
document.addEventListener("DOMContentLoaded", function () {
  var showInputDelete = document.getElementById("showInputDelete");
  var inputDelete = document.getElementById("inputDelete");
  if (showInputDelete) {
    showInputDelete.addEventListener("click", function () {
      inputDelete.classList.toggle("d-none");
      inputDelete.classList.toggle("d-flex");
    });
  }
});

// DELETE CONFIRMATION
function confirmDeleteUser() {
  if (confirm("Are you sure you want delete your account ?")) {
    document.getElementById("inputDelete").submit();
  }
}
function confirmDeleteNote(noteId) {
  if (confirm("Are you sure you want to delete this Note?")) {
    document.getElementById(`deleteNote${noteId}`).submit();
  }
}
function confirmDeleteLesson() {
  if (confirm("Are you sure you want to delete this Lesson ?")) {
    document.getElementById(`deleteLesson`).submit();
  }
}

// HIDE CREATE CATEGORY
function hideContainer(selected) {
  var categoryContainer = document.getElementById("categoryContainer");
  if (selected.value === "newCat") {
    categoryContainer.style.display = "block";
  } else {
    categoryContainer.style.display = "none";
  }
}
// HIDE CREATE CATEGORY 2
function hideContainer2(selected) {
  var categoryContainer = document.getElementById("categoryContainer2");
  if (selected.value === "newCat") {
    categoryContainer.style.display = "block";
  } else {
    categoryContainer.style.display = "none";
  }
}

// SUBMIT SELECTED
const lessonSelect = document.getElementById('lessonSelect');
  if (lessonSelect) {
    lessonSelect.addEventListener('change', function () {
      document.getElementById('lessonForm').submit();
    });
  }
  
// SUBMIT SELECTED
const categoryFilter = document.getElementById('categoryFilter');
if (categoryFilter) {
  categoryFilter.addEventListener('change', function () {
    document.getElementById('categoryFilterForm').submit();
  });
}