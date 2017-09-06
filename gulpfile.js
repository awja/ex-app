var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('build.js', function () {
	gulp.src ('source/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});