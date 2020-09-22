import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import surveyListReducer from '../../reducers/survey-list-reducer';
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("root reducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterSurveyList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that intial state of surveyListReducer matches root reducer', () => {
    expect(store.getState().masterSurveyList).toEqual(surveyListReducer(undefined, { type: null }
      ));
  });

  test('Check that intial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleReducer).toEqual(formVisibleReducer(undefined, { type: null }
      ));
  });

  test('Check that inital state of surveyListReducer matches root reducer', () => {
    const action = { 
      type: c.ADD_SURVEY,
      name: 'Keanu',
      question1:'question 1',
      question2:'question 2',
      question3:'question 3',
      question4:'question 4',
      question5:'question 5',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterSurveyList).toEqual(surveyListReducer(undefined, action));
  });

  test('Check that intial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});  


