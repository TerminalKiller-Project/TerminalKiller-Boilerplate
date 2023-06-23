import { GET_ALL } from "../../misc/consts"

const initialState = {
    allState: null
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL:
            return {
                ...state,
                programming: action.payload
            }
        default:
            return {...state}
    }
}