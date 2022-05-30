class OkraModels {
  static accounts = {
    getById: {
      path: "accounts/getById",
      validKeys: { id: "" },
      paginationKeys: false
    },
    getAccountDetails: {
      path: "accounts/getAccountDetails",
      validKeys: { account: "" },
      paginationKeys: false
    },
    getByCustomerDate: {
      path: "accounts/getByCustomerDate",
      validKeys: { customer: "", from: "", to: "" },
      paginationKeys: true
    },
    getByCustomer: {
      path: "accounts/getByCustomer",
      validKeys: { customer: "" },
      paginationKeys: true
    },
    getByBalance: {
      path: "accounts/getByBalance",
      validKeys: { balance: "" },
      paginationKeys: true
    },
    getByBank: {
      path: "accounts/getByBank",
      validKeys: { bank: "" },
      paginationKeys: true
    },
    getByName: {
      path: "accounts/getByName",
      validKeys: { name: "" },
      paginationKeys: true
    },
    fetch: { path: "products/accounts", validKeys: {}, paginationKeys: true }
  };

  static customers = {
    findByKeyValue: {
      validKeys: { key: "", value: "" },
      path: "customers/find-customers-by",
      paginationKeys: false
    },
    getCustomerList: {
      validKeys: {},
      path: "customers/list",
      paginationKeys: true
    },
    flag: {
      path: "customers/flag",
      validKeys: { bank: "", customer: "" },
      paginationKeys: false
    },
    unflag: {
      path: "customers/unflag",
      validKeys: { bank: "", customer: "", unflag: "" },
      paginationKeys: false
    },
    remove: {
      path: "customers/remove",
      validKeys: { customer: "" },
      paginationKeys: false
    }
  };

  static wallet = {
    checkBalance: {
      path: "wallet/balance/check",
      validKeys: { currency: "" },
      paginationKeys: false
    },
    listTopups: { path: "wallet/topups", validKeys: {}, paginationKeys: false },
    autoTopupToggle: {
      path: "wallet/autotopup",
      validKeys: { currency: "" },
      paginationKeys: false
    },
    getById: {
      path: "wallet/get",
      validKeys: { id: "" },
      paginationKeys: false
    },
    fetch: { path: "wallet/list", validKeys: {}, paginationKeys: true },
    setThreshold: {
      path: "wallet/threshold",
      validKeys: { id: "", threshold: "" },
      paginationKeys: false
    },
    edit: {
      path: "wallet/edit",
      validKeys: { currency: "", amount: "", auto_topup: "", owner: "" },
      paginationKeys: false
    },
    getByCompanyId: {
      path: "wallet/company/#",
      validKeys: { id: "" },
      paginationKeys: false,
      urlValue: { id: "" }
    },
    toggleCompanyTopup: {
      path: `wallet/company/#/autotopup`,
      validKeys: { id: "", currency: "" },
      paginationKeys: false,
      urlValue: { id: "" }
    }
  };

  static sandbox = {
    createCustomers: {
      path: "customers/create",
      validKeys: {
        noOfAccount: 0,
        name: "",
        bank: "",
        username: "",
        password: "",
        type: "",
        volume: "",
        identity: 0,
        internetSpeed: 0
      },
      paginationKeys: false
    },
    listCustomers: {
      path: "customers/list",
      validKeys: {},
      paginationKeys: true
    },
    getCustomerById: {
      path: "customers/get",
      validKeys: { customer: "" },
      paginationKeys: false
    },
    generateCustomer: {
      path: "customers/generate",
      validKeys: {},
      paginationKeys: false
    }
  };

  static reports = {
    schedule: {
      path: "reports/schedule",
      validKeys: { report_type: "", title: "", format: "", day: "" },
      paginationKeys: false
    },
    fetch: { path: "reports/details", validKeys: {}, paginationKeys: false },
    getById: {
      path: "reports/details/#",
      validKeys: { id: "" },
      urlValue: { id: "" },
      paginationKeys: false
    },
    delete: {
      path: "reports/details/#",
      validKeys: { id: "" },
      urlValue: { id: "" },
      paginationKeys: false
    },
    download: {
      path: "reports/download/#",
      validKeys: { id: "" },
      urlValue: { id: "" },
      paginationKeys: false
    },
    getByScheduledId: {
      path: "reports/schedule/#",
      validkeys: { scheduled_id: "" },
      urlValue: { scheduled_id: "" },
      paginationKeys: false
    },
    update: {
      path: "reports/schedule/#",
      validKeys: { scheduled_id: "" },
      urlValue: { scheduled_id: "" },
      paginationKeys: false
    },
    deleteScheduled: {
      path: "reports/schedule/#",
      validKeys: { scheduled_id: "" },
      urlValue: { scheduled_id: "" },
      paginationKeys: false
    }
  };

  static auths = {
    getById: {
      validKeys: { id: "" },
      path: "auth/getById",
      paginationKeys: false
    },
    getByCustomerDate: {
      validKeys: { customer: "", from: "", to: "" },
      path: "auth/getByCustomerDate",
      paginationKeys: true
    },
    getByCustomer: {
      validKeys: { customer: "" },
      path: "auth/getByCustomer",
      paginationKeys: true
    },
    getByDate: {
      validKeys: { from: "", to: "" },
      path: "auth/getByDate",
      paginationKeys: true
    },
    getByBank: {
      validKeys: { bank: "" },
      path: "auth/getByBank",
      paginationKeys: true
    },
    fetch: { validKeys: {}, path: "products/auths", paginationKeys: true }
  };

  static balance = {
    getById: {
      validKeys: { id: "" },
      path: "balance/getById",
      paginationKeys: false,
      optionalOptions: { includePeriodic: false }
    },
    getByAccount: {
      validKeys: { account_id: "" },
      path: "balance/getByAccount",
      paginationKeys: true
    },
    getByType: {
      validKeys: { type: "", value: "" },
      path: "balance/getByType",
      paginationKeys: false
    },
    getByCustomerDate: {
      validKeys: { customer: "", from: "", to: "" },
      path: "balance/getByCustomerDate",
      paginationKeys: true
    },
    getByCustomer: {
      validKeys: { customer: "" },
      path: "balance/getByCustomer",
      paginationKeys: true
    },
    getByDate: {
      validKeys: { from: "", to: "" },
      path: "balance/getByDate",
      paginationKeys: true
    },
    check: {
      path: "balance/check",
      validKeys: { record_id: "", account_id: "" },
      paginationKeys: false
    },
    refresh: {
      path: "balance/refresh",
      validKeys: { account_id: "" },
      paginationKeys: false
    },
    enhanced: {
      path: "transactions/balance/process",
      validKeys: { account_id: "", customer_id: "", from: "", to: "" },
      paginationKeys: true
    }
  };

  static banks = {
    fetch: { valid: {}, path: "banks/list", paginationKeys: true },
    getById: {
      validKeys: { id: "" },
      path: "banks/getById",
      paginationKeys: false
    }
  };

  static identity = {
    verifyBvn: {
      validKeys: { bvn: "" },
      path: "products/kyc/bvn-verify",
      paginationKeys: false
    },
    verifyCustomer: {
      validKeys: { customer: "" },
      path: "products/kyc/customer-verify",
      paginationKeys: false
    },
    verifyRcTin: {
      validKeys: { rc_number: "", company_name: "", tin_number: "" },
      path: "products/kyc/rc-tin-verify",
      paginationKeys: false
    },
    verifyTin: {
      validKeys: { company_name: "", tin_number: "" },
      path: "products/kyc/tin-verify",
      paginationKeys: false
    },
    verifyRc: {
      validKeys: { company_name: "", rc_number: "" },
      path: "products/kyc/rc-verify",
      paginationKeys: false
    },
    verifyNuban: {
      validKeys: { nuban: "", bank: "" },
      path: "products/kyc/nuban-verify",
      paginationKeys: false
    },
    getById: {
      validKeys: { id: "" },
      path: "identity/getById",
      paginationKeys: false
    },
    getByCustomerDate: {
      validKeys: { customer: "", from: "", to: "" },
      path: "identity/getByCustomerDate",
      paginationKeys: true
    },
    getByCustomer: {
      validKeys: { customer: "" },
      path: "identity/getByCustomer",
      paginationKeys: true
    },
    getByDate: {
      validKeys: { from: "", to: "" },
      path: "identity/getByDate",
      paginationKeys: true
    },
    fetch: { validKeys: {}, path: "products/identities", paginationKeys: true },
    merge: {
      path: "products/identity/merge",
      validKeys: { initial: "", final: "" },
      paginationKeys: false
    }
  };

  static income = {
    getById: {
      validKeys: { id: "" },
      path: "income/getById",
      paginationKeys: false
    },
    getByCustomerDate: {
      validKeys: { customer: "", from: "", to: "" },
      path: "income/getByCustomerDate",
      paginationKeys: true
    },
    getByCustomer: {
      validKeys: { customer: "" },
      path: "income/getByCustomer",
      paginationKeys: true
    },
    getByDate: {
      validKeys: { from: "", to: "" },
      path: "income/getByDate",
      paginationKeys: true
    },
    fetch: { validKeys: {}, path: "products/income/get", paginationKeys: true },
    process: {
      path: "products/income/process",
      validKeys: { customer_id: "", bank: "" },
      paginationKeys: false
    },
    verifyrevnue: {
      path: "revenue/",
      validKeys: { to: "", from: "", pdf: "", customer: "" },
      paginationKeys: true
    }
  };

  static transactions = {
    getById: {
      validKeys: { id: "" },
      path: "transactions/getById",
      paginationKeys: false
    },
    getByAccount: {
      validKeys: { account: "" },
      path: "transactions/getByAccount",
      paginationKeys: true
    },
    getByBank: {
      validKeys: { bank: "" },
      path: "transactions/getByBank",
      paginationKeys: true
    },
    getByType: {
      validKeys: { type: "", value: "" },
      path: "transactions/getByType",
      paginationKeys: true
    },
    getByNuban: {
      validKeys: { nuban: "" },
      path: "transactions/getByNuban",
      paginationKeys: true
    },
    getByCustomerDate: {
      validKeys: { customer: "", from: "", to: "" },
      path: "transactions/getByCustomerDate",
      paginationKeys: true
    },
    getByCustomer: {
      validKeys: { customer: "" },
      path: "transactions/getByCustomer",
      paginationKeys: true
    },
    getByDate: {
      validKeys: { from: "", to: "" },
      path: "transactions/getByDate",
      paginationKeys: true
    },
    getNetwork: {
      path: "products/trans-networks/process",
      validKeys: { account: "", customer: "" },
      paginationKeys: false
    },
    refresh: {
      path: "transactions/refresh",
      validKeys: { account_id: "" },
      paginationKeys: false
    },
    enhanced: {
      path: "transactions/process",
      validKeys: { account: "" },
      paginationKeys: true
    },
    getSpendingPattens: {
      path: "products/spending-patterns/process",
      validKeys: { account: "" },
      paginationKeys: false
    },
    getCustomerGuarantors: {
      path: "products/guarantors/request",
      validKeys: { customer: "", guarantors: "" },
      paginationKeys: false
    },
    generateDownloadbleTransactions: {
      path: "products/transactions/download",
      validKeys: { record: "", downloadType: "" },
      paginationKeys: false
    },
    getCompleteView: {
      path: "complete-view/process",
      validKeys: { bvn: "", customer: "" },
      paginationKeys: false
    },
    getBenefactors: {
      path: "products/benefactors/process",
      validKeys: { account: "", customer: "", bank: "" },
      paginationKeys: false
    },
    generateDownloadbleRecords: {
      path: "products/record/download",
      validKeys: { downloadType: "" },
      paginationKeys: false
    }
  };

  static payments = {
    getById: {
      validKeys: { payment_id: "" },
      path: "pay/get/id",
      paginationKeys: true
    },
    payFetch: {
      validKeys: { customer_id: "" },
      path: "pay/get/",
      paginationKeys: true
    },
    payList: { validKeys: {}, path: "pay/list", paginationKeys: true },
    getPayAuthByCustomer: {
      validKeys: { customer: "" },
      path: "pay/authorization/getByCustomer",
      paginationKeys: true
    },
    fetchPayAuth: {
      validKeys: {},
      path: "pay/authorization/list",
      paginationKeys: true
    },
    createPaymentLink: {
      path: "pay/link/create",
      validKeys: {
        amount: "",
        name: "",
        currency: "",
        countries: "NG",
        account: ""
      },
      paginationKeys: false
    },
    verifyPayment: {
      path: "pay/verify",
      validKeys: { payment_id: "" },
      paginationKeys: false
    },
    initPayment: {
      path: "pay/initiate",
      validKeys: {
        account_to_debit: "",
        account_to_credit: "",
        amount: "",
        currency: ""
      },
      paginationKeys: false
    },
    initFuturePayment: {
      path: "authorization/initiate",
      validKeys: {
        authorization: "",
        amount: "",
        currency: "",
        start_date: "",
        end_date: ""
      },
      paginationKeys: false
    },
    cancelFuturePayment: {
      path: "pay/authorization/cancel",
      validKeys: { authorization: "", customer: "", link: "" },
      paginationKeys: false
    },
    reauthFuturePayment: {
      path: "pay/authorization/reauth",
      validKeys: { authorization: "", customer: "", link: "", account: "" },
      paginationKeys: false
    },
    initBulkPayments: {
      path: "bulkfiles/initiate",
      validKeys: { file: "", product: "" },
      paginationKeys: false
    }
  };

  static liabilities = {
    process: {
      path: "liabilities/process",
      validKeys: { customer_id: "" },
      paginationKeys: false
    },
    getById: {
      path: "liabilities/getById",
      validKeys: { id: "" },
      paginationKeys: false
    },
    getByCustomer: {
      path: "liabilities/getByCustomer",
      validKeys: { customer_id: "" },
      paginationKeys: true
    },
    fetch: {
      path: "liabilities/list",
      validKeys: {},
      paginationKeys: true
    },
    getByDate: {
      path: "liabilities/getByDate",
      validKeys: { from: "", to: "" },
      paginationKeys: true
    }
  };

  static Investments = {
    process: {
      path: "assets/investment/process",
      validKeys: { customer_id: "" },
      paginationKeys: false
    }
  };

  static Insurance = {
    process: {
      path: "insurance/process",
      validKeys: { customer_id: ""},
      paginationKeys: false
    },
    getByCustomer: {
      path: "insurance/getByCustomer",
      validKeys: { customer_id: "" },
      paginationKeys: true
    },
    fetch: {
      path: "insurance/list",
      validKeys: {},
      paginationKeys: true
    }
  };
}

export default OkraModels;
