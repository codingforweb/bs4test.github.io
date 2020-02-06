var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('src/scss/*')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('prod/css/'));
});

gulp.task('gulpJs', function () {
    return gulp.src('src/js_modules/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('prod/js/'));
});

gulp.task('default', gulp.series('sass', 'gulpJs'));

gulp.task('watch', function () {
    gulp.watch('src/scss/*', gulp.series('sass'));
    gulp.watch('src/js_modules/*.js', gulp.series('gulpJs'));
});