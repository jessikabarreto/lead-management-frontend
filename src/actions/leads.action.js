import axios from "../helpers/axios";
import { leadConstants } from "./constants";
import { authConstants } from "./constants";

export const getAllLeads = () => {
  return async (dispatch) => {
    dispatch({ type: leadConstants.GET_ALL_LEADS_REQUEST });
    const res = await axios.get("profile/leads");
    // console.log(res);
    if (res.status === 200) {
      const leads = res.data;
      dispatch({
        type: leadConstants.GET_ALL_LEADS_SUCCESS,
        payload: { leads: leads },
      });
    } else {
      dispatch({
        type: leadConstants.GET_ALL_LEADS_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const addLead = (form) => {
  return async (dispatch) => {
    const res = await axios
      .post("/profile/create-lead", form)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
