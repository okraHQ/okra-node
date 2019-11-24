import * as api from "../src";

require("dotenv").config();

const token = process.env.TEST_ACCESSTOKEN; // TO do - change to public token

describe("Testing module", () => {
  test("that it is defined", () => {
    expect(api).toBeDefined();
  });
});

describe("Testing getAuth Api", () => {
  test("getAuth get response", async () => {
    const response = await api.getAuth(token, { page: 1, limit: 1 }, () => {
      return true;
    });
    expect(response).toBe(true);
  });
});

describe("Testing getTransactions Api", () => {
  test("getTransactions get response", async () => {
    const response = await api.getTransactions(
      token,
      { page: 1, limit: 1 },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalance Api", () => {
  test("getBalance get response", async () => {
    const response = await api.getBalance(token, { page: 1, limit: 1 }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentity Api", () => {
  test("getIdentity get response", async () => {
    const response = await api.getIdentity(token, { page: 1, limit: 1 }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getRecords Api", () => {
  test("getRecords get response", async () => {
    const response = await api.getRecords(token, { page: 1, limit: 1 }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getAccount Api", () => {
  test("getAccount get response", async () => {
    const response = await api.getAccount(token, { page: 1, limit: 1 }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getProducts Api", () => {
  test("getProducts get response", async () => {
    const response = await api.getProducts(token, { page: 1, limit: 1 }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});
