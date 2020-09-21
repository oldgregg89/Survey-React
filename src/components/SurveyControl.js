import React from "react";
import NewSurveyForm from "./NewSurveyForm";
import SurveyList from "./SurveyList";
import SurveyDetail from "./SurveyDetail";
import SurveyEditForm from './SurveyEditForm';
import Button from 'react-bootstrap/Button';

class SurveyControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formvisableOnPage: false,
      masterSurveyList: [],
      selectedSurvey: null,
      editing: false,
    };
  }

  handleEditClick = () =>{
    console.log("handleEditClick reached!")
    this.setState({editing:true});
  }

  handleChangingSelectedSurvey = (id) => {
    const selectedSurvey = this.state.masterSurveyList.filter(survey => survey.id === id)[0];
    this.setState({selectedSurvey: selectedSurvey});
  }

  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSurvey: null,
        editing: false
        });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewSurveyToList = (newSurvey) => {
    const newMasterSurveyList = this.state.masterSurveyList.concat(newSurvey);
    this.setState({
      masterSurveyList: newMasterSurveyist,
      formVisibleOnPage: false
    });
  }

  handleDeletingSurvey = (id) => {
    const newMasterSurveyList = this.state.masterSurveyList.filter(survey => survey.id !==id);
    this.setState({
      masterSurveyList: newMasterSurveyList,
      selectedSurvey: null
    });
  }

  handleEditingSurveyInList = (surveyToEdit) => {
    const editedMasterSurveyList = this.state.masterSurveyList
      .filter(survey => survey.id !== this.state.selectedSurvey.id)
      .concat(surveyToEdit);
    this.setState({
      masterSurveyList: editedMasterSurveyList,
      editing: false,
      selectedSurvey: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditSurveyForm
      keg = {this.state.selectedSurvey}
      onEditSurvey = {this.handleEditingSurveyInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedSurvey != null) {
        currentlyVisibleState = <SurveyDetail 
          survey = {this.state.selectedSurvey} 
          onSellingPint = {this.handleRemovingPint}
          onClickingDelete = {this.handleDeletingSurvey} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Survey List";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewSurveyForm onNewSurveyCreation={this.handleAddingNewSurveyToList} />
        buttonText = "Return to Survey List";
    } else {
        currentlyVisibleState = 
          <SurveyList 
            surveyList={this.state.masterSurveyList} 
            onSurveySelection={this.handleChangingSelectedSurvey} />
        buttonText = "Add survey"
    }
    return (
      <div style={{ 
        textAlign: 'center',
        padding: '20px',
        }}>
      <React.Fragment>
          {currentlyVisibleState}
          <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
        </React.Fragment>
      </div>
    );
  }
}