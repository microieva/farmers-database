import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_MEMBERS,
  UPDATE_INPUT
 } from "../constants/action-types";


export const addMember = (member) => { 
    return {
        type: ADD_MEMBER, 
        payload: member
    }
};

export const getMember = (member) => {
    return {
        type: GET_MEMBER,
        payload: member
    }
};

export const searchMembers = (searchWord ="") => {
    return {
        type: SEARCH_MEMBERS,
        payload: searchWord
    }
}

///(input)  ????? (input={} ???????)
export const updateInput = (input) => {
  return {
    type: UPDATE_INPUT,
    payload: {
      firstName: input.firstName,
      lastName: input.lastName,
      phoneNumber: input.phoneNumber,
    }
  }
}
