#!/bin/bash

# Install wasm-package
cargo install wasm-pack

# Build elliptic-curve package
cd elliptic-curve/ && wasm-pack build

# Install app dependencies
cd ../app && yarn install --force

echo -e "\n\nAll done! You can run \"cd app && yarn start\" to start the app\n\n"