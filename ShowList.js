var createCount = 0;

add_div = (title, content) => {
  if (title === "" || content === "") return;

  var div = document.createElement("div");
  var divTitle = document.createElement("h2");
  var divContent = document.createElement("p");
  var divTitleValue = document.createTextNode(`${title}`);
  var divContentValue = document.createTextNode(`${content}`);

  divTitle.appendChild(divTitleValue);
  divContent.appendChild(divContentValue);

  div.id = `treeContent${createCount}`;
  div.appendChild(divTitle);
  div.appendChild(divContent);
  div.onclick = () => pick(div);

  if (pickComponent === "") {
    document.querySelector(".tree").appendChild(div);
  } else {
    document.querySelector(`#${pickComponent.id}`).appendChild(div);
  }
  createCount++;
};
