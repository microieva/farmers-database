import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux'

import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_LIST,
  GET_LIST,
  DELETE_MEMBER
} from "../constants/action-types";

const initialState = {
    members: [],
    searchWord: '',
    selectedMember: null,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEMBER:
            return { 
              ...state, 
              members: [...state.members, action.payload]
            };

        case GET_MEMBER: 
            return { 
              ...state, 
              selectedMember: action.payload 
            };
        
        case DELETE_MEMBER:
            return {
              ...state,
              members: state.members.filter((member) => member.id !== action.payload.id),
              selectedMember: null,
            }
        
        case SEARCH_LIST:
          const searchWord = action.payload;
          return {
            ...state, 
            selectedMember: null,
            searchWord
          };
        
        case GET_LIST:
          return { 
            members: action.payload 
          } 
        
        default:
          return state;
    }
};

export default combineReducers(
  {
    main: reducers,
    form: formReducer
  }
);

