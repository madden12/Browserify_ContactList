// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
import apiManager from "./contactCollection.js"
import buildSingleContact from "./contact.js"

const printAllContacts = () => {
    document.querySelector("#contact_container").innerHTML = "";
    apiManager.getAllEmployees()
    .then((parsedContacts) => {
        parsedContacts.forEach(singleContact => {
            document.querySelector("#contact_container").innerHTML += buildSingleContact(singleContact)

        })
    })
}
export default printAllContacts;