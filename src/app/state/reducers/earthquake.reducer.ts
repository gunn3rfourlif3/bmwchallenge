import * as actions from '../actions/earthquake.action';

export function earthquakeReducer(state: any, action: actions.EarthquakesAction) {
  switch (action.type) {

    case actions.GET_EARTHQUAKE:
      return state;

    case actions.GET_EARTHQUAKESLIST_SUCCESS:
      return action.payload.data;

    default:
      return state;
  }
}
export function earthquakeDetailsReducer(state: any, action: actions.EarthquakesAction) {
  switch (action.type) {
    case actions.GET_EARTHQUAKE_DETAILS:
      return state;

    case actions.GET_EARTHQUAKE_DETAILS_SUCCESS:
      return action.payload.data;

    default:
      return state;
  }
}