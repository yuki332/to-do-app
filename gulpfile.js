var gulp = require("gulp");
var uglify = require("gulp-uglify");
var jshint = require('jshint');
var jshintStylish = require('jshint-stylish');
var minifyHtml = require('gulp-minify-html');
var csso = require('gulp-csso');
var browserSync = require("browser-sync");

gulp.task('default', ['js', 'html', 'css']);

gulp.task("brows", function () {
    browserSync({
        server: {
            baseDir: "./app/" // ルートとなるディレクトリを指定
        }
    });

    // srcフォルダ以下のファイルを監視
    gulp.watch("app/src/**", function() {
        browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
    });
});

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
  return gulp.src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('html',function(){
  return gulp.src('app/**/*.html')
  .pipe(minifyHtml())
    .pipe(gulp.dest('app/dest'));
});

gulp.task('css', function(){
  return gulp.src('app/**/*.css')
    .pipe(csso())
    .pipe(gulp.dest('app/dest'));
});
