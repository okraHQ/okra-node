// @flow
import axios from "axios";

const apiURL = "https://dev-api.okra.ng/v1/";

/**
 * getAuth - endpoint then allows to retrieve the bank account and
 * routing numbers associated with a Record
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getAuth = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/auth/get`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.auths);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getTransactions - endpoint allows developers to receive customer-authorized
 * transaction data for current, savings, and domiciliary Accounts
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getTransactions = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/transactions/get`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.trans);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getBalance - This endpoint returns the real-time balance for each of an Reocrd's accounts.
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getBalance = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/balance/get`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.balances);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getIdentity - This endpoint allows you to retrieve various account holder information
 * on file
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getIdentity = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/identity/get`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.identities);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getRecords - retrieve all records associated with the company
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getRecords = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/records/get`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.records);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getAccount - retrieve account(s) associated to company
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getAccount = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/accounts/get`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.accounts);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getProduct - retrieves the list of products available on an account
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 */
export const getProducts = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/list`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data.products);
    }
    return callback(response.data.msg, null);
  });
};

export default {
  getAuth,
  getTransactions,
  getBalance,
  getIdentity,
  getRecords,
  getAccount,
  getProducts
};
