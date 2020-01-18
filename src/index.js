// @flow
import axios from "axios";
import config from "./config";

const { apiURL } = config;

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
  const url = `${apiURL}products/auths`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
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
  const url = `${apiURL}products/transactions`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
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
export const getBalances = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/balances`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
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
 * @returns {Function}
 */
export const getIdentities = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/identities`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getRecords - retrieve all records associated with the company
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 * @returns {Function}
 */
export const getRecords = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/records`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getAccount - retrieve account(s) associated to company
 * @param {string} token - AccessToken
 * @param {object} options - {page and limit}
 * @param {function} callback
 * @returns {Function}
 */
export const getAccounts = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/accounts`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getProduct - retrieves the list of products available on an account
 * @param {string} token - AccessToken
 * @param {Object} options - {page and limit}
 * @param {Function} callback
 * @returns {Function}
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
      return callback(null, response.data.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * getBanks - retrieves the list of banks available
 */
export const getBanks = function(
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}banks`;
  const request = axios({
    method: "GET",
    url
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.message, null);
  });
};

/**
 * Getting each Bank details by id
 * @param {string} id
 * @returns {Function}
 */
export const getBankById = function(
  id: string,
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}banks/getById?id=${id}`;
  const request = axios({
    method: "GET",
    url
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.message, null);
  });
};

/**
 *
 * @param {string} token - AccessToken
 * @param {Object} options - {page and limit}
 * @param {Function} callback
 * @returns {Function}
 */
export const getCustomers = function(
  token: string,
  options: { page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}users/customers`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.message, null);
  });
};

/**
 *
 * @param {string} token - AccessToken
 * @param {Object} options - {page and limit}
 * @param {Function} callback
 * @returns {Function}
 */
export const mergeIdentities = function(
  token: string,
  options: { final: string, initial: string, options: Object } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/identity/merge`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
    }
    return callback(response.data.message, null);
  });
};

/**
 *
 * @param {string} token - AccessToken
 * @param {Object} options - {page and limit}
 * @param {Function} callback
 * @returns {Function}
 */
export const retryRecord = function(
  token: string,
  options: { record_id: string, user: string } | { record_id: string },
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}customers/retry`;
  const request = axios({
    method: "POST",
    url,
    data: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data.data);
    }
    return callback(response.data.message, null);
  });
};

export default {
  getAuth,
  getTransactions,
  // getTransactionById,
  getBalances,
  // getBalanceById,
  getIdentities,
  // getIdentityById,
  getRecords,
  // getRecordById,
  getAccounts,
  getCustomers,
  // getCustomerById,
  getProducts,
  // getProductById,
  getBanks,
  getBankById,
  mergeIdentities,
  retryRecord
};
