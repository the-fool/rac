'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src('./static/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./static'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/**/*.scss', ['sass']);
});