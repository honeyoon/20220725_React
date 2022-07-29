
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContactListAction } from '../../modules/contactR';

const GetContactList = () => {
    const {loading, contactList, error} = useSelector(state => state.contactR)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactListAction(1, 10));
    }, [dispatch]);

    return (
        <div>
            {loading && <h1>Loading....</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {contactList && 
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Tel</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList.contacts && contactList.contacts.map(contact => (
                            <tr>
                                <td>{contact.no}</td>
                                <td><Link to={"/getContact/" + contact.no}>{contact.name}</Link></td>
                                <td>{contact.tel}</td>
                                <td>{contact.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default GetContactList
