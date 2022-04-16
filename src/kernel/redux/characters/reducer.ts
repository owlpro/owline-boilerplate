import * as consts from "./constants";
import { CharacterActionReducer, CharacterInitState } from "./interfaces";



const initState: CharacterInitState = {
    get: {
        process: false,
        data: [],
        pagination: {
            count: 0,
            pages: 0,
        }
    },
}

const CharacterReducer = (currentState = initState, action: CharacterActionReducer) => {
    const state = { ...currentState };

    switch (action.type) {
        case consts.GET_CHARACTERS_STARTED:
            state.get.process = true;
            return state;
        case consts.GET_CHARACTERS_SUCCESS:
            state.get.process = false;
            console.log(action)
            state.get.data = action.response?.data.results;
            return state;
        case consts.GET_CHARACTERS_FAILED:
            state.get.process = false;
            state.get.data = []
            return state;
        default:
            return currentState;
    }
}

export default CharacterReducer;