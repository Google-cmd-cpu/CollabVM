
function joinVM() {
  alert("Joined VM queue (not real backend).");
}

function uploadISO() {
  alert("Upload ISO clicked. Functionality not implemented.");
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");
  if (input.value.trim()) {
    const message = document.createElement("div");
    message.textContent = "User: " + input.value;
    chatBox.appendChild(message);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function showCreateVM() {
  document.getElementById("create-vm").style.display = "block";
}

function createVM() {
  const ip = document.getElementById("vm-ip").value.trim();
  if (!ip.startsWith("http")) {
    alert("Введите корректный IP-адрес с http:// или https://");
    return;
  }
  const iframe = document.getElementById("vnc");
  iframe.src = ip;
}
