var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var minifyCss = require('gulp-minify-css');
var jsonminify = require('gulp-jsonminify');
var htmlmin = require('gulp-html-minifier');
var out = require('gulp-out');

gulp.task('default', function() {
    gulp.start('uglify', 'minify-css', 'minify-json');
});

gulp.task('uglify', function() {
    return gulp.src(
    	[
    		'src/js/leaflet-src.js',
    		'src/js/l.control.locate.js',
    		'src/js/bootstrap.min.js',
    		'src/js/jquery.liveFilter.js',
    		'src/js/bouncemarker.js',
    		'src/js/app.js'
    	]
    	)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
  return gulp.src(
        [
            'src/css/leaflet.css',
            'src/css/L.Control.Locate.css',
            'src/css/bootstrap.css',
            'src/css/app.css'
        ]
    )
  	.pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-json', function () {
    return gulp.src(['src/data/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('dist/data'));
});

gulp.task('minify-html', function() {
  gulp.src('dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, removeRedundantAttributes: true, removeEmptyAttributes: true, minifyCSS: true}))
    .pipe(out('dist/index_min.html'))
});