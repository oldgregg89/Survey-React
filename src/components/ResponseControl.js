import React from "react";
import {connect} from "react-redux";
import { withFirestore } from 'react-redux-firebase';
import Response from "./Response";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import * as a from './../actions';

class ResponseControl extends React.Component {

    constructor(props) {
      this.state = {
    //     formvisableOnPage: false,
    //     masterResponseList: [],
        selectedResponse: null,
        editing: false,
    }
   

    handleChangingSelectedResponse = (id) => {
        this.props.firestore.get({collection: 'responses', doc: id}).then((response) =>
          const firestoreResponse = {
              
          }
        this.setState({ selectedResponse: firestoreResponse });
    });
} 
export default withFirestore(ResponseControl);