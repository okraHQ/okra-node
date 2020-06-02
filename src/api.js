import config from "./config";

const axios = require("axios");

const { apiURL } = config;

async function callbackOrPromise(payload, callback, url, method = "POST") {
  async function request(...args) {
    const [resolve, reject] = args;

    try {
      const { data } = await axios({
        method,
        url,
        ...(method === "POST" && { data: payload })
      });

      if (callback) {
        return callback(null, data);
      }

      return resolve(data);
    } catch (error) {
      if (callback) {
        return callback(error, null);
      }

      return reject(error);
    }
  }

  if (callback) {
    return request();
  }

  return new Promise(request);
}

const protectedRequest = opts => async (payload, callback, url, method) => {
  if (opts && !opts.token) {
    throw new Error("401: Bearer token missing!");
  }

  axios.defaults.headers.common.Authorization = `Bearer ${opts.token}`;

  return callbackOrPromise(payload, callback, url, method);
};

const publicRequest = () => callbackOrPromise;

export default opts => {
  const authRequired = protectedRequest(opts);
  const publicRoutes = publicRequest();

  return {
    getAuth: (payload, cb) => authRequired(payload, cb, `${apiURL}/getAuth`),
    getTransactions: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/products/transactions`),
    getBalances: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/balances`),
    getIdentities: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/identities`),
    getRecords: (payload, cb) => authRequired(payload, cb, `${apiURL}/records`),
    getAccounts: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/accounts`),
    getProducts: (payload, cb) => authRequired(payload, cb, `${apiURL}/list`),
    getRecordByMethod: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/callback`, "GET"),
    getProductsByRecord: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/all/byRecord`),
    getProductsByCustomer: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/all/byCustomer`),
    getCustomers: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/customers/list`),
    findCustomersBy: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/customers/find-customers-by`),
    mergeIdentities: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/products/identity/merge`),
    retryRecord: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/customers/retry`),
    getTotalDebitCredits: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/products/total-debits-credit`),
    getPeriodicTransaction: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/products/transactions/periodic`),
    getPeriodicBalance: (payload, cb) =>
      authRequired(payload, cb, `${apiURL}/products/balance/periodic`),
    getBanks: cb => publicRoutes({}, cb, `${apiURL}/banks`, "GET"),
    getBankById: (id, cb) =>
      publicRoutes(id, cb, `${apiURL}/banks/getById?id=${id}`, "GET")
  };
};
