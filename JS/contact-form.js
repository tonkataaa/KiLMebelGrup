import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getDatabase,
    ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://kilmebeli-web-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDb = ref(database, "forms")

console.log(referenceInDb)
const sendButton = document.getElementById("send-form")

sendButton.addEventListener("click", function(event){
    event.preventDefault(); 

    const nameValue = document.getElementById("name").value
    const emailValue = document.getElementById("email-input").value
    const topicValue = document.getElementById("topic").value
    const messageValue = document.getElementById("message").value

    sendRequest(nameValue, emailValue, topicValue, messageValue)
    clearInputFields(nameValue, emailValue, topicValue, messageValue)
})

function sendRequest(name, email, topic, message) {
    let contactRequest = {
        name: name,
        email: email,
        topic: topic,
        message: message
    }

    
    push(referenceInDb, contactRequest)
    .then(() => {
        alert("Запитването е изпратено успешно! Очаквайте отговор!")
    })
    .catch((error) =>{
        alert("Грешка при изпращане: " + error)
    })

    clearInputFields()
}

function clearInputFields(nameInput, emailInput, topicInput, messageInput) {
    nameInput.value = ""
    emailInput.value = ""
    topicInput.value = ""
    messageInput.value = ""
}