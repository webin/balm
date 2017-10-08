<div align="center">
  <a href="http://balmjs.com/">
    <img width="128" heigth="128" src="http://balmjs.com/logo.png">
  </a>
  <br>
  <br>

  [![NPM version][npm-image]][npm-url]
  [![Build Status][travis-image]][travis-url]
  [![Build Status][appveyor-image]][appveyor-url]
  [![Dependency Status][daviddm-image]][daviddm-url]
  [![Coverage percentage][coveralls-image]][coveralls-url]
  <br>

  <h1>BalmJS</h1>
  <p>A flexible Front-End workflow for webapps</p>
</div>

## Ecosystem

Project | Status | Description
------- | ------ | -----------
[balm-cli](https://github.com/balmjs/balm-cli) | [![NPM version][npm-image]][balm-cli-url] | Project scaffolding 👻
[balm-gui](https://github.com/balmjs/balm-gui) | [![NPM version][npm-image]][balm-gui-url] | GUI for BalmJS
[balm-ui](https://github.com/balmjs/ui-vue)    | [![NPM version][npm-image]][balm-ui-url] | Material Components + Vue
[balm-ui-lite](https://github.com/balmjs/ui-vue-lite) | [![NPM version][npm-image]][balm-ui-lite-url] | Material Design Lite + Vue

## Demo

- [x] [HTML](https://github.com/balmjs/demo-html)
- [x] [Laravel](https://github.com/balmjs/demo-laravel)
- [x] [Vue](https://github.com/balmjs/demo-vue)
- [x] [TypeScript](https://github.com/balmjs/demo-ts)
- [x] AnyAwesome...

## [Structure](https://github.com/balmjs/demo-boilerplate)

```
project
├── .tmp // for development
├── dist // for production
├─┬ src
│ ├── fonts
│ ├── images
│ ├── media
│ ├─┬ scripts
│ │ └── main.js
│ ├─┬ styles
│ │ └── main.css
│ └── index.html
├─┬ config
│ ├── balmrc.js
│ └── publish.js
├── .dotfile
├── gulpfile.js
├── package.json
└── ...
```

## [Installation & Setup](https://github.com/balmjs/balm/blob/master/docs/installation.md)

```sh
yarn add -D gulp balm
# OR
npm install -D gulp balm
```

## [Configuration](https://github.com/balmjs/balm/blob/master/docs/configuration.md)

File: `gulpfile.js`

```js
// 1. import balm
var balm = require('balm');

// 2. config balm
balm.config = {
  // your project config
};

// 3. run balm
balm.go();
```

- [example](https://github.com/balmjs/balm/blob/master/docs/_gulpfile.js)
- [template](https://github.com/balmjs/balm/blob/master/docs/_index.html)
- [old template](https://github.com/balmjs/balm/blob/master/docs/_index-old.html)(version < 0.8.1)

## [Custom Task](https://github.com/balmjs/balm/blob/master/docs/custom-task.md)

## Usage

```sh
# for development
$ gulp

# for production
$ gulp --production
```

## [Common Issues](https://github.com/balmjs/balm/blob/master/docs/issues.md)

## License

[MIT](https://opensource.org/licenses/MIT)

© 2016-present, [Elf-mousE](http://elf-mouse.me/)


[npm-image]: https://badge.fury.io/js/balm.svg
[npm-url]: https://npmjs.org/package/balm
[travis-image]: https://travis-ci.org/balmjs/balm.svg?branch=master
[travis-url]: https://travis-ci.org/balmjs/balm
[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/balmjs/balm?svg=true
[appveyor-url]: https://ci.appveyor.com/project/balmjs/balm
[daviddm-image]: https://david-dm.org/balmjs/balm.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/balmjs/balm
[coveralls-image]: https://coveralls.io/repos/balmjs/balm/badge.svg
[coveralls-url]: https://coveralls.io/r/balmjs/balm
[balm-cli-url]: https://npmjs.org/package/balm-cli
[balm-gui-url]: https://npmjs.org/package/balm-gui
[balm-ui-url]: https://npmjs.org/package/balm-ui
[balm-ui-lite-url]: https://npmjs.org/package/balm-ui-lite


> __thx [node](https://nodejs.org/) & [gulp](http://gulpjs.com/) & [webpack](https://webpack.js.org/)__
