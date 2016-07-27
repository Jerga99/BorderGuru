import {types} from "../actions/types";


export const offersReducer = (state = [], action) => {

    switch(action.type){
        case types.FETCH_OFFERS:
            return action.offers;
        default:
            return state;
    }
}

export const activeOfferRedcer = (state = {}, action) => {

    switch(action.type){
        case types.SET_ACTIVE_OFFER:
            return action.offer;
        default:
            return state;
    }
}