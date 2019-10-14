# okra-node

## Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # generate docs and transpile code
```

### Publish

```sh
$ npm release
$ npm publish
```

It'll automatically run `test`, `lint`, `docs`, `build`, generate `CHANGELOG.md`, and push commits and tags to the remote repository.