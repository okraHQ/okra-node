// @flow
import axios from "axios";

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const apiURL = "https://dev-api.okra.ng/v1/";

interface IInput {
  token: string;
  options: { page: number, limit: number } | {};
  callback: (error: string | null, result: [{}] | null) => mixed;
}

module.exports = {
  getAuth(input: IInput) {
    const url = `${apiURL}products/auth/get`;
    const request = axios({
      method: "POST",
      url,
      data: input.options,
      headers: { Authorization: `Bearer ${input.token}` }
    });

    return request.then(response => {
      if (response.data.status === "success") {
        input.callback(null, response.data.data.auths);
      } else {
        input.callback(response.data.msg, null);
      }
    });
  },
  getTransactions(input: IInput) {
    const url = `${apiURL}products/transactions/get`;
    const request = axios({
      method: "POST",
      url,
      data: input.options,
      headers: { Authorization: `Bearer ${input.token}` }
    });

    return request.then(response => {
      if (response.data.status === "success") {
        input.callback(null, response.data.data.trans);
      } else {
        input.callback(response.data.msg, null);
      }
    });
  },
  getBalance(input: IInput) {
    const url = `${apiURL}products/balance/get`;
    const request = axios({
      method: "POST",
      url,
      data: input.options,
      headers: { Authorization: `Bearer ${input.token}` }
    });

    return request.then(response => {
      if (response.data.status === "success") {
        input.callback(null, response.data.data.balances);
      } else {
        input.callback(response.data.msg, null);
      }
    });
  },
  getIdentity(input: IInput) {
    const url = `${apiURL}products/identity/get`;
    const request = axios({
      method: "POST",
      url,
      data: input.options,
      headers: { Authorization: `Bearer ${input.token}` }
    });

    return request.then(response => {
      if (response.data.status === "success") {
        input.callback(null, response.data.data.identities);
      } else {
        input.callback(response.data.msg, null);
      }
    });
  },
  getIncome(input: IInput) {
    const url = `${apiURL}products/income/get`;
    const request = axios({
      method: "POST",
      url,
      data: input.options,
      headers: { Authorization: `Bearer ${input.token}` }
    });

    return request.then(response => {
      if (response.data.status === "success") {
        input.callback(null, response.data.data.incomes);
      } else {
        input.callback(response.data.msg, null);
      }
    });
  }
};
