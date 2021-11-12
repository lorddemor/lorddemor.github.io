var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('html', function() {
	return gulp.src(['app/*.html'])
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
			cascade: true
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// gulp.task('css-libs', function(){
// 	return gulp.src('app/sass/libs.sass')
// 		.pipe(sass())
// 		.pipe(cssnano())
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(gulp.dest('app/css'));
// });

gulp.task('scripts', function() {
	return gulp.src([
			'app/libs/jquery/jquery.min.js',
			'app/libs/slick/slick.min.js',
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', function() {
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('app/js/common.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));