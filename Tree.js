var createCount = 0;

click_ok = (title, content) => {
  const what = document.getElementById("_input_confirm").value;
  if (what === "CREATE") {
    create_div(title, content);
  } else if (what === "UPDATE") {
    update_div(title, content);
  }
  document.getElementById("_input_title").value = "";
  document.getElementById("_input_content").value = "";
  document.getElementById("_input_div").style.visibility = "collapse";
};

create_div = (title, content) => {
  if (title === "" || content === "") return;

  var div = document.createElement("div");
  var divTitle = document.createElement("h2");
  var divContent = document.createElement("p");
  var divTitleValue = document.createTextNode(`${title}`);
  var divContentValue = document.createTextNode(`${content}`);
  
  divTitle.appendChild(divTitleValue);
  divContent.appendChild(divContentValue);

  div.id = `treeContent${createCount}`;
  div.className = "tree";
  div.appendChild(divTitle);
  div.appendChild(divContent);

  if (pickComponent === "") {
    document.querySelector("body").appendChild(div);
  } else {
    document.querySelector(`#${pickComponent.id}`).appendChild(div);
  }
  createCount++;
};

update_div = (title, content) => {
  if (title === "" || content === "") return;

  pickComponent.firstElementChild.textContent = title;
  pickComponent.lastElementChild.textContent = content;
};

delete_div = () => {
  document.querySelector("body").removeChild(pickComponent);
  pickComponent = "";
};
