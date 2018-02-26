import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

const gulpplugin = gulpLoadPlugins()

gulp.task('transpile_js', () => {
  gulp.src('src/es6/**/*.js')
    .pipe(gulpplugin.babel())
    .pipe(gulp.dest('app/js'))
})

gulp.task('transpile_test', () => {
  gulp.src('src/test/**/*.js')
    .pipe(gulpplugin.babel())
    .pipe(gulp.dest('test'))
})