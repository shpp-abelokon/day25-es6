var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var babel = require('gulp-babel');


gulp.task('js', function(){
  return gulp.src("js/**/*.js")
        .pipe(babel())
        .pipe(rename({
    			suffix:'.min'
    		}))
    		.pipe(gulp.dest('dist/js/'));
});
gulp.task('sass',function(){
  return gulp.src('sass/**/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync',function(){
  browserSync({
    server: {
      baseDir: ''
    },
    notyfi: false
  });
});

gulp.task('watch', ['browser-sync','sass','js'], function(){
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('js/**/*.js',['js']);

});
