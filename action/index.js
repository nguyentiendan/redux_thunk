import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constant'
import getPeople from '../api/api'
import {getAllCoffee} from '../utils/CoffeeUtils'

/*
export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    //getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}
*/
export function fetchData() {
  return (dispatch) => {
    dispatch( getData() )
    return fetch(getAllCoffee())
      .then(response => response.json()) 
      .then((data) => {
        dispatch( getDataSuccess(data) )
        
      })
      .catch((err) => {
        dispatch( getDataFailure() )
      })
      //.catch((err) => console.log('err:', err))
  }
}

export function getData() {
  return {
    type: FETCH_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure(error) {
  return {
    type: FETCH_DATA_FAIL
  }
}

/*---------------*/
/*
import {
  constructUserFollowingsUrl,
  constructUserTracksUrl,
  constructUserUrl,
  constructUserProfilesUrl
} from '../utils/UserUtils';

function fetchUser(userId) {
  return dispatch => {
      dispatch(requestUser(userId));
      return fetch(constructUserUrl(userId))
          .then(response => response.json())
          .then(json => {
              const normalized = normalize(json, userSchema);
              dispatch(receiveUserPre(userId, normalized.entities));
          })
          .catch(error => console.log(error));
  };
}

export function requestUser(userId) {
  return {
      type: types.REQUEST_USER,
      userId: userId
  };
}

function receiveUserPre(userId, entities) {
  return dispatch => {
      dispatch(receiveUser(entities));
      dispatch(fetchUserData(userId, entities.users[userId].username));
  };
}
*/