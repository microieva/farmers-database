import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux'

import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_LIST,
  GET_LIST,
} from "../constants/action-types";

const initialState = {
    members: [],
    searchWord: '',
    selectedMember: null,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEMBER:
            return { ...state, members: [...state.members, action.payload]};

        case GET_MEMBER: 
            return { ...state, selectedMember: action.payload };
        
        case SEARCH_LIST:
          const searchWord = action.payload;
          console.log(searchWord)
          return {
            ...state, 
            searchWord
          };
        
        case GET_LIST:
          return { members: action.payload } 
        
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

