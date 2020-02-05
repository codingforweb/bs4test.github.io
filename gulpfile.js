var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('scss/*')
        .pipe(concat("styles.css"))
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('gulpJs', function () {
    return gulp.src('js_modules/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('default', gulp.series('sass', 'gulpJs'));

gulp.task('watch', function () {
    gulp.watch('scss/*', gulp.series('sass'));
    gulp.watch('js_modules/*.js', gulp.series('gulpJs'));
});