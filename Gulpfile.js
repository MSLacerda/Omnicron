// Gulpfile.js --- run `gulp` in terminal

var gulp = require('gulp')
var connect = require('connect')
var connectLivereload = require('connect-livereload')
var opn = require('opn')
var gulpLivereload = require('gulp-livereload')
var uglify = require("gulp-uglify")
var minify = require('gulp-minify')
var gutil = require("gulp-util")
var rename = require("gulp-rename")
/*
 * Main Config
 * ===========
 */
var config = {
  // this is your local directory to become served as root,
  // e.g. `localhost:8080` should point to show `index.html` in that directory
  rootDir: __dirname,
  // any port to use for your local server
  servingPort: 8081,
  // the files you want to watch for changes for live reload
  // replace by any glob pattern matching your files
  filesToWatch: ['*.{html,css,js}', '!Gulpfile.js']
}

/*
 * Gulp Tasks
 * ==========
 */
// `gulp` default task - called when you run `gulp` from CLI
// --------------
gulp.task('default', ['watch', 'serve'])

// `gulp watch` task watching for file changes
// ------------
gulp.task('watch', ['connect'], function () {
  // start livereload server (at the default port 35729)
  //   https://github.com/vohof/gulp-livereload#install
  gulpLivereload.listen()
  // watch for file changes
  gulp.watch(config.filesToWatch, function (file) {
    // get the changed file
    //   not needed here but useful for fine grained customizations
    gulp.src(file.path)
      // notify server about changes
      .pipe(gulpLivereload())
  })
})

// `gulp serve` task loading the URL in your browser
// ------------
gulp.task('serve', ['connect'], function () {
  opn('http://localhost:' + config.servingPort)
})

// `gulp connect` task starting your server
// --------------
gulp.task('connect', function () {
  // connect server for our files (unrelated to the livereload server)
  connect()
    // inject JavaScript into our page with `index.html` to listen for change notifications:
    //   <script src="//localhost:35729/livereload.js?snipver=1"></script>
    .use(connectLivereload())
    // specify the root directory for our connect server
    .use(connect.static(config.rootDir))
    // start the server at the given port
    //   now we can view our `index.html` in the root under `localhost:port`
    .listen(config.servingPort)
})

// APP CONFIGS

gulp.task('rotine', function () {
  return gulp.src('src/js/omni.js')
  .pipe(rename('omni.min.js'))
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('dist'))
})

gulp.task('build', ['rotine'], function () {

})

