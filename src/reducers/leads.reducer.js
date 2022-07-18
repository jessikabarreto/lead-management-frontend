import { leadConstants } from "../actions/constants";

const initState = {
  leads: [],
  loading: false,
  error: null,
};

const singleinitState = {
  singleLead: {},
};

export const leadsReducer = (state = initState, action) => {
  switch (action.type) {
    case leadConstants.GET_ALL_LEADS_SUCCESS:
      state = {
        ...state,
        leads: action.payload.leads,
      };
      break;
  }
  return state;
};

export const singleLeadReducer = (state = singleinitState, action) => {
  switch (action.type) {
    case leadConstants.GET_ONE_LEAD_SUCCESS:
      state = {
        ...state,
        singleLead: action.payload.singleLead,
      };
      break;
  }
  return state;
};
