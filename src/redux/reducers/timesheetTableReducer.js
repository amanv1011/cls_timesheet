import {SETFALSE_TIMESHEET_TABLE_DATA, SETTRUE_TIMESHEET_TABLE_DATA} from '../type'

const initialState = {
    isTableData:true,
}

const timesheetTableReducer = (state = initialState, { type }) => {
    switch (type) {
        case SETTRUE_TIMESHEET_TABLE_DATA:
            return{ ...state, isTableData:true}
        case SETFALSE_TIMESHEET_TABLE_DATA:
            return{ ...state, isTableData:false}
        default:
            return{ ...state}
    }
}

export default timesheetTableReducer