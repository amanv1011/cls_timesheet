import { SET_RESOURCE_SWITCH_ACTIVE, SET_RESOURCE_SWITCH_DEACTIVE } from "../type";

export const setSwitchActive = (switchState) => {
    return async(dispatch) => {
        dispatch({type: SET_RESOURCE_SWITCH_ACTIVE, payload:switchState})
    }

}
export const setSwitchDeactive = (switchState) => {
    return async(dispatch) => {
        dispatch({ type: SET_RESOURCE_SWITCH_DEACTIVE, payload:switchState})
    }
}