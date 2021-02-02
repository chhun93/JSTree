const ClickCreateText = (inputDiv) => {
  if (pickComponent != "") {
    document.getElementById(pickComponent.id).style.backgroundColor = "white";
    document.getElementById(pickComponent.id).removeAttribute("style");
    pickComponent = "";
  }
  if (inputDiv.style.visibility === "visible") {
    inputDiv.style.visibility = "collapse";
  } else {
    document.getElementById("_input_confirm").value = "CREATE";
    inputDiv.style.visibility = "visible";
    document.getElementById("_input_title").value = "";
    document.getElementById("_input_content").value = "";
  }
};
