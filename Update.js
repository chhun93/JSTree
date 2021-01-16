const ClickUpdateText = (inputDiv) => {
  if (pickComponent != "") {
    if (
      inputDiv.style.visibility === "visible" &&
      document.getElementById("_input_confirm").value === "UPDATE"
    ) {
      inputDiv.style.visibility = "collapse";
    } else {
      inputDiv.style.visibility = "visible";
      document.getElementById("_input_confirm").value = "UPDATE";
    }
    pick(pickComponent);
  }
};
