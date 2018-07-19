var socket = io()
socket.on("message", post);
document.getElementById("form").addEventListener("submit", Say);
function Say(e){
  e.preventDefault();

  var text = document.getElementById("textBox").value;
  socket.emit("message", text);
}
function post(string){
  var post = document.createElement("li");
  post.innerHTML = string;
  document.getElementById("chat").appendChild(post);
}
