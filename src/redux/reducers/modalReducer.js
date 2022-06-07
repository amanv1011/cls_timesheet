import { GET_MODAL_ACTIVE, GET_MODAL_INACTIVE } from "../type";

const initialState = { modalState: false }

const modalReducer = (state = initialState, { type }) => {
    switch (type) {
        case GET_MODAL_ACTIVE:
            return { ...state, modalState: true };
        case GET_MODAL_INACTIVE:
            return { ...state, modalState: false };
        default:
            return { ...state };
    }
}

export default modalReducer;
