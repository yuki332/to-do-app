var gulp = require("gulp");
var uglify = require("gulp-uglify");
var jshint = require('jshint');
var jshintStylish = require('jshint-stylish');
var minifyHtml = require('gulp-minify-html');
var csso = require('gulp-csso');

gulp.task('default', ['js', 'html', 'css']);

gulp.task("js", function(){
    gulp.src([
      "app/src/js/*.js",
      "!js/dest/*.js"
    ])
    .pipe(uglify())
    .pipe(gulp.dest("app/dest/js"));
});

var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('lint', function() {
  return gulp.src('app/src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('html',function(){
  return gulp.src('app/src/**/*.html')
  .pipe(minifyHtml())
    .pipe(gulp.dest('app/dest'));
});

gulp.task('css', function(){
  return gulp.src('app/src/**/*.css')
    .pipe(csso())
    .pipe(gulp.dest('app/dest'));
});
