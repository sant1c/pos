var gulp = require('gulp');
var connect = require('gulp-connect');
var neuter = require('gulp-neuter');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

// gulp.task('connect', function () {
// 	connect.server({
// 		root: 'public',
// 		port: 4000
// 	})
// });

gulp.task('js', function() {
	return gulp.src([
		'!./public/bower_components/**/*.js',
		'./public/**/*.js'])
		.pipe(livereload());
});

gulp.task('js:watch', function () {
  livereload.listen({ basePath: 'public' });
  gulp.watch([
  	'!./public/bower_components/**/*.js',
  	'./public/**/*.js'], [ 'js']);
});


gulp.task('servers', function(){
	nodemon({
		script: 'app.js', 
		watch: ['routes', 'server', 'config', 'app.js'] 
	})
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('default', [ 'js', 'js:watch',  'servers'])