import { ADD_FARMER } from "../constants/action-types";
import { SELECT_FARMER } from "../constants/action-types";
import { SEARCH_FARMERS } from "../constants/action-types";

export const addFarmer = (farmer) => { 
    console.log("name added: ", farmer.name, farmer.phoneNumber, farmer.gender);
    return {
        type: ADD_FARMER, 
        payload: farmer 
    }
};

export const selectFarmer = (farmer) => {
    console.log("you clicked farmer: ", farmer.name);
    return {
        type: SELECT_FARMER,
        payload: farmer
    }
};

export const searchFarmers = (searchWord ="") => {
    console.log("searchFarmers action");
    return {
        type: SEARCH_FARMERS,
        payload: searchWord
    }
}
