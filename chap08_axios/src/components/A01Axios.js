import React, { useState } from "react";
import axios from 'axios'

function A01Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState({});

  const getContactList = (no, size) => {
    axios.get(baseURL)
      .then(resp => {
        // console.log(resp.data)
        setData(resp.data);
      })
      .catch(err => console.error(err))
  }

  const getContact = (no) => {
    // "http://localhost:8000/contacts/" + no
    axios.get(baseURL + no)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h3>A01 Axios GET</h3>
      <button   onClick={getContactList}>DATA LIST</button>
      <button>DATA LIST ASYNC</button>
      <button   onClick={() => getContact(100)}>GET</button>
      <button>ADD</button>
      <button>UPDATE</button>
      <button>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15"  defaultValue={JSON.stringify(data, '', 4)}></textarea>
    </div>
  );
}
export default A01Axios;
