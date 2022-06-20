import { authConstants } from "./constants";

export const login = (user) => {
  return async (distpatch) => {
    distpatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};
