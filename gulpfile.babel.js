import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

const gulpplugin = gulpLoadPlugins()

gulp.task('es6toes5', () =>
  gulp.src('src/es6/**/*.js')
    .pipe(gulpplugin.babel())
    .pipe(gulp.dest('app/js'))
)