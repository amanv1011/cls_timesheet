import { GET_MODAL_ACTIVE, GET_MODAL_INACTIVE } from "../type";


export const setModalActive = () => {
    return async(dispatch) => {
        dispatch({ type: GET_MODAL_ACTIVE });
    }
}

export const setModalInActive = () => {
    return async(dispatch) => {
        dispatch({ type: GET_MODAL_INACTIVE });
    }
}