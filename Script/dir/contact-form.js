"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
const firebaseConfig = {
    databaseURL: "https://kilmebeli-web-default-rtdb.europe-west1.firebasedatabase.app/"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const database = (0, database_1.getDatabase)(app);
const referenceInDb = (0, database_1.ref)(database, "forms");
const sendButton = document.getElementById("send-form");
sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const topic = document.getElementById("topic");
    const message = document.getElementById("message");
    if (name == null || email == null || topic == null || message == null) {
        alert("Моля попълнете всички полета!");
        return;
    }
    sendRequest(name.value, email.value, topic.value, message.value);
    clearInputFields(name, email, topic, message);
});
function sendRequest(name, email, topic, message) {
    const request = {
        name,
        email,
        topic,
        message
    };
    (0, database_1.push)(referenceInDb, request)
        .then(() => {
        alert("Запитването е изпратено успешно! Очаквайте отговор!");
    })
        .catch((error) => {
        alert("Грешка при изпращане: " + error);
    });
}
function clearInputFields(nameInput, emailInput, topicInput, messageInput) {
    nameInput.value = "";
    emailInput.value = "";
    topicInput.value = "";
    messageInput.value = "";
}
