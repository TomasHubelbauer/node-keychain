# Node KeyChain

This repository contains a Node script for setting and getting a secret value
from the macOS KeyChain.

## Installation

### Git

`git submodule add https://github.com/tomashubelbauer/node-keychain`

### NPM

`npm i tomashubelbauer/node-keychain`

## Usage

### `setSecret`

```js
await setSecret('account', 'service', 'password');
```

This method will fail if the secret is already set.

### `getSecret`

```js
const secret = await getSecret('account', 'service');
```
