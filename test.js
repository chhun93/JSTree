function testClick() {
  const target = document.querySelector("body");
  console.log(target.style.backgroundColor);
  if (
    target.style.backgroundColor === "white" ||
    target.style.backgroundColor === ""
  ) {
    target.style.backgroundColor = "black";
  } else {
    target.style.backgroundColor = "white";
  }
}
