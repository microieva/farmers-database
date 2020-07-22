import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_MEMBERS,
  GET_LIST 
} from "../constants/action-types";

// export const addMember = (member) => { 
//     return {
//         type: ADD_MEMBER, 
//         payload: member 
//     }
// };

export function addMember() {
  return (dispatch, getState) => {
    const form = getState().form;
    const member = {
      firstName: form.member.firstName.value,
      lastName: form.member.lastName.value,
      phoneNumber: form.member.phoneNumber.value,
      gender: form.member.gender.value
    };
    dispatch({
      type: ADD_MEMBER,
      payload: member,
    });
  }
}

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

export const getList = (members) => {
  return {
    type: GET_LIST,
    payload: members
  }
}
