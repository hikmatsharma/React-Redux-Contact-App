import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../features/contactSlice'
import { useState } from 'react'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const NewContact = () => {
  const dispatch = useDispatch()
  const history = useNavigate();
  const contactList = useSelector((state) => state.AddContact.contact)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contactList.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contactList.filter((contact) =>
      contact.phone === phone ? contact : null
    );
    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }
    const data = {
      id: contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 0,
      email,
      name,
      phone,
    };
    dispatch(addContact(data))
    toast.success("Contact added successfully!!");
    history('/')
  }
  return (
    <div>
      <h1 className='text-center mt-5' >Add Contact</h1>
      <div className="col-md-4 shadow mt-5 mx-auto">
        <div className="p-5" >
          <div className="form-group">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' className="form-control mt-2" />
          </div>
          <div className="form-group mt-2">
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="form-control" />
          </div>
          <div className="form-group mt-2">
            <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder='Phone' className="form-control" />
          </div>
          <div className="form-group mt-4 d-flex justify-content-between ">
            <input type="submit" onClick={handleSubmit} value="Add Contact" className="btn btn-sm me-2 btn-primary" />
            <button onClick={() => history('/')} className="btn-sm btn btn-danger  " > Cancel </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewContact