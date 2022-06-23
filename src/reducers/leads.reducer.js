import { leadConstants } from "../actions/constants";

const initState = {
  leads: [],
  loading: false,
  error: null,
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
