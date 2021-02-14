import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import AuthReducer from "./authReduser";
import ProjectReducer from "./projectReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer