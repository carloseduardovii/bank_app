import axios from "axios";

import { transfersActions } from "../slices/transfers.slice";

// const API_URL = "http://localhost:4000/api/v1/transfer/";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      dispatch(transfersActions.getTransfers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (accountNumber, amount) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      //   const transferData = { accountNumber, amount };

      //   const res = await axios.post(API_URL, transferData);

      //   const { newTransfer } = res.data;

      //   console.log(res.data);

      dispatch(transfersActions.newTransfer({ newTransfer }));
    } catch (error) {
      console.log(error);
    }
  };
};
