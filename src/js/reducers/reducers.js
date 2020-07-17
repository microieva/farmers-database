import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { 
  ADD_FARMER,
  GET_FARMER,
  SEARCH_FARMERS,
  UPDATE_INPUT
} from "../constants/action-types";


/*const reducers = combineReducers({
    farmers: addFarmer,
    activeFarmer: selectFarmer,
    searchFarmers: searchFarmers
});

export default reducers;*/


const initialState = {
    farmers: [],
    searchWord: '',
    selectedFarmer: null,
    filteredFarmers: [],
    input: {}
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FARMER:
            return { ...state, farmers: [...state.farmers, action.payload] };

        case GET_FARMER: 
            return { ...state, selectedFarmer: action.payload };
        
        case SEARCH_FARMERS: 
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

