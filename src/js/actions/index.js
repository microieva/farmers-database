import { reset } from 'redux-form';
import { v4 as uuidv4 } from 'uuid'

import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_LIST,
  GET_LIST,
  DELETE_MEMBER
} from "../constants/action-types";


export const addMember = () => {
  return (dispatch, getState) => {
    const form = getState().form;
    const id = uuidv4()
    const member = {
      id: id,
      firstName: form.member.values.firstName,
      lastName: form.member.values.lastName,
      phoneNumber: form.member.values.phoneNumber,
      gender: form.member.values.gender
    };
    dispatch({
      type: ADD_MEMBER,
      payload: member,
    });
    dispatch(reset('member'))
  }
}

export const getMember = (member) => {
    return {
        type: GET_MEMBER,
        payload: member
    }
};

export const deleteMember = (member) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_MEMBER,
      payload: member
    })  
  }
}

export const searchList = (searchTerm) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_LIST,
      payload: searchTerm
    })
  }
}

export const getList = (members) => {
  return {
    type: GET_LIST,
    payload: members
  }
}

