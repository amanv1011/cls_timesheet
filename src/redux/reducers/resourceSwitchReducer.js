import {SET_RESOURCE_SWITCH_ACTIVE, SET_RESOURCE_SWITCH_DEACTIVE } from "../type";

const initialstate = {
    showSwitchTab: true,
}

const showSwitch = ( state = initialstate, { type, payload}) =>  {
    switch (type) {
        case SET_RESOURCE_SWITCH_ACTIVE:
            return { ...state, showSwitchTab: payload}
        case SET_RESOURCE_SWITCH_DEACTIVE:
            return { ...state, showSwitchTab: payload }
        default:
            return { ...state}
    }
}
export default showSwitch;
