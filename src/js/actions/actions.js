import { ADD_FARMER } from "../constants/action-types";
import { SELECT_FARMER } from "../constants/action-types";
import { SEARCH_FARMERS } from "../constants/action-types";

export const addFarmer = (farmer) => { 
    return {
        type: ADD_FARMER, 
        payload: farmer 
    }
};

export const selectFarmer = (farmer) => {
    return {
        type: SELECT_FARMER,
        payload: farmer
    }
};

export const searchFarmers = (searchWord ="") => {
    return {
        type: SEARCH_FARMERS,
        payload: searchWord
    }
}
