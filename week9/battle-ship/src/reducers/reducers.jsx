import { combineReducers } from 'redux'
import panelReducer from 'reducers/panelReducer'
export default combineReducers({
    click: panelReducer
})