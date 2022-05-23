import RequsetWrapper from "./req-wrapper.js";
import Helpers from "./helpers.js";

class OkraClient {
  constructor() {
    this.env;
    this.apiSecret;
    this.apiBaseUrl;
    this.reqWrapper = new RequsetWrapper();
    this.helpers = new Helpers();
  }

  defineEnv(env) {
    switch (true) {
      case env == "production":
        return "http://localhost:5000/v2/";
        //return "https://api.okra.ng/v2/";
      case env == "sandbox":
        return "http://localhost:5000/v2/sandbox";
        //return "https://api.okra.ng/v2/sandbox/";
      default:
        throw `${env} is not a valid enviormental variable, please use production or sandbox`;
    }
  }

  async defineFetcher(options = {}, functionParamCheckerName, method) {
    const checkOptions = this.helpers[functionParamCheckerName](options);
    if (checkOptions.paginationKeys == true) {
      options = this.helpers.validateOptionalKeys(
        { page: 1, limit: 1 },
        options
      );
      options = this.helpers.validateRequiredKeys(
        checkOptions.validKeys,
        options
      );
    } else {
      options = this.helpers.validateRequiredKeys(
        checkOptions.validKeys,
        options
      );
    }
    if (checkOptions.urlValue != undefined) {
      const processedValues = this.helpers.addUrlParams(
        checkOptions.path,
        options,
        checkOptions.urlValue
      );
      checkOptions.path = processedValues.url;
      options = processedValues.options;
    }
    const { path } = checkOptions;
    const url = `${this.apiBaseUrl}${path}`;
    return await this.reqWrapper.requestHanlder(
      method,
      url,
      options,
      this.apiSecret
    );
  }

  async checkPaginationDefaults(paginationBool, options) {
    if (paginationBool == true) {
      return (options = this.helpers.validateOptionalKeys(
        { page: 1, limit: 1 },
        options
      ));
    }
    return options;
  }

  async defineAction(options = {}, validOptions, apiSecret, method) {
    const defaultOptions = validOptions.validKeys;
    options = await this.helpers.validateRequiredKeys(defaultOptions, options);
    options = await this.checkPaginationDefaults(
      defaultOptions.paginationKeys,
      options
    );
    if (defaultOptions.optionalOptions != undefined) {
      options = this.helpers.validateOptionalKeys(
        defaultOptions.optionalOptions,
        options
      );
    }
    if (validOptions.urlValue != undefined) {
      const processedValues = this.helpers.addUrlParams(
        validOptions.path,
        options,
        validOptions.urlValue
      );
      validOptions.path = processedValues.url;
      options = processedValues.options;
    }
    return await this.reqWrapper.requestHanlder(
      method,
      this.apiBaseUrl + validOptions.path,
      options,
      apiSecret
    );
  }
}

class Accounts extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkAccountsParams", "POST");
  }
}

class Customers extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkCustomersParams", "POST");
  }

  async flag(options = {}) {
    const modelOptions = this.helpers.customerModel.flag;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async unflag(options = {}) {
    const modelOptions = this.helpers.customerModel.unflag;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async remove(options = {}) {
    const modelOptions = this.helpers.customerModel.remove;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Wallet extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkWalletParams", "POST");
  }

  async checkBalance(options = {}) {
    const modelOptions = this.helpers.walletModel.checkBalance;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async listTopups(options = {}) {
    const modelOptions = this.helpers.walletModel.listTopups;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async getCompanyWallet(options = {}) {
    const modelOptions = this.helpers.walletModel.getByCompanyId;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "GET"
    );
  }

  async toggleCompanyAutotopups(options = {}) {
    const modelOptions = this.helpers.walletModel.toggleCompanyTopup;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async toggleAutotopups(optionalOptions = {}) {
    const modelOptions = this.helpers.walletModel.autoTopupToggle;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async edit(options = {}) {
    const modelOptions = this.helpers.walletModel.edit;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async setThreshold(options = {}) {
    const modelOptions = this.helpers.walletModel.setThreshold;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Sandbox extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async getCustomers(options = {}) {
    return super.defineFetcher(options, "checkSandboxParams", "POST");
  }

  async createCustomer(options = {}) {
    const modelOptions = this.helpers.sandboxModel.createCustomers;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async generateCustomers(options = {}) {
    const modelOptions = this.helpers.sandboxModel.generateCustomer;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Reports extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    const report = await super.defineFetcher(
      options,
      "checkGetReportParams",
      "GET"
    );
    if (report.report != undefined && report.report.length > 0) {
      const reportId = report.report[0]._id;
      const update = async () => {
        return this.update({ scheduled_id: reportId });
      };
      const del = async () => {
        return this.delete({ id: reportId });
      };
      const download = async () => {
        return this.download({ id: reportId });
      };
      report.update = update;
      report.delete = del;
      report.download = download;
    }
    return report;
  }

  async delete(options = {}) {
    return await super.defineFetcher(
      options,
      "checkDeleteReportParams",
      "DELETE"
    );
  }

  async update(options = {}) {
    const modelOptions = this.helpers.reportsModel.update;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "PUT"
    );
  }

  async download(options = {}) {
    const modelOptions = this.helpers.reportsModel.download;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "GET"
    );
  }

  async schedule(options = {}) {
    const modelOptions = this.helpers.reportsModel.schedule;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Auth extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkAuthParams", "POST");
  }
}

class Balance extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkBalanceParams", "POST");
  }

  async check(options = {}) {
    const modelOptions = this.helpers.balanceModel.check;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async refresh(options = {}) {
    const modelOptions = this.helpers.balanceModel.refresh;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async enhanced(options = {}) {
    const modelOptions = this.helpers.balanceModel.enhanced;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Banks extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkBanksParams", "GET");
  }
}

class Identity extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkIdentityGetParams", "POST");
  }

  async verify(options = {}) {
    return super.defineFetcher(options, "checkIdentityVerifyParams", "POST");
  }

  async merge(options = {}) {
    const modelOptions = this.helpers.identityModel.merge;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Income extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkIncomeParams", "POST");
  }

  async process(options = {}) {
    const modelOptions = this.helpers.incomeModel.process;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async verifyRevenue(options = {}) {
    const modelOptions = this.helpers.incomeModel.verifyrevnue;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Transactions extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkTransactionsGetParams", "POST");
  }

  async getNetwork(options = {}) {
    const modelOptions = this.helpers.transactionsModel.getNetwork;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async refresh(options = {}) {
    const modelOptions = this.helpers.transactionsModel.refresh;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async enhanced(options = {}) {
    const modelOptions = this.helpers.transactionsModel.enhanced;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async getSpendingPattens(options = {}) {
    const modelOptions = this.helpers.transactionsModel.getSpendingPattens;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async getCustomerGuarantors(options = {}) {
    const modelOptions = this.helpers.transactionsModel.getCustomerGuarantors;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async generateDownloadbleTransactions(options = {}) {
    const modelOptions = this.helpers.transactionsModel
      .generateDownloadbleTransactions;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async getCompleteView(options = {}) {
    const modelOptions = this.helpers.transactionsModel.getCompleteView;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async getBenefactors(options = {}) {
    const modelOptions = this.helpers.transactionsModel.getBenefactors;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async generateDownloadbleRecords(options = {}) {
    const modelOptions = this.helpers.transactionsModel
      .generateDownloadbleRecords;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Payments extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async createPaymentLink(options = {}) {
    const modelOptions = this.helpers.paymentsModel.createPaymentLink;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async verifyPayment(options = {}) {
    const modelOptions = this.helpers.paymentsModel.verifyPayment;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async initPayment(options = {}) {
    const modelOptions = this.helpers.paymentsModel.initPayment;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async initFuturePayment(options = {}) {
    const modelOptions = this.helpers.paymentsModel.initFuturePayment;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async cancelFuturePayment(options = {}) {
    const modelOptions = this.helpers.paymentsModel.cancelFuturePayment;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async reauthFuturePayment(options = {}) {
    const modelOptions = this.helpers.paymentsModel.reauthFuturePayment;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }

  async getPayAutherizations(options = {}) {
    return super.defineFetcher(options, "checkPayAutherizationsParams", "POST");
  }

  async getPayments(options = {}) {
    return super.defineFetcher(options, "checkPaymentsParams", "POST");
  }

  async initBulkPayments(options = {}) {
    const modelOptions = this.helpers.paymentsModel.initBulkPayments;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}

class Liabilities extends OkraClient {
  constructor(apiSecret, env) {
    super(apiSecret, env);
    this.apiSecret = apiSecret;
    this.apiBaseUrl = super.defineEnv(env);
  }

  async get(options = {}) {
    return super.defineFetcher(options, "checkLiabilitiesParams", "POST");
  }

  async process(options = {}) {
    const modelOptions = this.helpers.liabilitiesModel.process;
    return await super.defineAction(
      options,
      modelOptions,
      this.apiSecret,
      "POST"
    );
  }
}
export {
  OkraClient,
  Accounts,
  Customers,
  Wallet,
  Auth,
  Balance,
  Banks,
  Identity,
  Income,
  Transactions,
  Payments,
  Sandbox,
  Reports,
  Liabilities
};
