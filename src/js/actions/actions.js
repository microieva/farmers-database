import { reset } from 'redux-form';

import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_LIST,
  GET_LIST,
} from "../constants/action-types";


export const addMember = () => {
  return (dispatch, getState) => {
    const form = getState().form;
    console.log("form from addMember:", form)
    const member = {
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
