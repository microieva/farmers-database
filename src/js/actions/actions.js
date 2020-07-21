import { 
  ADD_MEMBER,
  SELECT_MEMBER,
  SEARCH_MEMBERS 
} from "../constants/action-types";

export const addMember = (member) => { 
    return {
        type: ADD_MEMBER, 
        payload: member 
    }
};

export const selectMember = (member) => {
    return {
        type: SELECT_MEMBER,
        payload: member
    }
};

export const searchMembers = (searchWord ="") => {
    return {
        type: SEARCH_MEMBERS,
        payload: searchWord
    }
}
