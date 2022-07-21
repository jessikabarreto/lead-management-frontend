import { authReducer } from "./authReducer";
import {
  leadsReducer,
  singleLeadReducer,
  leadUserReducer,
  productTotalsReducer,
} from "./leads.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  leads: leadsReducer,
  singleLead: singleLeadReducer,
  leadUsers: leadUserReducer,
  productTotals: productTotalsReducer,
});

export default rootReducer;
