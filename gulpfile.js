// var gulp = require('gulp'),
//     connect = require('gulp-connect');
//
// gulp.task('webserver', function() {
//     connect.server({
//         livereload: true
//     });
// });
//
// gulp.task('default', ['webserver']);
var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('client')
    .pipe(server({
      livereload: true,
    //   directoryListing: true,
      open: true,
      defaultFile: 'index.html'
    }));
});
