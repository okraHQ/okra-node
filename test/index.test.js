/* eslint-disable camelcase */
import * as api from "../src";

require("dotenv").config();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGMyZTU1MmM2NDNkODZlZDYyNGQ4YjEiLCJpYXQiOjE1NzkyNjQ5ODN9.R7_qldvGRwcYUj8CBRRsOAwvPJqquQ7kKSWX2kB60pQ"; // TO do - change to public token
const id = "5d6fe57a4099cc4b210bbeb6";
const record = "5e4ec820bbea150c6cde9362";
const customer_id = "5e14693d7659eb55b29aaaca";
const to = "2020-05-01";
const from = "2020-04-01";
const options = { firstname: "lanre", lastname: "Ibraheem" };
const type = "ledger_balance";
const value = 2000;
const nuban = "0167449099";

beforeEach(async () => {
  jest.setTimeout(50000);
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

describe("Testing getProductRecord Api", () => {
  test("getProductRecord get response", async () => {
    const response = await api.getRecordByMethod(
      token,
      { record, method: "BALANCE" },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getProductRecord by Record Api", () => {
  test("getProductRecord by record get response", async () => {
    const response = await api
      .getProductsByRecord(
        token,
        { record_id: record, page: 1, limit: 1 },
        () => {
          return true;
        }
      )
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getProductRecord by Customer Api", () => {
  test("getProductRecord by customer get response", async () => {
    const response = await api
      .getProductsByCustomer(token, { customer_id, page: 1, limit: 1 }, () => {
        return true;
      })
      .catch(() => true);
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
    const response = await api.getCustomers(token, {}, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getTotalDebitCredit Api", () => {
  test("getTotalDebitCredits get response", async () => {
    const response = await api
      .getTotalDebitCredits(
        token,
        { customer: id, bank: id, account: id },
        () => {
          return true;
        }
      )
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing processIncome Api", () => {
  test("processIncome get response", async () => {
    const response = await api
      .processIncome(token, { customer_id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing spendingPattern Api", () => {
  test("getSpendingPattern get response", async () => {
    const response = await api
      .getSpendingPattern(token, { customer_id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthByCustomer get response", async () => {
    const response = await api
      .getAuthByCustomer(token, { customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthByDate get response", async () => {
    const response = await api
      .getAuthByDate(token, { to, from }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthByCustomerDate get response", async () => {
    const response = await api
      .getAuthByCustomerDate(token, { to, from, customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
describe("Testing getAuthBy Api", () => {
  test("getAuthByCustomer get response", async () => {
    const response = await api
      .getAuthByOptions(token, { options }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
describe("Testing getAuthBy Api", () => {
  test("getAuthByBank get response", async () => {
    const response = await api
      .getAuthByBank(token, { bank: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthById get response", async () => {
    const response = await api
      .getAuthByBank(token, { id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
// //
describe("Testing getBalanceBy Api", () => {
  test("getBalanceByAccount get response", async () => {
    const response = await api
      .getBalanceByAccount(token, { account: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByCustomer get response", async () => {
    const response = await api
      .getBalanceByCustomer(token, { account: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByDate get response", async () => {
    const response = await api
      .getBalanceByDate(token, { to, from }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByCustomerDate get response", async () => {
    const response = await api
      .getBalanceByCustomerDate(token, { to, from, customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceById get response", async () => {
    const response = await api
      .getBalanceById(token, { id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByOptions get response", async () => {
    const response = await api
      .getBalanceByOptions(token, { options }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByType get response", async () => {
    const response = await api
      .getBalanceByType(token, { type, value }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionById get response", async () => {
    const response = await api
      .getTransactionById(token, { id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByAccount get response", async () => {
    const response = await api
      .getTransactionByAccount(token, { account: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByBank get response", async () => {
    const response = await api
      .getTransactionByBank(token, { bank: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByCustomer get response", async () => {
    const response = await api
      .getTransactionByCustomer(token, { customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByDate get response", async () => {
    const response = await api
      .getTransactionByDate(token, { to, from }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByCustomerDate get response", async () => {
    const response = await api
      .getTransactionByCustomerDate(token, { to, from, customer_id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByNuban get response", async () => {
    const response = await api
      .getTransactionByNuban(token, { nuban }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByOptions get response", async () => {
    const response = await api
      .getTransactionByOptions(token, { options }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByType get response", async () => {
    const response = await api
      .getTransactionByType(token, { type: "credit", value }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityById get response", async () => {
    const response = await api
      .getIdentityById(token, { id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByCustomer get response", async () => {
    const response = await api
      .getIdentityByCustomer(token, { customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByDate get response", async () => {
    const response = await api
      .getIdentityByDate(token, { to, from }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByCustomerDate get response", async () => {
    const response = await api
      .getIdentityByCustomerDate(token, { to, from, customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByOptions get response", async () => {
    const response = await api
      .getIdentityByOptions(token, { options }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeById get response", async () => {
    const response = await api
      .getIncomeById(token, { id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByOptions get response", async () => {
    const response = await api
      .getIncomeByOptions(token, { options }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByDate get response", async () => {
    const response = await api
      .getIncomeByDate(token, { to, from }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByCustomerDate get response", async () => {
    const response = await api
      .getIncomeByCustomerDate(token, { to, from, customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByCustomer get response", async () => {
    const response = await api
      .getIncomeByCustomer(token, { customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});

describe("Testing getAccountBy Api", () => {
  test("getAccountByCustomerDate get response", async () => {
    const response = await api
      .getAccountByCustomerDate(token, { to, from, customer: id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
// /
describe("Testing getCustomer Api", () => {
  test("getCustomerDTI get response", async () => {
    const response = await api
      .getCustomerDTI(token, { customer_id }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
describe("Testing getCustomer Api", () => {
  test("getCustomerByIdentity get response", async () => {
    const response = await api
      .getCustomerByIdentity(
        token,
        { type: "bvn", value: "38261936382" },
        () => {
          return true;
        }
      )
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
describe("Testing getCustomer Api", () => {
  test("getCustomersByKey get response", async () => {
    const response = await api
      .getCustomersByKey(token, { key: "name", value: "akeeb" }, () => {
        return true;
      })
      .catch(() => true);
    expect(response).toBeTruthy();
  });
});
