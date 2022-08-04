import { authReducer } from "./authReducer";
import {
  leadsReducer,
  singleLeadReducer,
  leadUserReducer,
  productTotalsReducer,
  leadsSearchedReducer,
} from "./leads.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  leads: leadsReducer,
  singleLead: singleLeadReducer,
  leadUsers: leadUserReducer,
  productTotals: productTotalsReducer,
  leadsSearched: leadsSearchedReducer,
});

export default rootReducer;
