
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { addContactAction, changeContactAction, setContactAction } from './../../modules/contactR'

function AddContact() {
    
    const {contact} = useSelector(state => state.contactR);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const changeValue = evt => {
        dispatch(changeContactAction(evt))
    }
    useEffect(() => {
        dispatch(setContactAction());
    });

    const addContact = () => {
        dispatch(addContactAction(contact));
        navigate('/getContactList');
    }

    return (
        <div>
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name"
                value={contact.name && contact.name} onChange={evt => changeValue(evt)}/>
            Tel: <input type="text" className="form-control" name="tel"/>
            Address: <input type="text" className="form-control" name="address" />
            <br />
            <button className="btn btn-outline-primary" onClick={addContact}>ADD</button>
        </div>
    )
}

export default AddContact
