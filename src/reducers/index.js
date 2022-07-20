import { authReducer } from "./authReducer";
import {
  leadsReducer,
  singleLeadReducer,
  leadUserReducer,
} from "./leads.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  leads: leadsReducer,
  singleLead: singleLeadReducer,
  leadUsers: leadUserReducer,
});

export default rootReducer;
