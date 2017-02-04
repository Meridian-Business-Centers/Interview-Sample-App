var gulp = require('gulp'),
 	connect = require('gulp-connect'),
 	less = require('gulp-sass');
 
gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 8888
  });
});
 
gulp.task('sass', function() {
  gulp.src('styles/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function() {
    gulp.watch('styles/sass/*.scss', ['sass']);
    gulp.watch(['./app/*/*.html', './index.html'], ['html']);
})
 
gulp.task('default', ['sass', 'connect', 'watch']);