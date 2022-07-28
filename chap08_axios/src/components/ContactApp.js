import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import ContactHeader from "./Contact/ContactHeader";
import ContactHome from "./Contact/ContactHome";
import AddContact from "./Contact/AddContact";
import UpdateContact from "./Contact/UpdateContact";
import GetContact from "./Contact/GetContact";
import GetContactList from "./Contact/GetContactList";

function ContactApp() {
  const baseURL = "http://localhost:8000/contacts/";
  const [contactList, setContactList] = useState({pageno: '', pagesize: '', totalcount: '', contacts: []});
  const [contact, setContact] = useState({no: '', name: '', tel: '', address: '', photo: ''});
  const navigate = useNavigate();
  
  const getContactList = async (no=1, size=10) => {
    try {
      const resp = await axios.get(baseURL, {params: {pageno: no, pagesize: size}});
      setContactList(resp.data);
    } catch(err) {
      console.error(err);
    }
  }
  const getContact = async no => {
    try {
      const resp = await axios.get(baseURL + no);
      setContact(resp.data);
      navigate('/getContact')
    } catch(err) {
      console.error(err);
    }
  }
  const deleteContact = useCallback(async no => {
    try {
      await axios.delete(baseURL + no);
      navigate('/getContactList');
      getContactList(1, 10);
    } catch(err) {
      console.error(err);
    }
  }, [navigate]);

  const updateContact = useCallback(async data => {
    try {
      await axios.put(baseURL + data.no, data);
      navigate('/getContactList');
      getContactList(1, 10);
    } catch(err) {
      console.error(err);
    }
  }, [navigate]);

  const addContact = useCallback(async data => {
    try {
      await axios.post(baseURL, data);
      navigate('/getContactList');
      getContactList(1, 10);
    } catch(err) {
      console.error(err);
    }
  }, [navigate]);

  const changeContact = useCallback(evt => {
    setContact(contact => ({...contact, [evt.target.name]: evt.target.value}))
  }, []);

  const goUpdate = () => navigate('/updateContact');

  useEffect(() => {
    getContactList(1, 10);
  }, []);

  return (
    <div>
      <ContactHeader />
      <br />

      <Routes>
        <Route path="/"                 element={<ContactHome />} />
        <Route path="/getContactList"   element={<GetContactList contactList={contactList} getContact={getContact} />} />
        <Route path="/getContact"       element={<GetContact contact={contact} goUpdate={goUpdate} deleteContact={deleteContact} />} />
        <Route path="/addContact"       element={<AddContact 
                  contact={contact} setContact={setContact} changeContact={changeContact} addContact={addContact} />} />
        <Route path="/updateContact"    element={<UpdateContact 
                  contact={contact} changeContact={changeContact} updateContact={updateContact} />} />
        <Route path="*"                 element={<h3>Not Found</h3>} />
      </Routes>
    </div>
  );
}
export default ContactApp;
