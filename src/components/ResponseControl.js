// import React from "react";
// import {connect} from "react-redux";
// import Response from "./Response";
// import PropTypes from "prop-types";
// import Button from 'react-bootstrap/Button';
// import * as a from './../actions';
// import { withFirestore } from 'react-redux-firebase';

// class ResponseControl extends React.Component {

//     constructor(props) {
//       this.state = {
//     //     formvisableOnPage: false,
//     //     masterResponseList: [],
//         selectedResponse: null,
//         editing: false
//     };
   

//     handleChangingSelectedResponse = (id) => {
//         this.props.firestore.get({collection: 'responses', doc: id}).then((response) =>{
//           const firestoreResponse = {
//               ...response.data(),
//               id: response.id
//           }
//         this.setState({ selectedResponse: firestoreResponse });
//     };

// //     render(){
// //         let currentlyVisibleState = null;
// //     }
// // } 
// // ResponseControl = connect(  )(ResponseControl);
// // export default withFirestore(ResponseControl);