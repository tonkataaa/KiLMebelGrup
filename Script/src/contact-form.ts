import { initializeApp } from "firebase/app";

import { getDatabase,
    ref, push, onValue, remove } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://kilmebeli-web-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDb = ref(database, "forms");

const sendButton = document.getElementById("send-form") as HTMLButtonElement;

sendButton.addEventListener("click", function(event : Event){
    event.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const topic = document.getElementById("topic") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;
    
    if (name == null || email == null || topic == null || message == null)
    {
        alert("Моля попълнете всички полета!")
        return;
    }

    sendRequest(name.value, email.value, topic.value, message.value)
    clearInputFields(name, email, topic, message);
})

function sendRequest(name: string, email: string, 
    topic: string, message: string) 
{
    const request: ContactRequest = {
    name,
    email,
    topic,
    message
}
    
    push(referenceInDb, request)
    .then(() => {
        alert("Запитването е изпратено успешно! Очаквайте отговор!")
    })
    .catch((error) =>{
        alert("Грешка при изпращане: " + error)
    })
}

function clearInputFields(nameInput: HTMLInputElement, emailInput: HTMLInputElement, 
    topicInput: HTMLInputElement, messageInput: HTMLInputElement) : void {
    nameInput.value = "";
    emailInput.value = "";
    topicInput.value = "";
    messageInput.value = "";
}



interface ContactRequest {
    name: string;
    email: string;
    topic: string;
    message: string;

}