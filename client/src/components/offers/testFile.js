import React from "react";
import {connect} from 'react-redux';

class TestFile extends React.Component {
    constructor(props) {
        super(props);
    }

        render(){
            return(
              <div> Just Testing File! </div>

            )
        }
}

function test(){
  console.log("No conflicting change in master!!!");
}

export default TestFile;
