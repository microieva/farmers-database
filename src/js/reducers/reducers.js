import { 
  ADD_MEMBER,
  GET_MEMBER,
  SEARCH_MEMBERS 
} from "../constants/action-types";

const initialState = {
    members: [],
    searchWord: '',
    selectedMember: null,
    filteredMembers: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEMBER:
            return { ...state, members: [...state.members, action.payload] };

        case GET_MEMBER: 
            return { ...state, selectedMember: action.payload };
        
        case SEARCH_MEMBERS: 
            return {...state, searchWord: action.payload };
        
        default:
            return state;
    }

};

export default reducers;

