import { GET_BEERS } from './actionTypes.js'
import axios from 'axios'

export const getBeers = () => {
  return (dispatch) => {
    return axios.get("https://api.punkapi.com/v2/beers?page=2&per_page=5")
      .then(result => {
        dispatch({ type: GET_BEERS, payload: result.data })
      });
  }
}
