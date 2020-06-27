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
  const url = `${apiURL}banks/list`;
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
  options: { final: string, initial: string, options: any } | {},
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
/**
 *This endpoint allows you to process the income of particular customer using the customer's id
 * @param {string} token - AccessToken
 * @param {Object} options - {customer_id}
 * @param {Function} callback
 * @returns {Function}
 */
export const processIncome = function(
  token: string,
  options: { customer_id: string } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/income/process`;
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
export const getSpendingPattern = function(
  token: string,
  options: { customer_id: string } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}products/transactions/spending-pattern`;
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
 * This endpoint allows you to fetch auth info using the id of the customer.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, page and limit}
 * @param {function} callback
 */
export const getAuthByCustomer = function(
  token: string,
  options: { customer: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}auth/getByCustomer`;
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
 * This endpoint allows you to fetch auth info using the date range.
 * @param {string} token - AccessToken
 * @param {object} options - {to, from, page and limit}
 * @param {function} callback
 */
export const getAuthByDate = function(
  token: string,
  options: { to: string, from: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}auth/getByDate`;
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
 * endpoint allows you to fetch auth info using the options metadata you provided when setting up the widget.
 * @param {string} token - AccessToken
 * @param {object} options - {options, page and limit}
 * @param {function} callback
 */
export const getAuthByOptions = function(
  token: string,
  options: { options: any, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}auth/byOptions`;
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
 * This endpoint allows you to fetch auth info using id of the bank
 * @param {string} token - AccessToken
 * @param {object} options - {type, value, page and limit}
 * @param {function} callback
 */
export const getAuthByBank = function(
  token: string,
  options: { bank: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}auth/getByBank`;
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
 * This endpoint allows you to fetch auth info using the id of the auth.
 * @param {string} token - AccessToken
 * @param {object} options - {id, page and limit}
 * @param {function} callback
 */
export const getAuthById = function(
  token: string,
  options: { id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}auth/getById`;
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
 * This endpoint allows you to fetch balance info using the id of the balance.
 * @param {string} token - AccessToken
 * @param {object} options - {id, page and limit}
 * @param {function} callback
 */
export const getBalanceById = function(
  token: string,
  options: { id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/getById`;
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
 * This endpoint allows you to fetch balance info using the id of the customer.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, page and limit}
 * @param {function} callback
 */
export const getBalanceByCustomer = function(
  token: string,
  options: { customer: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/getByCustomer`;
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
 * This endpoint allows you to fetch balance info using the id of the account.
 * @param {string} token - AccessToken
 * @param {object} options - {account, page and limit}
 * @param {function} callback
 */
export const getBalanceByAccount = function(
  token: string,
  options: { id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/getByAccount`;
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
 * This endpoint allows you to fetch balance info using the date range.
 * @param {string} token - AccessToken
 * @param {object} options - {to, from, page and limit}
 * @param {function} callback
 */
export const getBalanceByDate = function(
  token: string,
  options: { to: string, from: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/getByDate`;
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
 * endpoint allows you to fetch balance info using the options metadata you provided when setting up the widget.
 * @param {string} token - AccessToken
 * @param {object} options - {options, page and limit}
 * @param {function} callback
 */
export const getBalanceByOptions = function(
  token: string,
  options: { options: any, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/byOptions`;
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
 * This endpoint allows you to fetch balance info using type of balance..
 * @param {string} token - AccessToken
 * @param {object} options - {type, value, page and limit}
 * @param {function} callback
 */
export const getBalanceByType = function(
  token: string,
  options: { type: string, value: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/getByType`;
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
 * This endpoint allows you to fetch transaction info using the id of the transaction.
 * @param {string} token - AccessToken
 * @param {object} options - {id, page and limit}
 * @param {function} callback
 */
export const getTransactionById = function(
  token: string,
  options: { id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getById`;
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
 * This endpoint allows you to fetch transaction info using the id of the customer.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, page and limit}
 * @param {function} callback
 */
export const getTransactionByCustomer = function(
  token: string,
  options: { customer: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByCustomer`;
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
 * This endpoint allows you to fetch transaction info using the id of the account.
 * @param {string} token - AccessToken
 * @param {object} options - {account, page and limit}
 * @param {function} callback
 */
export const getTransactionByAccount = function(
  token: string,
  options: { account: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByAccount`;
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
 * This endpoint allows you to fetch transaction info using the date range.
 * @param {string} token - AccessToken
 * @param {object} options - {to, from, page and limit}
 * @param {function} callback
 */
export const getTransactionByDate = function(
  token: string,
  options: { to: string, from: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByDate`;
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
 * endpoint allows you to fetch transaction info using the options metadata you provided when setting up the widget.
 * @param {string} token - AccessToken
 * @param {object} options - {options, page and limit}
 * @param {function} callback
 */
export const getTransactionByOptions = function(
  token: string,
  options: { options: any, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/byOptions`;
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
 * This endpoint allows you to fetch transaction info using type of transaction.
 * @param {string} token - AccessToken
 * @param {object} options - {type, value, page and limit}
 * @param {function} callback
 */
export const getTransactionByType = function(
  token: string,
  options: { type: string, value: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByType`;
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
 * This endpoint allows you to fetch transaction info using the id of the account.
 * @param {string} token - AccessToken
 * @param {object} options - {nuban, page and limit}
 * @param {function} callback
 */
export const getTransactionByNuban = function(
  token: string,
  options: { nuban: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByNuban`;
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
 * This endpoint allows you to fetch transaction info using the id of the bank.
 * @param {string} token - AccessToken
 * @param {object} options - {bank, page and limit}
 * @param {function} callback
 */
export const getTransactionByBank = function(
  token: string,
  options: { bank: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByBank`;
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
 * This endpoint allows you to fetch identity info using the id of the identity.
 * @param {string} token - AccessToken
 * @param {object} options - {id, page and limit}
 * @param {function} callback
 */
export const getIdentityById = function(
  token: string,
  options: { id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}identity/getById`;
  const request = axios({
    method: "POST",
    url,
    params: options,
    headers: { identityorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * This endpoint allows you to fetch identity info using the id of the customer.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, page and limit}
 * @param {function} callback
 */
export const getIdentityByCustomer = function(
  token: string,
  options: { customer: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}identity/getByCustomer`;
  const request = axios({
    method: "POST",
    url,
    params: options,
    headers: { identityorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * This endpoint allows you to fetch identity info using the date range.
 * @param {string} token - AccessToken
 * @param {object} options - {to, from, page and limit}
 * @param {function} callback
 */
export const getIdentityByDate = function(
  token: string,
  options: { to: string, from: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}identity/getByDate`;
  const request = axios({
    method: "POST",
    url,
    params: options,
    headers: { identityorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * endpoint allows you to fetch identity info using the options metadata you provided when setting up the widget.
 * @param {string} token - AccessToken
 * @param {object} options - {options, page and limit}
 * @param {function} callback
 */
export const getIdentityByOptions = function(
  token: string,
  options: { options: any, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}identity/byOptions`;
  const request = axios({
    method: "POST",
    url,
    params: options,
    headers: { identityorization: `Bearer ${token}` }
  });
  return request.then(response => {
    if (response.data.status === "success") {
      return callback(null, response.data);
    }
    return callback(response.data.msg, null);
  });
};

/**
 * This endpoint allows you to fetch income info using the id of the income.
 * @param {string} token - AccessToken
 * @param {object} options - {id, page and limit}
 * @param {function} callback
 */
export const getIncomeById = function(
  token: string,
  options: { id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}income/getById`;
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
 * This endpoint allows you to fetch income info using the id of the customer.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, page and limit}
 * @param {function} callback
 */
export const getIncomeByCustomer = function(
  token: string,
  options: { customer: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}income/getByCustomer`;
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
 * This endpoint allows you to fetch income info using the date range.
 * @param {string} token - AccessToken
 * @param {object} options - {to, from, page and limit}
 * @param {function} callback
 */
export const getIncomeByDate = function(
  token: string,
  options: { to: string, from: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}income/getByDate`;
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
 * endpoint allows you to fetch income info using the options metadata you provided when setting up the widget.
 * @param {string} token - AccessToken
 * @param {object} options - {options, page and limit}
 * @param {function} callback
 */
export const getIncomeByOptions = function(
  token: string,
  options: { options: any, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}income/byOptions`;
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
 * This endpoint allows you to fetch income info of a specific customer using the date range and customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, to, from, page and limit}
 * @param {function} callback
 */
export const getIncomeByCustomerDate = function(
  token: string,
  options:
    | {
        to: string,
        from: string,
        page: number,
        limit: number,
        customer: string
      }
    | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}income/getByCustomerDate`;
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
 * This endpoint allows you to fetch balance info of a specific customer using the date range and customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, to, from, page and limit}
 * @param {function} callback
 */
export const getBalanceByCustomerDate = function(
  token: string,
  options:
    | {
        to: string,
        from: string,
        page: number,
        limit: number,
        customer: string
      }
    | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}balance/getByCustomerDate`;
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
 * This endpoint allows you to fetch identity info of a specific customer using the date range and customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, to, from, page and limit}
 * @param {function} callback
 */
export const getIdentityByCustomerDate = function(
  token: string,
  options:
    | {
        to: string,
        from: string,
        page: number,
        limit: number,
        customer: string
      }
    | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}identity/getByCustomerDate`;
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
 * This endpoint allows you to fetch transactions info of a specific customer using the date range and customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer_id, to, from, page and limit}
 * @param {function} callback
 */
export const getTransactionByCustomerDate = function(
  token: string,
  options:
    | {
        to: string,
        from: string,
        page: number,
        limit: number,
        customer_id: string
      }
    | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}transaction/getByCustomerDate`;
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
 * This endpoint allows you to fetch auth info of a specific customer using the date range and customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, to, from, page and limit}
 * @param {function} callback
 */
export const getAuthByCustomerDate = function(
  token: string,
  options:
    | {
        to: string,
        from: string,
        page: number,
        limit: number,
        customer: string
      }
    | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}auth/getByCustomerDate`;
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
 * This endpoint allows you to fetch identity info of a specific customer using the date range and customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, to, from, page and limit}
 * @param {function} callback
 */
export const getAccountByCustomerDate = function(
  token: string,
  options:
    | {
        to: string,
        from: string,
        page: number,
        limit: number,
        customer: string
      }
    | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}account/getByCustomerDate`;
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
 * endpoint allows you to fetch customer Debt-To-Income using the customer_id.
 * @param {string} token - AccessToken
 * @param {object} options - {customer, page and limit}
 * @param {function} callback
 */
export const getCustomerDTI = function(
  token: string,
  options: { customer_id: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}customers/dti/get`;
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
 * endpoint allows you to fetch customer using unique ID like bvn.
 * @param {string} token - AccessToken
 * @param {object} options - {type, value page and limit}
 * @param {function} callback
 */
export const getCustomerByIdentity = function(
  token: string,
  options: { type: string, value: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}customers/get`;
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
 * endpoint allows you to fetch customer using unique ID like bvn.
 * @param {string} token - AccessToken
 * @param {object} options - {type, value page and limit}
 * @param {function} callback
 */
export const getCustomersByKey = function(
  token: string,
  options: { key: string, value: string, page: number, limit: number } | {},
  callback: (error: string | null, result: any) => mixed
) {
  const url = `${apiURL}customers/find-customers-by`;
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

export default {
  getAuth,
  getAuthByBank,
  getAuthByCustomer,
  getAuthByDate,
  getAuthByOptions,
  getAuthById,
  getTransactions,
  getTransactionById,
  getTransactionByAccount,
  getTransactionByBank,
  getTransactionByCustomer,
  getTransactionByDate,
  getTransactionByNuban,
  getTransactionByOptions,
  getTransactionByType,
  getBalances,
  getBalanceByAccount,
  getBalanceByCustomer,
  getBalanceByDate,
  getBalanceById,
  getBalanceByOptions,
  getBalanceByType,
  getIdentities,
  getIdentityById,
  getIdentityByCustomer,
  getIdentityByDate,
  getIdentityByOptions,
  getIncomeById,
  getIncomeByOptions,
  getIncomeByDate,
  getIncomeByCustomer,
  getRecords,
  // getRecordById,
  getAccounts,
  getAccountByCustomerDate,
  getAuthByCustomerDate,
  getBalanceByCustomerDate,
  getIdentityByCustomerDate,
  getTransactionByCustomerDate,
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
  getPeriodicBalance,
  processIncome,
  getSpendingPattern,
  getCustomerByIdentity,
  getCustomerDTI,
  getCustomersByKey
};
