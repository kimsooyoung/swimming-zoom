const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (msg) => {
  console.log(`I just got : ${msg.data}`);
});

socket.addEventListener("close", () => {
  console.log("Disconnected to Server ❌");
});

setTimeout(() => {
  socket.send("Hello I'm Brower");
}, 3000);

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
