/**
 * App Description
 * - Add onSubmit handler on form
 * - Show error message if input is invalid
 * - Validate inputs
 * - Create user with input values
 * - Render user card in users container
 * - Allow favorite/star functionality on user card
 * - Allow creation of user card with pre-defined array
 *
 */

// User Card Template
/* <div class="userContainer" id="">
  <h1>{name}</h1>
  <h4>{email}</h4>
  <img
    src={userImage}
    class="userImage"
  />
  <button id="" class="delete">
    🗑️
  </button>
  <button id="" class="star">
    ⭐
  </button>
</div>; */

// constant variables
const starEmoji = "⭐";
const skullEmoji = "💀";
const trashEmoji = "🗑️";

// Put DOM elements into variables
const myForm = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageInput = document.getElementById("image");
const msg = document.getElementById("error");
const userList = document.getElementById("users");

// application variables
let hasError = false;

// Add listeners on dom events
myForm.addEventListener("submit", onSubmit);

const inputs = [nameInput, emailInput, imageInput];
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("input", function () {
    if (hasError) {
      hideError();
    }
  });
}

// Helper Functions

function showError() {
  msg.classList.add("error");
  msg.innerHTML = "Please enter all fields";
  hasError = true;
}

function hideError() {
  msg.classList = ["msg"];
  msg.textContent = "";
  hasError = false;
}

function clearInputs() {
  nameInput.value = "";
  emailInput.value = "";
  imageInput.value = "";
}

function handleRemoveUser(e) {
  const userContainer = document.getElementById(e.target.id);
  userContainer.remove();
}

function handleUnstarUser(e) {
  const userContainer = document.getElementById(e.target.id);
  userContainer.classList.remove("starred");

  const starButton = userContainer.querySelector(".star");
  starButton.removeEventListener("click", handleUnstarUser);
  starButton.textContent = starEmoji;
  starButton.addEventListener("click", handleStarUser);
}

function handleStarUser(e) {
  const userContainer = document.getElementById(e.target.id);
  userContainer.classList.add("starred");

  const starButton = userContainer.querySelector(".star");
  starButton.removeEventListener("click", handleStarUser);
  starButton.textContent = skullEmoji;
  starButton.addEventListener("click", handleUnstarUser);
}

function isValidInput(name, email, image) {
  if (name && email.includes("@") && image) {
    return true;
  }

  return false;
}

function createUserCard(name, email, image) {
  // Create new list item with user
  const userContainer = document.createElement("div");
  userContainer.classList = ["userContainer"];
  userContainer.id = email;

  // add user name heading element
  const userNameHeading = document.createElement("h1");
  userNameHeading.textContent = name;
  userContainer.appendChild(userNameHeading);

  // add user email heading component
  const emailHeading = document.createElement("h4");
  emailHeading.textContent = email;
  userContainer.appendChild(emailHeading);

  const userImage = document.createElement("img");
  userImage.src = image;
  userImage.classList = ["userImage"];
  userContainer.appendChild(userImage);

  const deleteButton = document.createElement("button");
  deleteButton.classList = ["delete"];
  deleteButton.textContent = trashEmoji;
  deleteButton.addEventListener("click", handleRemoveUser);
  userContainer.appendChild(deleteButton);

  const starButton = document.createElement("button");
  starButton.classList = ["star"];
  starButton.textContent = starEmoji;
  starButton.addEventListener("click", handleStarUser);
  userContainer.appendChild(starButton);

  // Append to list
  userList.appendChild(userContainer);
}

// Form submit handler
function onSubmit(e) {
  e.preventDefault();

  const userName = nameInput.value;
  const userEmail = emailInput.value;
  const userImageLink = imageInput.value;

  const userEnterValidValue = isValidInput(userName, userEmail, userImageLink);

  if (!userEnterValidValue) {
    showError();
    return;
  }

  createUserCard(userName, userEmail, userImageLink);

  // Clear fields
  clearInputs();
}
