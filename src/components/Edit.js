import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateContact } from '../features/contactSlice'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom';
const EditContacts = () => {
  const dispatch = useDispatch()
  const history = useNavigate();
  const { id } = useParams()
  const contactList = useSelector((state) => state.AddContact.contact)
  const currentContact = contactList.find(contact => contact.id === parseInt(id))
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name)
      setEmail(currentContact.email)
      setPhone(currentContact.phone)
    }
  }, [currentContact])
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contactList.filter((contact) =>
      contact.id !== parseInt(id) && contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contactList.filter((contact) =>
      contact.id !== parseInt(id) && contact.phone === phone ? contact : null
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
      id: parseInt(id),
      email,
      name,
      phone,
    };
    dispatch(updateContact(data))
    toast.success("Contact Updated successfully!!");
    history('/')
  }
  return (
    <div>
      {currentContact ? 
        <>
          <h1 className='text-center mt-5' >Edit Contact {id}</h1>
          <div className="col-md-4 shadow mt-5 mx-auto">
            <div className="p-5" >
              <div className="form-group">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="form-control mt-2" />
              </div>
              <div className="form-group mt-2">
                <input type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="form-control" />
              </div>
              <div className="form-group mt-2">
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' className="form-control" />
              </div>
              <div className="form-group mt-4 d-flex justify-content-between ">
                <button type="submit" onClick={handleSubmit} value="Update Contact" className="btn-sm mr-5 btn btn-primary">Update</button>
                <button onClick={() => history('/')} className="btn-sm btn btn-danger" > Cancel </button>
              </div>
            </div>
          </div>
        </>
       : 
        <h1 className='text-center mt-5' > Student With ID {id} does not exist !</h1>
      }
    </div>
  )
}
export default EditContacts