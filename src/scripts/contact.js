// A Contact component that displays a person's name, phone number, and address.
const buildSingleContact = (singleContactObject) => {
    return `<div class="task" id="task-${singleContactObject.id}">
      <label> 
    <span>${singleContactObject.name}</span>
        </label>
        <p>${singleContactObject.phone}</p>
        <p>${singleContactObject.address}</p>
`}
export default buildSingleContact;