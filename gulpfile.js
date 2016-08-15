var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

var config = {
    bootstrapDir: './client/assets/libs/bootstrap-sass',
    publicDir: './client/assets',
};

gulp.task('build-css', function() {
    gulp.src('client/assets/sass-bootstrap-custom/app.sass')
      .pipe(sass({
          includePaths: [config.bootstrapDir + '/assets/stylesheets']
      }))
      .pipe(gulp.dest(config.publicDir + '/css/'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('build-additional-css', function() {
    gulp.src('client/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/assets/css/'));
});

//Watch task
gulp.task('watch-main',['build-css'], function() {
    gulp.watch('client/assets/sass-bootstrap-custom/**/*.scss',['build-css']);
});

gulp.task('watch', ['build-additional-css'], function() {
    gulp.watch('client/assets/sass/**/*.scss',['build-additional-css']);
});

gulp.task('webserver', function() {
  gulp.src('client')
    .pipe(server({
      livereload: true,
    //   directoryListing: true,
      open: true,
      defaultFile: 'index.html'
    }));
});


gulp.task('default', ['fonts', 'watch-main', 'watch', 'webserver']);
