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

Okra Node exposes all the API endpoint that are available in Okra docs (https://docs.okra.ng/reference/). Please find the parameters you can pass to the endpoints in the API refenece mentioned above.

### 4. Okra Classes

The Okra Node Client is devided to classes that can be consumed sepratley as it's necessary for you. The classes are inheriting Okra Client class, so you'll need to pass the enviornment and Okra Secret (found here: https://dash.okra.ng/settings/api-keys) to each class you implement.

Each function of the class will intake an options object as argument. The object can contain different parameters that you would like to return, for example, you can pass the object: `{id: "1234567890"}` to `Auth.get()` and it will point that request to the correct endpoint.

#### Examples

* **list accounts**:
```
const accounts = new Accounts(okraSecret, env);
const getAccounts = accounts.get()
```

* **get account by id**:

```
const accountId = { id: 'bb11189898kll' }
const accounts = new Accounts(okraSecret, env);
const getAccounts = accounts.get(accountId);
```

* **check balance**:
```
const options = {account_id: "bbb118989kll", record_id: "ccc1144090987"}
const balances = new Balance(okraSecret, env);
const checkBalance = balances.check(options)
```

### 5. Pagination

If pagination is available, you can call the next and previous page via the `.nextPage()` or `.prevPage()` derivited from the resposne object.

Example:

```
const reports = new Reports(okraSecret, env);

const getReports = reports.get();
const getNextPage = getReports.nextPage();
```

* **Auth**: Allows you to get information on extisting authentication. 

**Available options**:
* Get Auth list - {} or null - https://docs.okra.ng/reference/fetchauths
* Get Auth by Id - {id: <<string>>} - https://docs.okra.ng/reference/getauthbyid
* Get Auth by customer id - { customer: <<string>>, from: <<date>>, to: <<date>> } - https://docs.okra.ng/reference/getauthbycustomer
* Get Auth by date - { from: <<date>>, to: <<date>>, page: <<int>>, limit: <<int>>  } - https://docs.okra.ng/reference/getauthbydate
* Get Auth by bank - { bank: <<string>> ,page: <<int>> , limit: <<int>> } - https://docs.okra.ng/reference/getauthbybank
* Get Auth by customer date - { customer: <<string>>, from: <<date>>, to: <<date>>, page: <<int>>, limit: <<int>> } - https://docs.okra.ng/reference/getauthbycustomerdate


For more information checkout [okra's documentation](https://docs.okra.ng)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
