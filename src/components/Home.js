import React from 'react'
import { Link } from 'react-router-dom'
import { deleteContact } from '../features/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify";
const Home = () => {
  const contactList = useSelector((state) => state.AddContact.contact)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12  d-flex flex-row-reverse mt-3 mb-3">
            <Link to="/add" className="btn mr-auto btn-outline-primary">Add New Contact</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <h3 className="text-center" >Welcome to Modern Redux Contact App</h3>
            <hr></hr>
            <div>
              {
                (contactList.length === 0) ? <h4 className="text-center text-primary " >No Contact Available !!!  <Link to="/add" className="text-success fst-italic text-decoration-none">Add New Contact Now</Link></h4> :
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col" className='text-center' colSpan="2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactList.map((contact, id) => {
                        return (
                          <tr key={id} >
                            <th scope="row">{contact.id+1}</th>
                            <td>{contact.name} </td>
                            <td>{contact.phone} </td>
                            <td>{contact.email}</td>
                            <td>
                              <button onClick={() => {dispatch(deleteContact(contact.id)); toast.success("Contact deleted successfully!!") }} className='btn btn-sm btn-danger' ><i className="bi bi-trash3-fill"></i></button>
                            </td>
                            <td>
                              <Link to={`/edit/${contact.id}`} className="btn btn-sm btn-primary"><i className="bi bi-pencil-square"></i></Link>
                            </td>
                          </tr>
                        )
                      })
                      }
                    </tbody>
                  </table>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home