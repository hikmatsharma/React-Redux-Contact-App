import { createSlice } from "@reduxjs/toolkit";
if(JSON.parse(localStorage.getItem("contactAdded")) == null){
    localStorage.setItem("contactAdded", JSON.stringify([]))
}
const contactData =JSON.parse(localStorage.getItem("contactAdded"))   
 const initialState = {
    contact : contactData
 }
export const ContactSlice = createSlice({
    name: "addContact",
    initialState,
    reducers: {
        addContact: (state, action)=>{
        state.contact.push(action.payload)
        localStorage.setItem("contactAdded", JSON.stringify(state.contact));
        },
        updateContact: (state, action)=>{
            const updatestate = state.contact.map(contact=>contact.id === action.payload.id? action.payload : contact )
            state.contact = updatestate
            localStorage.setItem("contactAdded", JSON.stringify(state.contact));
        },
        deleteContact:(state, action)=>{
            const filterContacts = state.contact.filter(contact=>contact.id !== action.payload  )
            state.contact =  filterContacts
            localStorage.setItem("contactAdded", JSON.stringify(state.contact));
        }
    },
})
export const {addContact, updateContact, deleteContact} = ContactSlice.actions
export default ContactSlice.reducer