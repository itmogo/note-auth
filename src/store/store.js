import { createStore, compose, applyMiddleware } from 'redux';
import userReducer from '../reducers/usersReducer';
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFireStore, reduxFirestore } from 'redux-firestore';
import firebase from '../firebase/config';
import thunk from 'redux-thunk';


const store = createStore(userReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFireStore})),
reduxReactFirebase(firebase),
reduxFirestore(firebase)
));

export default store;
