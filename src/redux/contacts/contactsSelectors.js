export const selectContacts = state => state.contacts.contacts.items;
console.log(selectContacts)

export const selectFilter = state => state.contacts.value;
console.log(selectFilter)