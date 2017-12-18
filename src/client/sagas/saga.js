import {takeEvery} from 'redux-saga';
import {call , put} from 'redux-saga/effects';
import axios from 'axios';

export function* fetchUserAsync(action){
  //not hitting this block
  console.log('saga is running success');
  try{
    const response = yield call(axios.get ,'http://react-ssr-api.herokuapp.com/users');
    yield put ({type:'FETCH_USERS_SUCCESS', response: response.data});
    console.log('saga is running success');

  }
  catch(e){
    yield put ({type:'FETCH_USERS_FAILURE', response: response.data});
    console.log('saga is running failure');

  }
}

export function* fetchUsersSaga(){
  //working
console.log('saga is running');
yield takeEvery('FETCH_USERS',fetchUserAsync)
}

export default function* rootSaga(){
  yield [
    fetchUsersSaga()
  ]
}
