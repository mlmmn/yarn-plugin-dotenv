# yarn-plugin-dotenv

A dead simple plugin to load your `.env` variables to `.yarnrc.yml` (Yarn v3+).

## Installation

```sh
yarn plugin import https://raw.githubusercontent.com/mlmmn/yarn-plugin-dotenv/v1.0.0/bundles/@yarnpkg/plugin-dotenv.js
```

## CI usage

This plugin by default does not attempt to call `dotenv.config()` when on CI environment. To opt-in, simply add `YARNPLUGIN_DOTENV_CI=true` somewhere in your CI provider variables configuration.
