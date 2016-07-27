import React, {PropTypes} from "react";
import OfferSearch from "./OfferSearch";

class OffersMenu extends React.Component {


    render(){
        return(
        <div className="top-menu">
            <ul className="top-buttons">
                <li>SHOW_ALL</li>
                <li>ADD_OFFER</li>
                <li>TOP_ORDERED</li>
            </ul>

           <OfferSearch/>
        </div>);
    }
}

export default OffersMenu;
