import { authReducer } from "./authReducer";
import { leadsReducer, singleLeadReducer } from "./leads.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  leads: leadsReducer,
  singleLead: singleLeadReducer,
});

export default rootReducer;
