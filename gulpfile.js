'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var imageResize = require('gulp-image-resize');
var parallel = require("concurrent-transform");
var os = require("os");

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('resize', function () {
    gulp.src('./public/images/*.{jpg,png,JPG}')
        .pipe(parallel(
            imageResize({ width : 480 }),
            os.cpus().length
        ))
        .pipe(gulp.dest('./public/images/480/'));
});