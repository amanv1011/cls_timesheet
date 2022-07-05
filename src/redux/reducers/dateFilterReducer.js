import {SET_DATA_DATE_FILTER} from '../type'

const initialState = {
    filterDateStart:"2022-05-01",
    filterDateEnd: "2022-05-31"
}

const dateFilterReducer = (state = initialState , {type, payload}) =>{
    switch (type){
        case SET_DATA_DATE_FILTER: 
            return {...state, filterDateStart: payload.startDate, filterDateEnd: payload.endDate};
        default: 
            return{...state}
    }
}

export default dateFilterReducer