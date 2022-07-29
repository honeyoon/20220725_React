import React, { useCallback } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import ContactHeader from './Contact/ContactHeader'
import ContactHome from './Contact/ContactHome'
import ContactAdd from './Contact/ContactAdd'
import ContactUpdate from './Contact/ContactUpdate'
import ContactGet from './Contact/ContactGet'
// import ContactGetList from './Contact/ContactGetList'
import ListContainer from './../container/ListContainer'

function ContactApp() {

    const navigate = useNavigate();
    const goUpdate = useCallback(() => navigate('/updateContact'), [navigate]);

    return (
        <div>
            <ContactHeader />
            <br />
            
            <Routes>
                <Route path="/"                 element={<ContactHome />}/>
                {/* container로 변경 */}
                <Route path="/getContactList"   element={<ListContainer /> } />
                <Route path="/getContact"       element={<ContactGet goUpdate={goUpdate} />} />
                <Route path="/addContact"       element={<ContactAdd /> } />
                <Route path="/updateContact"    element={<ContactUpdate />} />
                <Route path="*"                 element={<h3>Not Found</h3>} />
            </Routes>
        </div>
    )
}

export default ContactApp
