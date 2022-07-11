import {SET_DATA_DATE_FILTER} from '../type'
import moment from 'moment'

const localDate = moment()

var monthDashboard = localDate.month() + 1;
var yearDashboard = localDate.year();
const lastDateMonth = moment(new Date(yearDashboard, monthDashboard , 0)).format("DD");
const startDate = `${yearDashboard}-${monthDashboard}-01`;
const endDate = `${yearDashboard}-${monthDashboard}-${lastDateMonth}`;

const initialState = {
    filterDateStart:startDate,
    filterDateEnd: endDate
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