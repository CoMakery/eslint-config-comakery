# CoMakery ESLint Shareable Config

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

## Install

```bash
npm install eslint-config-comakery
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use this ESLint shareable config, first run this:

```bash
npm install --save-dev eslint-config-comakery
```

Then, add this to your .eslintrc file:

```
{
  "extends": "comakery"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT
