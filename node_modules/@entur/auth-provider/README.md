# @entur/auth-provider

> Authentication provider for Entur applications. Primarily aimed at easing transition between legacy keycloak and auth0 in internal and data provider applications.

[![NPM](https://img.shields.io/npm/v/@entur/auth-provider.svg)](https://www.npmjs.com/package/@entur/auth-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @entur/auth-provider
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom';

import AuthProvider, { useAuth } from '@entur/auth-provider';

const auth0Config = {}; //<-- see auth0 docs for required fields
const auth0ClaimsNamespace = ''; // <-- required for custom roles parsing

// If set to false, app will not automatically redirect to login page
const loginAutomatically = false;

const App = () => {
  const {
    isAuthenticated
  } = useAuth();

  return (
    <h1>
      {isAuthenticated ? 'Yay' : 'Oh no ...'}
    </h2>
  )
}

render(
  <AuthProvider
    auth0Config={auth0Config}
    auth0ClaimsNamespace={auth0ClaimsNamespace}
    loginAutomatically={loginAutomatically}
  >
    <App />
  <AuthProvider>
);
```

## Release

First build:

    npm run build

Then bump version:

    npm version [major|minor|patch]

Then publish (use dry-run first to see what's included)

    npm publish --dry-run

    npm publish

Finally, push tags to GitHub

    git push origin --tags


## License

EUPL © [entur/nrp](https://github.com/entur/nrp)
