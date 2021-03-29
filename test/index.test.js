/* eslint-disable camelcase */
import * as api from "../src";

require("dotenv").config();

const token = process.env.TOKEN;
const id = process.env.ID;
const record = process.env.RECORC_ID;
const account = process.env.ACCOUNT_ID;
const customer_id = process.env.CUSTOMER_ID;
const authorization_id = process.env.AUTHORIZATION_ID;
const payment_id = process.env.PAYMENT_ID;
const to = "2020-08-31";
const from = "2020-04-01";
const type = "ledger_balance";
const value = 2000;
const bank = process.env.BANK_ID;
const options = { name: "lanre" };

beforeEach(async () => {
  jest.setTimeout(100000);
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
    const response = await api.getTransactions(token, {}, () => {
      return true;
    });
    expect(response).toBe(true);
  });
});

describe("Testing getBalance Api", () => {
  test("getBalance get response", async () => {
    const response = await api.getBalances(token, {}, () => {
      return true;
    });
    console.log(response);
    expect(response).toBe(true);
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
    const response = await api.getProductsByRecord(
      token,
      { record_id: record, page: 1, limit: 1 },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getProductRecord by Customer Api", () => {
  test("getProductRecord by customer get response", async () => {
    const response = await api.getProductsByCustomer(
      token,
      { customer_id, page: 1, limit: 1 },
      () => {
        return true;
      }
    );
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
    const response = api.getBankById({ id: "5d6fe57a4099cc4b210bbeb3" }, () => {
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
    const response = api.getTotalDebitCredits(token, { account }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing processIncome Api", () => {
  test("processIncome get response", async () => {
    const response = await api.processIncome(token, { customer_id }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testin Spending Pattern Api", () => {
  test("Spending pattern get response", async () => {
    const response = await api.getSpendingPattern(
      token,
      { customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing Enhanced balance Api", () => {
  test("Enhanced balance get response", async () => {
    const response = await api.getEnhancedBalance(
      token,
      { customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthByCustomer get response", async () => {
    const response = await api.getAuthByCustomer(
      token,
      { customer: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthByDate get response", async () => {
    const response = await api.getAuthByDate(token, { to, from }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthByCustomerDate get response", async () => {
    const response = await api.getAuthByCustomerDate(
      token,
      { to, from, customer: id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getAuthBy Api", () => {
  test("getAuthByCustomer get response", async () => {
    const response = await api.getAuthByOptions(token, { options }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});
describe("Testing getAuthBy Api", () => {
  test("getAuthByBank get response", async () => {
    const response = await api.getAuthByBank(token, { bank: id }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getAuthBy Api", () => {
  test("getAuthById get response", async () => {
    const response = await api.getAuthById(token, { id }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});
// //
describe("Testing getBalanceBy Api", () => {
  test("getBalanceByAccount get response", async () => {
    const response = await api.getBalanceByAccount(token, { account }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByCustomer get response", async () => {
    const response = await api.getBalanceByCustomer(
      token,
      { customer: id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByDate get response", async () => {
    const response = await api.getBalanceByDate(token, { to, from }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByCustomerDate get response", async () => {
    const response = await api.getBalanceByCustomerDate(
      token,
      { to, from, customer: id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceById get response", async () => {
    const response = await api.getBalanceById(
      token,
      { id: "5f1d9a30ee4e4d791e179f97" },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByOptions get response", async () => {
    const response = await api.getBalanceByOptions(token, { options }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getBalanceBy Api", () => {
  test("getBalanceByType get response", async () => {
    const response = await api.getBalanceByType(token, { type, value }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionById get response", async () => {
    const response = await api.getTransactionById(
      token,
      { id: "5f1d9abd4bdecf0e181e8ad2" },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByAccount get response", async () => {
    const response = await api.getTransactionByAccount(
      token,
      { account },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByBank get response", async () => {
    const response = await api.getTransactionByBank(token, { bank }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByCustomer get response", async () => {
    const response = await api.getTransactionByCustomer(
      token,
      { customer: id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByDate get response", async () => {
    const response = await api.getTransactionByDate(token, { to, from }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByCustomerDate get response", async () => {
    const response = await api.getTransactionByCustomerDate(
      token,
      { to, from, customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByOptions get response", async () => {
    const response = await api.getTransactionByOptions(
      token,
      { options },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getTransactionBy Api", () => {
  test("getTransactionByType get response", async () => {
    const response = await api.getTransactionByType(
      token,
      { type: "credit", value },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityById get response", async () => {
    const response = await api.getIdentityById(token, { id }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByCustomer get response", async () => {
    const response = await api.getIdentityByCustomer(
      token,
      { customer: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByDate get response", async () => {
    const response = await api.getIdentityByDate(token, { to, from }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByCustomerDate get response", async () => {
    const response = await api.getIdentityByCustomerDate(
      token,
      { to, from, customer: id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getIdentityBy Api", () => {
  test("getIdentityByOptions get response", async () => {
    const response = await api.getIdentityByOptions(token, { options }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeById get response", async () => {
    const response = await api.getIncomeById(
      token,
      { id: "5f5ad9e43103d912f16a36fb" },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByOptions get response", async () => {
    const response = await api.getIncomeByOptions(token, { options }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByDate get response", async () => {
    const response = await api.getIncomeByDate(token, { to, from }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByCustomerDate get response", async () => {
    const response = await api.getIncomeByCustomerDate(
      token,
      { to, from, customer: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getIncomeBy Api", () => {
  test("getIncomeByCustomer get response", async () => {
    const response = await api.getIncomeByCustomer(
      token,
      { customer: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getAccountBy Api", () => {
  test("getAccountByCustomerDate get response", async () => {
    const response = await api.getAccountByCustomerDate(
      token,
      { to, from, customer: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing getCustomer Api", () => {
  test("getCustomerDTI get response", async () => {
    const response = await api.getCustomerDTI(
      token,
      { customerId: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getCustomer Api", () => {
  test("getCustomerByIdentity get response", async () => {
    const response = await api.getCustomerByIdentity(
      token,
      { type: "bvn", value: "38261936382" },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getCustomer Api", () => {
  test("getCustomersByKey get response", async () => {
    const response = await api.getCustomersByKey(
      token,
      { key: "bvn", value: "22188789177" },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getAccountById Api", () => {
  test("getAccountById", async () => {
    const response = await api.getAccountById(token, { id: account }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});
describe("Testing getAccountByCustomer Api", () => {
  test("getAccountByCustomer", async () => {
    const response = await api.getAccountByCustomer(
      token,
      { customer: customer_id },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getAccountByBank Api", () => {
  test("getAccountByBank", async () => {
    const response = await api.getAccountByBank(token, { bank }, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});
describe("Testing checkBalance Api", () => {
  test("checkBalance", async () => {
    const response = await api.checkBalance(
      token,
      { account_id: account, record_id: record },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing refreshBalance Api", () => {
  test("refreshBalance", async () => {
    const response = await api.refreshBalance(
      token,
      { account_id: account, record_id: record },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getTransactionByRecord Api", () => {
  test("getTransactionByRecord", async () => {
    const response = await api.getTransactionByRecord(
      token,
      { record_id: record },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing refreshTransaction Api", () => {
  test("refreshTransaction", async () => {
    const response = await api.refreshTransaction(
      token,
      { account_id: account },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing enhancedTransaction Api", () => {
  test("enhancedTransaction", async () => {
    const response = await api.getEnhancedTransaction(
      token,
      { account },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getIncome Api", () => {
  test("getIncome", async () => {
    const response = await api.getIncome(token, {}, () => {
      return true;
    });
    expect(response).toBeTruthy();
  });
});
describe("Testing createCharge Api", () => {
  test("createCharge", async () => {
    const response = await api.createCharge(
      token,
      {
        amount: 50000,
        name: "urch money",
        currency: "NGN",
        note: "pay me my money",
        countries: ["NG"],
        schedule: {
          interval: "string",
          startDate: "string",
          endDate: "string"
        },
        color: "string",
        type: "one-time",
        account,
        support_email: "string",
        data: false,
        success_url: "string",
        callback_url: "string",
        continue_cta: "string"
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});

describe("Testing initiatePayment Api", () => {
  test("initiatePayment", async () => {
    const response = await api.initiatePayment(
      token,
      {
        account_to_debit: account,
        amount: 50000,
        currency: "NGN"
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing initiateFuturePayment Api", () => {
  test("initiateFuturePayment", async () => {
    const response = await api.initiateFuturePayment(
      token,
      {
        authorization: authorization_id,
        amount: 10000,
        initialAmount: 7000,
        currency: "NGN",
        startDate: "2021/05/21",
        endDate: "2021/06/27",
        interval: "monthly"
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing cancelFuturePayment Api", () => {
  test("cancelFuturePayment", async () => {
    const response = await api.cancelFuturePayment(
      token,
      {
        authorization: authorization_id,
        customer: customer_id,
        link: "602ba2c5cf08f006d11df72a"
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing reauthFuturePayment Api", () => {
  test("reauthFuturePayment", async () => {
    const response = await api.reauthFuturePayment(
      token,
      {
        authorization: authorization_id,
        customer: customer_id,
        link: "602ba2c5cf08f006d11df72a"
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing listPaymentAuthorizations Api", () => {
  test("listPaymentAuthorizations", async () => {
    const response = await api.listPaymentAuthorizations(
      token,
      {
        page: 1
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getPayments Api", () => {
  test("getPayments", async () => {
    const response = await api.getPayments(
      token,
      {
        payment_id
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing getPaymentById Api", () => {
  test("getPaymentById", async () => {
    const response = await api.getPaymentById(
      token,
      {
        payment_id
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
describe("Testing verifyPayment Api", () => {
  test("verifyPayment", async () => {
    const response = await api.verifyPayment(
      token,
      {
        payment_id
      },
      () => {
        return true;
      }
    );
    expect(response).toBeTruthy();
  });
});
