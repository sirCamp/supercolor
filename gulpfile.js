var gulp = require('gulp');

var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var ngAnnotate = require('gulp-ng-annotate');
var order = require("gulp-order");
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @author <%= pkg.author %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('e2eTest', function() {
    gulp.src(['./test/**/*_spec.js'])
        .pipe(protractor({
            configFile: "protractor_conf.js",
        }))
        .on('error', function(e) {throw e});
});

gulp.task('buildmin', function(){
  gulp.src(['src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(ngAnnotate())
    .pipe(addsrc('build/*.js'))
    .pipe(order([
        'src/*.js',
        'build/supercolor.js'
    ]))
    .pipe(concat('supercolor.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('dist'))
});

gulp.task('buildnormal', function(){
  gulp.src(['src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(ngAnnotate())
    .pipe(addsrc('build/*.js'))
    .pipe(order([
        'src/*.js',
        'build/supercolor.js'
    ]))
    .pipe(concat('supercolor.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('dist'))
});

gulp.task('tests', ['e2eTest']);
gulp.task('build', ['buildmin','buildnormal']);
gulp.task('deploy', ['build', 'tests']);
gulp.task('default', ['deploy']);