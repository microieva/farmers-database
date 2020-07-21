import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_MEMBERS,
  UPDATE_INPUT
} from "../constants/action-types";


/*const reducers = combineReducers({
    members: addmember,
    activemember: selectmember,
    searchmembers: searchmembers
});

export default reducers;*/


const initialState = {
    members: [],
    searchWord: '',
    selectedMember: null,
    filteredMembers: [],
    input: {}
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEMBER:
            return { ...state, members: [...state.members, action.payload] };

        case GET_MEMBER: 
            return { ...state, selectedMember: action.payload };
        
        case SEARCH_MEMBERS: 
            return {...state, searchWord: action.payload };
        
        case UPDATE_INPUT:
            return {input: action.payload}
        
        default:
            return state;
    }

};

export default combineReducers(
  {
    reducers: reducers,
    form: formReducer
  }
);

