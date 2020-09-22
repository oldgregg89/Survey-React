import surveyListReducer from '../../reducers/survey-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('surveyListReducer', () => {
    
    let action; 

    const currentState = {
        1: { name: 'Keanu',
        question1:'question 1',
        question2:'question 2',
        question3:'question 3',
        question4:'question 4',
        question5:'question 5',
        id: 1 },
        2: { name: 'Sandra',
        question1:'question 1',
        question2:'question 2',
        question3:'question 3',
        question4:'question 4',
        question5:'question 5',
        id: 2 },
      }

      const surveyData = {
        name: 'Keanu',
        question1:'question 1',
        question2:'question 2',
        question3:'question 3',
        question4:'question 4',
        question5:'question 5',
        id: 1
      };

      test('Should return default state if no action type is recognized', () => {
        expect(surveyListReducer({}, { type: null})).toEqual({});
      });

      test('Should successfully add new survey data to masterSurveyList', () => {
        const { name, question1, question2, question3, question4, question5 , id } = surveyData;
        action = {
          type: c.ADD_SURVEY,
          name: 'Keanu',
          question1: question1,
          question2: question2,
          question3: question3,
          question4: question4,
          question5: question5,
          id: id
        };
      expect(surveyListReducer({}, action)).toEqual({
        [id] : {
          name: 'Keanu',
          question1: question1,
          question2: question2,
          question3: question3,
          question4: question4,
          question5: question5,
          id: id
        }
      });
    });

    test('Should seuccessfully delete a survey', () => {
      action = {
        type:c.DELETE_SURVEY,
        id: 1
      };
      expect(surveyListReducer(currentState, action)).toEqual({
          2: { name: 'Sandra',
          question1:'question 1',
          question2:'question 2',
          question3:'question 3',
          question4:'question 4',
          question5:'question 5',
          id: 2 }
      });
    });

  });