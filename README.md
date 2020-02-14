<div align="center">

[![Github Tag][github-tag-image]][github-tag-url]

</div>

## Install

First, clone the repo via git:

```bash
git clone https://github.com/a-hacker/cicada.git
```

And then install the dependencies with yarn.

```bash
$ cd cicada
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```

## License

MIT © [Cicada](https://github.com/a-hacker/cicada)

[github-tag-image]: https://img.shields.io/github/tag/a-hacker/cicada.svg?label=version
[github-tag-url]: https://github.com/a-hacker/cicada/releases/latest
