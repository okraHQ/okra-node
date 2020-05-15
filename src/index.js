/* eslint-disable func-names */
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
 * Retrieves either AUTH, BALANCE, TRANSACTIONS, IDENTITY, INCOME of a customer using their record Id.
 * @param {string} token - AccessToken
 * @param {object} options - {record - customer record id, method - one of the okra products}
 * @param {function} callback
 */
export const getRecordByMethod = function(
  token: string,
  options: { record: string, method: string } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}callback`;
  const request = axios({
    method: "GET",
    url,
    params: options,
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
 * Retrieves either AUTH, BALANCE, TRANSACTIONS, IDENTITY, INCOME of a customer using record Id.
 * @param {string} token - AccessToken
 * @param {object} options - {record - record id, method - one of the okra products}
 * @param {function} callback
 */
export const getProductsByRecord = function(
  token: string,
  options: { record_id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/all/byRecord`;
  const request = axios({
    method: "POST",
    url,
    params: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * Retrieves either AUTH, BALANCE, TRANSACTIONS, IDENTITY, INCOME of a customer using their customer Id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer id, method - one of the okra products}
 * @param {function} callback
 */
export const getProductsByCustomer = function(
  token: string,
  options: { customer_id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/all/byCustomer`;
  const request = axios({
    method: "POST",
    url,
    params: options,
    headers: { Authorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
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
  const url = `${apiURL}customers/list`;
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
 * @param {Object} options {key, name}
 * @param {Function} callback
 * @returns {Function}
 */
export const findCustomersBy = function(
  token: string,
  options: { key: string, value: string } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}customers/find-customers-by`;
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

/**
 *
 * @param {string} token - AccessToken
 * @param {Object} options - {account}
 * @param {Function} callback
 * @returns {Function}
 */
export const getTotalDebitCredits = function(
  token: string,
  options: { account: string },
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/total-debits-credits`;
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
 * @param {Object} options - {account}
 * @param {Function} callback
 * @returns {Function}
 */
export const getPeriodicTransaction = function(
  token: string,
  options: { record_id: string, account_id: string, currency: string } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/transactions/periodic`;
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
 * @param {Object} options - {account}
 * @param {Function} callback
 * @returns {Function}
 */
export const getPeriodicBalance = function(
  token: string,
  options: { record_id: string, account_id: string, currency: string } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/balance/periodic`;
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
  getRecordByMethod,
  // getProductById,
  getBanks,
  getBankById,
  mergeIdentities,
  retryRecord,
  getTotalDebitCredits,
  getProductsByRecord,
  getProductsByCustomer,
  getPeriodicTransaction,
  getPeriodicBalance
};
