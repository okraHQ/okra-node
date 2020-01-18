import * as api from "../src";

require("dotenv").config();

const token = process.env.TEST_ACCESSTOKEN; // TO do - change to public token
const id = "5d6fe57a4099cc4b210bbeb6";
beforeEach(async () => {
  jest.setTimeout(10000);
});

describe("Testing module", () => {
  test("that it is defined", () => {
    expect(api).toBeDefined();
  });
});

describe("Testing getAuth Api", () => {
  test("getAuth get response", async () => {
    const response = await api.getAuth(token, {}, () => {
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
    const response = await api.getBalances(token, {}, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentity Api", () => {
  test("getIdentity get response", async () => {
    const response = await api.getIdentities(token, {}, () => {
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
    const response = await api.getAccounts(token, { page: 1, limit: 1 }, () => {
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

describe("Testing getBanks Api", () => {
  test("getBanks get response", async () => {
    const response = await api.getBanks(() => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getBankById Api", () => {
  test("getBankById get response", async () => {
    const response = await api.getBankById(id, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getCustomers Api", () => {
  test("getCustomers get response", async () => {
    const response = await api.getCustomers(
      token,
      { page: 1, limit: 1 },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
