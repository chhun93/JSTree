var pickComponent = "";

pick = (self) => {
  console.log(self);
  if (pickComponent != "" && pickComponent != self) {
    document.getElementById(pickComponent.id).style.backgroundColor = "white";
    document.getElementById(pickComponent.id).removeAttribute("style");
  }
  pickComponent = self;
  document.getElementById(pickComponent.id).style.backgroundColor = "gray";
};
