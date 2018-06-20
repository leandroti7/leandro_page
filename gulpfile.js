var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var destOrigin = 'sass/**/*.sass';
var destSaida =  'css';


gulp.task('sass', function(){
    return gulp.src(destOrigin)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destSaida));
});

gulp.task('watch',function(){
    gulp.watch(destOrigin, ['sass']);

});

gulp.task('default',['sass','watch']);