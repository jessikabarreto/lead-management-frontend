import axios from "../helpers/axios";
import { leadConstants } from "./constants";

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

export const getSingleLead = (idPair) => {
  return async (dispatch) => {
    dispatch({ type: leadConstants.GET_ONE_LEAD_REQUEST });
    const res = await axios.get("profile/single-lead", {
      params: idPair,
    });
    if (res.status === 200) {
      const singleLead = res.data;
      // console.log(singleLead);
      dispatch({
        type: leadConstants.GET_ONE_LEAD_SUCCESS,
        payload: { singleLead },
      });
    } else {
      dispatch({
        type: leadConstants.GET_ONE_LEAD_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
