import { GET_BEERS } from '../actions/actionTypes.js'

const initialState = {
  beers: []
};
function rootReducer(state = initialState, action) {
  if (action.type === GET_BEERS) {
    return Object.assign({}, state, {
      beers: state.beers.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
