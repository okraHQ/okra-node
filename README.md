# okra-node
> This is a npm module that abstracts the complexity of using okra with node.

## USAGE

### 1. Install the module

Install with `yarn`:

```bash
yarn add okra-node
```

_but you can use `npm` if you like:_

```bash
npm install --save okra-node
```

### 2. Import the module
In your `app.js` or any module where the component would be used:

```node
import * as okra_client from "okra-node";
```

### 3. Implementation
Okra node exposes a bunch of APIs that might be useful in your application.

* **getAuth**: get all successful bank verification for customer
  ```node
    okra_client.getAuth(accessToken, {}, (err, results) => {
	// Handle err
    const auths = results.auths;
    });
  ```
* **getTransactions**: get all transactions associated to your bank
  ```node
    okra_client.getTransactions(accessToken, {}, (err, results) => {
	// Handle err
    const transactions = results.trans;
    });
  ```
* **getBalances**: this returns the real-time balance for each of an Record's accounts
  ```node
    okra_client.getBalances(accessToken, {}, (err, results) => {
	// Handle err
    const balances = results.balances;
    });
  ```
* **getIdentities**: this returns all the identities of customer related to your company account
  ```node
    okra_client.getIdentities(accessToken, {}, (err, results) => {
	// Handle err
    const identities = results.identities;
    });
  ```
* **getRecords**: this returns all the records of transaction
  ```node
    okra_client.getRecords(accessToken, {}, (err, results) => {
	// Handle err
    const records = results.records;
    });
  ```
* **retryRecord**: this re-run a record
  ```node
    okra_client.retryRecord(accessToken, {record_id: string, user: string}, (err, results) => {
	    // Handle err
    });
  ```
* **getAccounts**: this returns all the accounts of customer associated to your company
  ```node
    okra_client.getAccounts(accessToken, {}, (err, results) => {
	    // Handle err
    const accounts = results.accounts;
    });
  ```
* **getTotalDebitCredits**: this returns the total credit and debits made on a customer account associated to your company.
  ```node
    okra_client.getTotalDebitCredits(accessToken, {account:"5e1efdsa842182515cedd066"}, (err, results) => {
	    // Handle err
    const total = results.result
    });
  ```
Field | Required | Description
---|---|---
**account**<br>`String` | yes | Id of the said account.

* **getProducts**: this returns all the available products
  ```node
    okra_client.getProducts(accessToken, {}, (err, results) => {
	    // Handle err
    const product = results.products;
    });
  ```
  
* **getProductsByRecord**: retrieve either AUTH, BALANCE, TRANSACTIONS, IDENTITY, INCOME of a customer using record Id.
  ```node
    okra_client.getProductsByRecord(accessToken, {}, (err, results) => {
	    // Handle err
    const product = results;
    });
  ```

* **getRecordByMethod**: this returns all the available products
  ```node
    okra_client.getRecordByMethod(accessToken, { record: 'record_id', method: 'okra_product' }, (err, results) => {
	    // Handle err
    const product = results['okra_product'];
    });
  ```

* **getProductsByCustomer**: to retrieve either AUTH, BALANCE, TRANSACTIONS, IDENTITY, INCOME of a customer using their customer Id.
  ```node
    okra_client.getProductsByCustomer(accessToken, {}, (err, results) => {
	    // Handle err
    const product = results;
    });
  ```

* **getBanks**: this returns the list of supported banks
  ```node
    okra_client.getBanks((err, results) => {
	    // Handle err
    const banks = results.banks;
    });
  ```
* **getBankById**: this returns a specific bank info
  ```node
    okra_client.getBankById(bankId,(err, results) => {
	// Handle err
    const bank = results;
    });
  ```
* **getCustomers**: this returns an array of customers associated to your company
  ```node
    okra_client.getCustomers(accessToken, {},(err, results) => {
	    // Handle err
    const customers = results.customers;
    });
  ```
* **mergeIdentities**: Okra offers an api that helps to merge two identical identities into a single identity
  ```node
    okra_client.mergeIdentities(accessToken,
      {
          final:"5e1efaaa848182515cedd066",
          initial:"5e20c13ed2356505c26f5a94",
          options: {}
      },
      (err, results) => {
        // Handle err
      const mergeResult = results;
      });
  ```

Field | Required | Description
---|---|---
**final**<br>`String` | yes | Id of identity to merge into.
**initial**<br>`String` | yes | Id of identity moved from.
**options**<br>`Object` | no | other identities information might want to effect.

**Options Schema**

Key | Description
---|---
**bvn**<br>`Number`| Bank Verification Number of the entity associated with this identity
**nin**<br>`Number`| NIN of the entity associated with this identity
**national_id**<br>`Number`| National Id of the entity associated with this identity
**nims**<br>`String`| NIMs number of the entity associated with this identity
**rc_number**<br>`String`| Company RC number of the entity associated with this identity
**voters_id**<br>`String`| Voters Id of the entity associated with this identity
**marital_status**<br>`String`| Marital Status of the entity associated with this identity
**gender**<br>`String`| Gender of the entity associated with this identity
**dob**<br>`Date`| Date of birth of the entity associated with this identity
**mothers_maiden**<br>`String`| Mother's maiden name of the entity associated with this identity

`accessToken` is a required string to access your account with us. You can find it as client token on the [setting page of the okra dashboard](https://dashboard.okra.ng/settings)


> For more information checkout [okra's documentation](https://docs.okra.ng)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
