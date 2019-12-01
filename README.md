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
* **getAccounts**: this returns all the accounts of customer associated to your company
  ```node
    okra_client.getAccounts(accessToken, {}, (err, results) => {
	// Handle err
    const records = results.accounts;
    });
  ```
* **getProducts**: this returns all the available products
  ```node
    okra_client.getProducts(accessToken, {}, (err, results) => {
	// Handle err
    const records = results.products;
    });
  ```
* **getBanks**: this returns the list of supported banks
  ```node
    okra_client.getBanks((err, results) => {
	// Handle err
    const records = results.banks;
    });
  ```
* **getBankById**: this returns a specific bank info
  ```node
    okra_client.getBankById(bankId,(err, results) => {
	// Handle err
    const records = results;
    });
  ```
* **getCustomers**: this returns an array of customers associated to your company
  ```node
    okra_client.getCustomers(accessToken, {},(err, results) => {
	// Handle err
    const records = results.customers;
    });
  ```

`accessToken` is a required string to access your account with us. You can find it as client token on the [setting page of the okra dashboard](https://dashboard.okra.ng/settings)

### Paginated Results
```node
    okra_client.getRecords(accessToken, {page:1,limit:50}, (err, results) => {
	// Handle err
    const records = results.records;
    console.log(records)
    });
  ```
## Option

|Name                   | Type           | Required            | Description         |
|-----------------------|----------------|---------------------|---------------------|
|  `page `      | `string`       | no                | The number page of data to fetch. | 
|  `limit `               | `String`       | no                | The number of data to fetch per call, where limit >= 0.



> For more information checkout [okra's documentation](https://docs.okra.ng)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.