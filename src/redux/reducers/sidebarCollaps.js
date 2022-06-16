import {SET_SIDEBAR_COLLAPS_DEACTIVE, SET_SIDEBAR_COLLAPS_ACTIVE, SET_SIDEBAR_ITEM} from '../type'

const initialState = { 
    isSidebarCollaps:false,
    sidebarActiveItem:"1",
}

const sidebarCollapsReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case SET_SIDEBAR_COLLAPS_ACTIVE:
            return{...state, isSidebarCollaps:true}
        case SET_SIDEBAR_COLLAPS_DEACTIVE:
            return{...state, isSidebarCollaps:false}
        case SET_SIDEBAR_ITEM:
            return{...state, sidebarActiveItem:payload}
        default:
            return{...state}
    }
}

export default sidebarCollapsReducer