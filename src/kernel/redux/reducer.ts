import { combineReducers } from "redux";
import CharacterReducer from "./characters/reducer";

export default combineReducers({
    character: CharacterReducer,
});
  