import {SET_SIDEBAR_COLLAPS_DEACTIVE, SET_SIDEBAR_COLLAPS_ACTIVE, SET_SIDEBAR_ITEM} from '../type'

export const setSidebarActive = () => {
    return async(dispatch) => {
        dispatch({type:SET_SIDEBAR_COLLAPS_ACTIVE})
    }
}

export const setSidebarDeactive = () => {
    return async(dispatch) => {
        dispatch({type:SET_SIDEBAR_COLLAPS_DEACTIVE})
    }
}

export const setSidebarItem = (routeNo) => {
    return async(dispatch) => {
        dispatch({type:SET_SIDEBAR_ITEM, payload:routeNo})
    }
}