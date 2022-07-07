//HTML ELEMENTS
const flexboxBusiness = document.getElementById("flexboxBusiness");
flexboxBusiness.value = "flexboxBusiness";
const flexboxBusinessBlock = document.getElementById("flexboxBusinessBlock");

const coffeeApp = document.getElementById("coffeeApp");
coffeeApp.value = "coffeeApp";
const coffeeAppBlock = document.getElementById("coffeeAppBlock");

const chatbot = document.getElementById("chatbot");
chatbot.value = "chatbot";
const chatbotBlock = document.getElementById("chatbotBlock");

const elementsObj = {
  "flexboxBusiness": flexboxBusinessBlock,
  "chatbot": chatbotBlock,
  "coffeeApp": coffeeAppBlock
}

function openAndClose(Event) {
  const clickedElement = Event.target;
  const displayBlock = elementsObj[clickedElement.value];

  if (displayBlock.style.display === "none") {
    displayBlock.style.display = "block";
  } else {
    displayBlock.style.display = "none";
  }
}

document.body.addEventListener("click", openAndClose);