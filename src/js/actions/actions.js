import { 
  ADD_FARMER,
  GET_FARMER,
  SEARCH_FARMERS,
  UPDATE_INPUT
 } from "../constants/action-types";


export const addFarmer = (farmer) => { 
    return {
        type: ADD_FARMER, 
        payload: farmer
    }
};

export const getFarmer = (farmer) => {
    return {
        type: GET_FARMER,
        payload: farmer
    }
};

export const searchFarmers = (searchWord ="") => {
    return {
        type: SEARCH_FARMERS,
        payload: searchWord
    }
}

///(input)  ????? (input={} ???????)
export const updateInput = (input) => {
  return {
    type: UPDATE_INPUT,
    payload: {
      firstName: input.firstName,
      lastName: input.lastName,
      phoneNumber: input.phoneNumber,
    }
  }
}
