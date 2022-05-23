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


> For more information checkout [okra's documentation](https://docs.okra.ng)

## Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
