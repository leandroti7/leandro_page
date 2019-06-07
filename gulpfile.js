var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var destOrigin = 'sass/**/*.sass';
var destSaida =  'css';


gulp.task('sass', gulp.series( function(){
    return gulp.src(destOrigin)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destSaida));
}));

gulp.task('watch', gulp.series( function(){
    gulp.watch(destOrigin, gulp.parallel( ['sass'] ));

}));

gulp.task('default', gulp.series( ['sass','watch'] ));