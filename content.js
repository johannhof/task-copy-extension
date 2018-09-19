let input = document.createElement("textarea");
let text = `- Bug ${document.title}\n  - ${document.location.href}`;
input.value = text;
input.style.width = "0px";
input.style.height = "0px";
input.style.opacity = "0";
let button = document.createElement("button");
button.textContent = "Copy Name and URL";
button.setAttribute("type", "button");
button.className = "minor";
button.addEventListener("click", function(e) {
    input.focus();
    input.setSelectionRange(0, text.length);
    document.execCommand("copy");
    e.preventDefault();
});
let buttonRow = document.querySelector(".button-row");
buttonRow.insertBefore(button, buttonRow.firstChild);
buttonRow.insertBefore(input, buttonRow.firstChild);
