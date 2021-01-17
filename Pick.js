var pickComponent = "";

pick = (self) => {
  if (pickComponent != "" && pickComponent != self) {
    document.getElementById(pickComponent.id).style.backgroundColor = "white";
    document.getElementById(pickComponent.id).removeAttribute("style");
  }
  pickComponent = self;
  document.getElementById(pickComponent.id).style.backgroundColor = "gray";
  if (document.getElementById("_input_div").style.visibility === "visible") {
    document.getElementById("_input_title").value =
      pickComponent.firstElementChild.textContent;
    document.getElementById("_input_content").value =
      pickComponent.lastElementChild.textContent;
  }
};
