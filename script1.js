// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailRegex)) {
    alert("❌ Enter a valid email.");
    return;
  }

  alert("✅ Form submitted successfully!");
  this.reset();
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", () => li.remove());

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
