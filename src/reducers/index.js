import { firestoreReducer } from 'redux-firestore';
import surveyListReducer from './survey-list-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterSurveyList: surveyListReducer,
  firestore: firestoreReducer
});

export default rootReducer;


