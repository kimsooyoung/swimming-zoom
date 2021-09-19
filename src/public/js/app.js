const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function backendDone(msg) {
  console.log("The Back says : ", msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  console.log({ payload: input.value });
  socket.emit("enter_room", { payload: input.value }, backendDone);
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
