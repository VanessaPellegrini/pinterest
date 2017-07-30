var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('script', function(){
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery-modal/jquery.modal.js', 'assets/js/json.js', 'assets/js/main.js'])
    .pipe(concat('script.js'))
    // carpeta dist
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function(){
    gulp.src(['assets/sass/main.scss', 'node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/jquery-modal/jquery.modal.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('webserver', function(){
    gulp.src('../pinterest/')
    .pipe(webserver({
        fallback: 'index.html',
        livereload: true,
        directoryListing: false,
        open: true
    }));
});

gulp.task('default', ['script', 'style', 'webserver']);