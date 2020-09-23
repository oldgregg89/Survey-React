import * as c from './../actions/ActionTypes';

// export const addSurvey = id => ({
//   type: c.ADD_SURVEY,
//   id
// })

export const deleteSurvey = id => ({
  type: c.DELETE_SURVEY,
  id
})

export const toggleForm = () => ({
  type:c.TOGGLE_FORM
});

export const updateTIme = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});