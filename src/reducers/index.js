import { authReducer } from "./authReducer";
import { leadsReducer } from "./leads.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  leads: leadsReducer,
});

export default rootReducer;
