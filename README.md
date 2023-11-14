# yarn-plugin-dotenv

A dead simple plugin to load your `.env` variables to `.yarnrc.yml` (Yarn v4+).

## Installation

```sh
yarn plugin import https://raw.githubusercontent.com/mlmmn/yarn-plugin-dotenv/v2.0.0/bundles/@yarnpkg/plugin-dotenv.js
```

For version supporting Yarn v3, use `v1.0.1` tag.

```sh
yarn plugin import https://raw.githubusercontent.com/mlmmn/yarn-plugin-dotenv/v1.0.1/bundles/@yarnpkg/plugin-dotenv.js
```

## Caveats

This plugin will traverse folders up until it finds `.env` file - it does not support other names (like `.env.local` etc.)

## CI usage

This plugin by default does not attempt to call `dotenv.config()` when on CI environment. To opt-in, simply add `YARNPLUGIN_DOTENV_CI=true` somewhere in your CI provider variables configuration.
