'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
require('babel-preset-env');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src('./static/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./static/_build/'));
});

gulp.task('js', function () {
  gulp.src(['./static/scripts/**/*.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./static/_build/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/styles/*.scss', ['sass']);
});


gulp.task('js:watch', function () {
  gulp.watch('./static/scripts/*.js', ['js']);
});

gulp.task('watch', ['js:watch', 'sass:watch']);