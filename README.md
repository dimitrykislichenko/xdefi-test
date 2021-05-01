# Elliptic Curve Signature Generator

This application allow to generate signature for provided private key and message.

## App

Represents UI part of the application that allows to specify private key and message for which signature will be generated.

## Elliptic Curve

This is thin WASM wrapper on top of `https://github.com/0xProject/OpenZKP/tree/master/crypto/elliptic-curve-crypto` which expose single function that allow to generate signature.

## Install

Each application has it's own README file with instructions, but you can just run `build.sh` which will automate the process. If for some reason it will fail, you can follow instruction manually.
