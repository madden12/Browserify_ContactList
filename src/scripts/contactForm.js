// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
import apiManager from "./contactCollection.js"
import printAllContacts from "./contactForm.js"

// event listener for adding a new contact
const newContact = () => {document.querySelector("#add-btn").addEventListener("click", () => {
    const nameValue = document.querySelector("#name").value;
    const phoneValue = document.querySelector("#phone").value;
    const addressValue = document.querySelector("#address").value;

    const contactToAdd = {
        name: firstNameValue,
        phone: phoneValue,
        address: addressValue
    };
    apiManager.postNewContact(contactToAdd).then(() => {
        printAllContacts();
    });
});
}
export default newContact;
