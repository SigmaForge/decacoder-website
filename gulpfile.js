var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');



var config = {
  entryFile: './src/app.js',
  outputDir: './site/',
  outputFile: 'app.js',
  staticDir: './static/',
  staticFiles: './static/**/*'
};

gulp.task('build', function() {
  return browserify(config.entryFile, {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(source(config.outputFile))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.outputDir))
});

// gulp.task('static', [], function() {
//   return gulp.src(config.staticFiles).pipe(gulp.dest(config.outputDir));
// });
