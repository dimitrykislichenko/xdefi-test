# Signature Generator

This is simple UI that generates signature for provided private key and message.

## Insall

Make sure that `elliptic-curve` package is located in the same folder as current project and that it's built. Follow instructions in `elliptic-curve` project to learn how to build it.

Run command to install all required dependencies:

```bash
yarn install
```

## Run

To run an app, execute following command:

```bash
yarn start
```

## NOTE

Private key should be in HEX formated. You can checkout following datasets for testing:

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

## TODO

1. Add validation if input fields
2. Add more tests
