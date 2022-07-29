
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { addContactAction, changeContactAction, setContactAction } from './../../modules/contactR'

function AddContact() {
    
    const {contact} = useSelector(state => state.contactR);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const changeValue = (name, value) => {
        dispatch(changeContactAction(name, value))
    }
    
    // 들어올때마다 값을 빈 값으로 초기화. 한번만 실행하도록 [] 추가 - 이 []를 추가 안했음
    useEffect(() => {
        dispatch(setContactAction());
    }, [dispatch]);

    const addContact = () => {
        dispatch(addContactAction(contact));
        navigate('/getContactList');
    }

    /*
    const [contact, setContact] = useState({name: '', tel: '', address: ''});
    const changeText = evt => setContact({...contact, [evt.target.name]: evt.target.value})

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addContact = () => {
        dispatch(addContactAction(contact));
        navigate('/getContactList');
    }
    */

    return (
        <div>
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name"
                value={contact.name} onChange={evt => changeValue(evt)} />
            Tel: <input type="text" className="form-control" name="tel"
                value={contact.tel} onChange={evt => changeValue(evt)} />
            Address: <input type="text" className="form-control" name="address" 
                value={contact.address} onChange={evt => changeValue(evt)} />
            <br />
            <button className="btn btn-outline-primary" onClick={addContact}>ADD</button>
        </div>
    )
}

export default AddContact
