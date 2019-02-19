// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
const apiManager = {
    getAllEmployees: () => {
        return fetch("http://localhost:8089/contacts")
            .then(contacts => contacts.json())
    },
    postNewContact: (contactObject) => {
        return fetch("http://localhost:8089/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)

        })
    }
}

export default apiManager;