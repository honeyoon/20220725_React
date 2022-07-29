// ListContainer.js

import React, {useEffect} from 'react'
import ContactGetList from './../components/Contact/ContactGetList'
import { getContactListAction } from './../modules/contactR'
import { useDispatch, useSelector } from 'react-redux'

function ListContainer() {
  const {loading, contactList, error} = useSelector(state => state.contactR)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactListAction(1, 10));
  }, [dispatch]);

  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {contactList && <ContactGetList contactList={contactList} />}
    </div>
  )
}

export default ListContainer