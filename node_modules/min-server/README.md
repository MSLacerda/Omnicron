# min-server
Minimal and fast Server with Live Reload and [*Package*](https://www.npmjs.com/package/min-server) &mdash; never again manually reload your browser!

[![Dependency Status](https://david-dm.org/dmitriz/min-server.svg)](https://david-dm.org/dmitriz/min-server) [![Code Climate](https://codeclimate.com/github/dmitriz/min-server/badges/gpa.svg)](https://codeclimate.com/github/dmitriz/min-server)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## LiveReload
[**LiveReload**](http://livereload.com/) monitors changes in your files and instantly updates all changes in your browser. It is very useful when you are updating your site and **don't want to keep manually reloading** the page in your browser again and again after every edit.


## Why?
- Many setups are bloated with unnecessary options and packages.
- Start clean and minimal and extend as you go.
- Add single package to your project instead of many, to get your live reload server up and running.


## Why not something else?
- [`live-server`](https://github.com/tapio/live-server) is small and awesome but unfortunately slow; there is noticeable delay between the change in your file and its effect in the browser. 
- [`browser-sync`](https://github.com/BrowserSync/browser-sync) is incredibly powerful and fast but: 
  - it is massive with 25MB total to download;
  - it flashes "Connected with Browser-Sync" in a large black on box top of your page on every reload that I find distracting.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) is promising and can do great if you are using [Webpack](https://webpack.github.io/) but it feels like too much "magic" that may break any time you do anything "non-standard". Specifically it didn't reload the main `html` file when I tried to change it. Hopefully things will improve, including the documentation :)


## Why [Gulp](https://github.com/gulpjs/gulp) plugins?
- Fast: use streams, no temporary files.
- Gulp plugins have uniform API: stream in, stream out; no massive command line options.
- Convenient and expressive [node-glob](https://github.com/isaacs/node-glob) abstraction to select files/directories to be watched.
- Less magic, more control and understanding of what is going on, less chance and dependence on bugs.


## Why not `npm` scripts?
The `npm` scripts [provide a powerful tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) to ease and automate your workflow and I love using them. However, the [proposed livereload solution](https://github.com/keithamus/npm-scripts-example/blob/master/package.json) has 2 problematic points:

- You need to run both server and watcher from the same shell, and the proposed way is to use [parallelshell](https://github.com/keithamus/parallelshell) which is not a robust tool such as Gulp. Specifically trying `npm run dev` as suggested leads to some error that, after termination, leave 4 processes running in background that you have to kill manually, or else you can't access the same ports. Not fun.
- It requires to "highjack" your source files with script tags that I don't feel belong there:

```html
  <script src="//localhost:9091/livereload.js"></script>
```

[A more recent article](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.kc05r0ilm) again advocated in favor of `npm` scripts. However, it did not provide any viable alternative for a LiveReload server, nor any of the of recommended sources did, as far as I could see.


## Use cases
- You have a project and want to add server and live reload &mdash; [install the package](#to-use-as-package-add-to-your-project).
- You want to quickly play and evaluate LiveReload in a clean folder &mdash; [clone or download the repository](#to-use-as-separate-repository).


## Features
- Minimal functional Server setup with Live Reload setup.
- Use as *repository* (`git clone`) or *package* (`npm install`).
- Installs all dependency packages, no need to install them manually. Keeps your `package.json` clean.
- Automatically and gracefully (without overwriting) copied to your project directory:
  - Minimal `Gulpfile.js` (with comments) includes:
    - Gulp task `gulp connect` with 4 lines of code to start [connect server](https://github.com/senchalabs/connect):

    ```js
    gulp.task('connect', function () {
      connect()
        .use(connectLivereload())
        .use(connect.static(config.rootDir))
        .listen(8081)
    })
    ```

    - Gulp task `gulp watch` with 4 lines of code to watch your files for changes:

    ```js
    gulp.task('watch', ['connect'], function () {
      gulpLivereload.listen()
      gulp.watch(['*.{html,css,js}', '!Gulpfile.js'], function (file) {
        gulp.src(file.path)
          .pipe(gulpLivereload())
      })
    })
    ```

    - Featuring the awesome [better stuff opener](https://github.com/sindresorhus/opn):

    ```js
    gulp.task('serve', ['connect'], function () {
      opn('http://localhost:8081')
    })
    ```


## If you are new to Node
[Download and Install Node.js](https://nodejs.org/download/), see [How do I get started with Node.js](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js) for more information.


## To use as separate Repository: 
### Clone
```sh
git clone https://github.com/dmitriz/min-server
```
or simply [Download this Repository](https://github.com/dmitriz/min-server/archive/master.zip),
unzip it and `cd min-server-master`.


### Install dependencies
```sh
npm install --save-dev
```

## To use as Package (add to your project):
In your main project directory (should contain `package.json`):
```sh
npm install min-server --save
```

## Getting started
Simply run the default Gulp task:
```sh
gulp
```
Now try to edit and save `index.html` and see how your changes instantly appear in the browser!

Enjoy!
