import OkraModels from "./models.js";

class Helpers {
  constructor() {
    this.accountsModel = OkraModels.accounts;
    this.customerModel = OkraModels.customers;
    this.authsModel = OkraModels.auths;
    this.balanceModel = OkraModels.balance;
    this.banksModel = OkraModels.banks;
    this.identityModel = OkraModels.identity;
    this.incomeModel = OkraModels.income;
    this.transactionsModel = OkraModels.transactions;
    this.paymentsModel = OkraModels.payments;
    this.walletModel = OkraModels.wallet;
    this.sandboxModel = OkraModels.sandbox;
    this.reportsModel = OkraModels.reports;
    this.liabilitiesModel = OkraModels.liabilities;
  }

  addUrlParams(url, options, defaultUrlValues) {
    const regex = new RegExp("#");
    if (regex.test(url)) {
      for (const key in defaultUrlValues) {
        if (defaultUrlValues.hasOwnProperty(key)) {
          url = url.replace("#", options[key]);
          delete options[key];
          return { url, options };
        }
      }
    }
  }

  checkAccountsParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.accountsModel.getById;
      case options.account != undefined:
        return this.accountsModel.getAccountDetails;
      case options.customer != undefined &&
        options.from != undefined &&
        options.to != undefined:
        return this.accountsModel.getByCustomerDate;
      case options.customer != undefined:
        return this.accountsModel.getByCustomer;
      case options.balance:
        return this.accountsModel.getByBalance;
      case options.bank != undefined:
        return this.accountsModel.getByBank;
      case options.name != undefined:
        return this.accountsModel.getByName;
      case options.page != undefined && options.limit != undefined:
        return this.accountsModel.fetch;
      case Object.keys(options).length === 0:
        return this.accountsModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkCustomersParams(options) {
    switch (true) {
      case options.key != undefined || options.value != undefined:
        return this.customerModel.findByKeyValue;
      case options.page != undefined && options.limit != undefined:
        return this.customerModel.getCustomerList;
      case Object.keys(options).length === 0:
        return this.customerModel.getCustomerList;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkWalletParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.walletModel.getById;
      case options.page != undefined && options.limit != undefined:
        return this.walletModel.fetch;
      case Object.keys(options).length === 0:
        return this.walletModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkSandboxParams(options) {
    switch (true) {
      case options.customer != undefined:
        return this.sandboxModel.getCustomerById;
      case options.page != undefined && options.limit != undefined:
        return this.sandboxModel.listCustomers;
      case Object.keys(options).length === 0:
        return this.sandboxModel.listCustomers;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkGetReportParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.reportsModel.getById;
      case options.scheduled_id != undefined:
        return this.reportsModel.getByScheduledId;
      case options.page != undefined && options.limit != undefined:
        return this.reportsModel.fetch;
      case Object.keys(options).length === 0:
        return this.reportsModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkDeleteReportParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.reportsModel.delete;
      case options.scheduled_id != undefined:
        return this.reportsModel.deleteScheduled;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkAuthParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.authsModel.getById;
      case options.customer != undefined &&
        options.from != undefined &&
        options.to != undefined:
        return this.authsModel.getByCustomerDate;
      case options.customer != undefined:
        return this.authsModel.getByCustomer;
      case options.from != undefined || options.to != undefined:
        return this.authsModel.getByDate;
      case options.bank != undefined:
        return this.authsModel.getByBank;
      case options.page != undefined && options.limit != undefined:
        return this.authsModel.fetch;
      case Object.keys(options).length === 0:
        return this.authsModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkBalanceParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.balanceModel.getById;
      case options.account_id != undefined:
        return this.balanceModel.getByAccount;
      case options.type != undefined || options.value != undefined:
        return this.balanceModel.getByType;
      case options.customer != undefined &&
        options.from != undefined &&
        options.to != undefined:
        return this.balanceModel.getByCustomerDate;
      case options.customer != undefined:
        return this.balanceModel.getByCustomer;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkBanksParams(options) {
    switch (true) {
      case Object.keys(options).length === 0:
        return this.banksModel.fetch;
      case options.id != undefined:
        return this.banksModel.getById;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkIdentityGetParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.identityModel.getById;
      case options.customer != undefined &&
        options.from != undefined &&
        options.to != undefined:
        return this.identityModel.getByCustomerDate;
      case options.customer != undefined:
        return this.identityModel.getByCustomer;
      case options.from != undefined || options.to != undefined:
        return this.identityModel.getByDate;
      case options.page != undefined && options.limit != undefined:
        return this.identityModel.fetch;
      case Object.keys(options).length === 0:
        return this.identityModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkIdentityVerifyParams(options) {
    switch (true) {
      case options.bvn != undefined:
        return this.identityModel.verifyBvn;
      case options.customer != undefined:
        return this.identityModel.verifyCustomer;
      case options.rc_number != undefined &&
        options.company_name != undefined &&
        options.tin_number != undefined:
        return this.identityModel.verifyRcTin;
      case options.company_name != undefined && options.tin_number != undefined:
        return this.this.identityModel.verifyTin;
      case options.company_name != undefined && options.rc_number != undefined:
        return this.this.identityModel.verifyRc;
      case options.nuban != undefined && options.bank != undefined:
        return this.this.identityModel.verifyNuban;
      // NUBAN NAME VERIFY
      // case options.nuban != undefined && options.bank != undefined:
      //    return {validKeys: {nuban: '', bank: ''}, path: 'products/kyc/nuban-name-verify', paginationKeys: false};
      default:
        throw "Invalid parameters passed";
    }
  }

  checkIncomeParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.incomeModel.getById;
      case options.customer != undefined &&
        options.from != undefined &&
        options.to != undefined:
        return this.incomeModel.getByCustomerDate;
      case options.customer != undefined:
        return this.incomeModel.getByCustomer;
      case options.from != undefined || options.to != undefined:
        return this.incomeModel.getByDate;
      case options.page != undefined && options.limit != undefined:
        return this.incomeModel.fetch;
      case Object.keys(options).length === 0:
        return this.incomeModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkTransactionsGetParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.transactionsModel.getById;
      case options.account != undefined:
        return this.transactionsModel.getByAccount;
      case options.bank != undefined:
        return this.transactionsModel.getByBank;
      case options.type != undefined || options.value != undefined:
        return this.transactionsModel.getByType;
      case options.nuban != undefined:
        return this.transactionsModel.getByNuban;
      case options.customer != undefined &&
        options.from != undefined &&
        options.to != undefined:
        return this.transactionsModel.getByCustomerDate;
      case options.customer != undefined:
        return this.transactionsModel.getByCustomer;
      case options.from != undefined || options.to != undefined:
        return this.transactionsModel.getByDate;
      case options.page != undefined && options.limit != undefined:
        throw "Please pass a parameter. Refer to the docs for more information: https://docs.okra.ng/reference/";
      case Object.keys(options).length === 0:
        throw "Please pass a parameter. Refer to the docs for more information: https://docs.okra.ng/reference/";
      default:
        throw "Invalid parameters passed";
    }
  }

  checkPaymentsParams(options) {
    switch (true) {
      case options.payment_id != undefined:
        return this.paymentsModel.getById;
      case options.customer_id != undefined:
        return this.paymentsModel.payFetch;
      case options.page != undefined && options.limit != undefined:
        return this.paymentsModel.payList;
      case Object.keys(options).length === 0:
        return this.paymentsModel.payList;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkPayAutherizationsParams(options) {
    switch (true) {
      case options.customer != undefined:
        return this.paymentsModel.getPayAuthByCustomer;
      case options.page != undefined && options.limit != undefined:
        return this.paymentsModel.fetchPayAuth;
      case Object.keys(options).length === 0:
        return this.paymentsModel.fetchPayAuth;
      default:
        throw "Invalid parameters passed";
    }
  }

  checkLiabilitiesParams(options) {
    switch (true) {
      case options.id != undefined:
        return this.liabilitiesModel.getById;
      case options.customer_id != undefined:
        return this.liabilitiesModel.getByCustomer;
      case options.from != undefined || options.to != undefined:
        return this.liabilitiesModel.getByDate;
      case options.page != undefined && options.limit != undefined:
        return this.liabilitiesModel.fetch;
      case Object.keys(options).length === 0:
        return this.liabilitiesModel.fetch;
      default:
        throw "Invalid parameters passed";
    }
  }

  validateOptionalKeys(validDefaultOptions, passedOptions) {
    for (const key in validDefaultOptions) {
      if (!(key in passedOptions) || passedOptions[key] == undefined) {
        passedOptions[key] = validDefaultOptions[key];
      }
    }
    return passedOptions;
  }

  validateRequiredKeys(validDefaultOptions, passedOptions) {
    for (const key in validDefaultOptions) {
      if (!(key in passedOptions) || passedOptions[key] == undefined) {
        throw `${key} parameter is required`;
      }
    }
    return passedOptions;
  }
}

export default Helpers;
