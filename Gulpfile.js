gulp.task('rotine', function () {
  return gulp.src('src/js/omni.js')
  .pipe(rename('omni.min.js'))
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('dist'))
})

gulp.task('build', ['rotine'], function () {

})
