import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getContactAction } from '../../modules/contactR';

function AddContact() {
    const {loading, contact, error} = useSelector(state => state.contactR)
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getContactAction(params.no));
    }, [dispatch, params]);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {contact && 
                <>
                <h3>Get Contact</h3>

                <div>
                    Name: <input type="text" className="form-control" disabled  defaultValue={contact.name} />
                    Tel: <input type="text" className="form-control" disabled   defaultValue={contact.tel}/>
                    Address: <input type="text" className="form-control" disabled defaultValue={contact.address}/>
                </div>
                <br />
                <button className="btn btn-outline-primary">수정</button>
                <button className="btn btn-outline-primary">삭제</button>
                </>
            }
        </div>
    )
}

export default AddContact
