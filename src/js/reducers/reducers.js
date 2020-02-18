import { ADD_FARMER } from "../constants/action-types";
import { SELECT_FARMER } from "../constants/action-types";
import { SEARCH_FARMERS } from "../constants/action-types";


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
    filteredFarmers: []
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FARMER:
            return { ...state, farmers: [...state.farmers, action.payload] };

        case SELECT_FARMER: 
            return { ...state, selectedFarmer: action.payload };
        
        case SEARCH_FARMERS: 
            return {...state, searchWord: action.payload };
        
        default:
            return state;
    }

};

export default reducers;

