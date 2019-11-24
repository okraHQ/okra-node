// @flow
import axios from "axios";

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const apiURL = "https://dev-api.okra.ng/v1/";

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
