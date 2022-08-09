import {
  SET_HOURSLOGGED_DATA,
  SET_HOURSLOGGED_DATA_ERR,
  SET_RES_HOURSLOGGED_DATA,
  SET_RES_HOURSLOGGED_DATA_ERR,
  SET_MODAL_RES_DATA,
  SET_MODAL_RES_ERR,
  SET_RES_NAME,
  SET_RES_NAME_ERR,
  SET_BILL_HOUR,
  SET_BILL_HOUR_ERR,
  SET_DEL_RES,
  SET_DEL_RES_ERR,
} from "../type";

const initialState = {
  hoursloggedData: null,
  hoursloggedDataErr: null,
  resHoursLoggedData: null,
  resHoursLoggedDataErr: null,
  modalResData: null,
  modalResDataErr: null,
  newResource: null,
  newResourceErr: null,
  billHour: null,
  billHourErr: null,
  delRes: null,
  delResErr: null,
};
const hoursLoggedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOURSLOGGED_DATA: {
      return {
        ...state,
        hoursloggedData: payload,
      };
    }
    case SET_HOURSLOGGED_DATA_ERR: {
      return {
        ...state,
        hoursloggedDataErr: payload,
      };
    }

    case SET_RES_HOURSLOGGED_DATA: {
      return {
        ...state,
        resHoursLoggedData: payload,
      };
    }

    case SET_RES_HOURSLOGGED_DATA_ERR: {
      return {
        ...state,
        resHoursLoggedDataErr: payload,
      };
    }

    case SET_MODAL_RES_DATA: {
      return {
        ...state,
        modalResData: payload,
      };
    }

    case SET_MODAL_RES_ERR: {
      return {
        ...state,
        modalResDataErr: payload,
      };
    }

    case SET_RES_NAME: {
      return {
        ...state,
        newResource: payload,
      };
    }

    case SET_RES_NAME_ERR: {
      return {
        ...state,
        newResourceErr: payload,
      };
    }

    case SET_BILL_HOUR: {
      return {
        ...state,
        billHour: payload,
      };
    }

    case SET_BILL_HOUR_ERR: {
      return {
        ...state,
        billHourErr: payload,
      };
    }

    case SET_DEL_RES: {
      return {
        ...state,
        delRes: payload,
      };
    }

    case SET_DEL_RES_ERR: {
      return {
        ...state,
        delResErr: payload,
      };
    }

    default:
      return state;
  }
};

export default hoursLoggedReducer;
