import axios from "axios";
import {browserHistory} from "react-router";
import {types} from "./types";

//const ROOT_URL = "http://localhost:3090";


const ROOT_URL= `${process.env.IP}:${process.env.PORT}`;

export const setActiveOffer = (offer) => {
    return {
        type: types.SET_ACTIVE_OFFER,
        offer
    };
};

export const setSearchText = (searchText) => {
    return {
        type: types.SET_SEARCH_TEXT,
        searchText
    };
};

export const setFilterType = (filterType) => {
    return {
        type: types.SET_FILTER_TYPE,
        filterType
    };
};

export const fetchOffersSuccess = (offers) => {
    return {
        type: types.FETCH_OFFERS,
        offers
    };
};

export const fetchOffers = () => {

    return (dispatch) => {
        axios.get(`${ROOT_URL}/offers`).then(resp => {
            return dispatch(fetchOffersSuccess(resp));
        });
    };
};

export const deleteOffers = (id) => {

    return (dispatch) => {
        axios.delete(`${ROOT_URL}/${id}`).then(resp => {
            return dispatch(fetchOffersSuccess(resp));
        });
    };
};