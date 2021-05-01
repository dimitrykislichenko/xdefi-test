# Elliptic Curve Signature

WASM page that exports `sign(key: string, msg: string)` function that generates signature for provided private key and message.

## Build

To build this package, you'll need `wasm-pack`. If you don't have it run:

```bash
cargo install wasm-pack
```

To build package run:

```bash
wasm-pack build
```

## Ussage

Here is an example how to use package on the client side:

```js
const promise = await import("elliptic-curve");
const result = promise.sign(data.privateKey, data.message);
console.log(result);
```

## Tests

To run tests, execute:

```bash
cargo test
```

### Datasets for testing

```bash
Private Key:
03c1e9550e66958296d11b60f8e8e7a7ad990d07fa65d5f7652c4a6c87d4e3cc

Message:
Hello World

Output:
{
  "r":"0x050df7b9c226c8a6a21a9c9fdf4dc76f0a1fb77ef9c5ac4795f4d8b070176efd","w":"0x03004246e5e23c6b6d6112cc2fd5256d7c26cca9aca8c37de912175cf26cf101"
}
```
