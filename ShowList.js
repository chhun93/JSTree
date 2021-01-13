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

  document.querySelector(".tree").appendChild(div);
  createCount++;
};
