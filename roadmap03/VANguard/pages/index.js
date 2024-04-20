document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("topic")) {
    return;
  }

  // Get topic id
  var topicId = e.target.getAttribute("id");

  window.location.href = topicId + ".html";
  
});
