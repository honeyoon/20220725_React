
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { addContactAction, changeContactAction, setContactAction } from './../../modules/contactR'

function AddContact() {
    /*
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
    */

    const [contact, setContact] = useState({name: '', tel: '', address: ''});
    const changeText = evt => setContact({...contact, [evt.target.name]: evt.target.value})

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addContact = () => {
        dispatch(addContactAction(contact));
        navigate('/getContactList');
    }

    return (
        <div>
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name"
                value={contact.name} onChange={changeText} />
            Tel: <input type="text" className="form-control" name="tel"
                value={contact.tel} onChange={changeText}/>
            Address: <input type="text" className="form-control" name="address" 
                value={contact.address} onChange={changeText}/>
            <br />
            <button className="btn btn-outline-primary" onClick={addContact}>ADD</button>
        </div>
    )
}

export default AddContact
