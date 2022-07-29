import { handleActions } from "redux-actions";
import axios from "axios";
import produce from 'immer'

// key는 유니크해야 한다.
const GET_CONTACTLIST = "CONTACT/GET_CONTACTLIST";
const GET_CONTACTLIST_SUCCESS = "CONTACT/GET_CONTACTLIST_SUCCESS";
const GET_CONTACTLIST_FAILURE = "CONTACT/GET_CONTACTLIST_FAILURE";

const GET_CONTACT = "CONTACT/GET_CONTACT";
const GET_CONTACT_SUCCESS = "CONTACT/GET_CONTACT_SUCCESS";
const GET_CONTACT_FAILURE = "CONTACT/GET_CONTACT_FAILURE";

const ADD_CONTACT = "CONTACT/ADD_CONTACT";
const ADD_CONTACT_SUCCESS = "CONTACT/ADD_CONTACT_SUCCESS";
const ADD_CONTACT_FAILURE = "CONTACT/ADD_CONTACT_FAILURE";

const CHANGE_TEXT = 'CONTACT/CHANGE_TEXT';
const SET_CHANGE_TEXT = 'CONTACT/SET_CHANGE_TEXT';

const baseURL = "http://localhost:8000/contacts/";
const baseLONG = "http://localhost:8000/contacts_long/";

// Action
export const getContactListAction = (no=1, size=10) => async dispatch => {
  try {
    await dispatch({type: GET_CONTACTLIST})
    const resp = await axios.get(baseLONG, {params: {pageno: no, pagesize: size}});
    await dispatch({type: GET_CONTACTLIST_SUCCESS, payload: resp.data});
  } catch(err) {
    await dispatch({type: GET_CONTACTLIST_FAILURE, payload: err})
  }
}
export const getContactAction = no => async dispatch => {
  try {
    await dispatch({type: GET_CONTACT})
    const resp = await axios.get(baseURL + no);
    await dispatch({type: GET_CONTACT_SUCCESS, payload: resp.data});
  } catch(err) {
    await dispatch({type: GET_CONTACT_FAILURE, payload: err})
  }
}

export const addContactAction = data => async dispatch => {
  try {
    await dispatch({type: ADD_CONTACT})
    const resp = await axios.post(baseURL, data);
    await dispatch({type: ADD_CONTACT_SUCCESS, payload: resp.data});
  } catch(err) {
    await dispatch({type: ADD_CONTACT_FAILURE, payload: err})
  }
}

export const changeContactAction = evt => ({type: CHANGE_TEXT, payload: evt.target})
export const setContactAction = () => ({type: SET_CHANGE_TEXT})

const init = {
  loading: false,
  contactList: null,
  contact: {no: '', name: '', tel: '', address: '', photo: ''},
  error: null,
};
const contactR = handleActions(
  {
    // Get List
    [GET_CONTACTLIST]: (state, action) => {
      return {
        ...state, 
        loading: true,
        contactList: null,
        error: null,
      }
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.loading = false;
        draft.contactList = action.payload;
        draft.error = null;
      })
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.loading = false;
        draft.contactList = null;
        draft.error = action.payload;
      })
    },
    // Get
    [GET_CONTACT]: (state, action) => {
      return produce(state, draft => {
        draft.loading = true;
        draft.contact = null;
        draft.error = null;
      })
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.loading = false;
        draft.contact = action.payload;
        draft.error = null;
      })
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.loading = false;
        draft.contact = null;
        draft.error = action.payload;
      })
    },
    // Add
    [ADD_CONTACT]: (state, action) => {
      return produce(state, draft => {
        draft.loading = true;
        draft.contact = null;
        draft.error = null;
      })
    },
    [ADD_CONTACT_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.loading = false;
        draft.error = null;
      })
    },
    [ADD_CONTACT_FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.loading = false;
        draft.error = action.payload;
      })
    },
    [CHANGE_TEXT]: (state, action) => {
      console.log(action)
      // return produce(state, draft => {
      //   draft.contact[action.payload.name] = action.payload.value;
      // });
      return {
        ...state,
        contact: state.contact['name'] = 'ddd'
      }
    },
    [SET_CHANGE_TEXT]: (state, action) => {
      return produce(state, draft => {
        draft.contact.name = '';
        draft.contact.tel = '';
        draft.contact.address = '';
      });
    }
  },
  init
);
export default contactR;
