var pickComponent = "";

var body = document.querySelector("body");
body.addEventListener("click", clickBody);

function clickBody(event) {
  var target = event.target;
  
  if (target.className != "tree") {
    if(target.parentNode.className==="tree"){
      var targetParent = target.parentNode
      pickTreeComponent(targetParent);
      return;
    }
    if (pickComponent != "") {
      document.getElementById(pickComponent.id).style.backgroundColor = "white";
      document.getElementById(pickComponent.id).removeAttribute("style");
      pickComponent = "";
    }
  } else {
    pickTreeComponent(target);
  }
}

pickTreeComponent = (self) => {
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
