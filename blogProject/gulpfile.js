const gulp = require( 'gulp' ),
  watchSass = require( 'gulp-watch-sass' ),
	sass = require( 'gulp-sass' ),
	browserSync = require('browser-sync').create(),
	autoprefixer = require( 'gulp-autoprefixer' ),
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
  imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
  spritesmith = require('gulp-spritesmith');// Подключаем библиотеку для автоматического добавления префиксов
  cache = require('gulp-cache') // Подключаем библиотеку кеширования
  pngquant = require('gulp-pngquant'), // Подключаем библиотеку для работы с png
  uglify = require('gulp-uglify'), // Подключаем gulp-uglifyjs (для сжатия JS)
  clean = require( 'gulp-clean' );

gulp.task('browser-sync', () => // Создаем таск browser-sync
  browserSync.init({ // Выполняем browser Sync
    server: { // Определяем параметры сервера
      baseDir: 'dist' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  }),
);

gulp.task('html', () =>
  gulp.src('app/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))
);

gulp.task( 'css', () => 
	gulp.src( 'app/css/**/*.css' )
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({stream: true}))
);

gulp.task('scss', () => // Создаем таск Scss
  gulp.src([ './app/**/*.scss', ]) // Берем источник
   .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass.
   .pipe(concat('style.min.css'))
   .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
   .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку dist/css
   .pipe(browserSync.reload({stream: true}))
);

gulp.task('js', () => 
	gulp.src( './app/js/**/*.js' )
  .pipe(concat('script.min.js')) // Собираем их в кучу в новом файле script.min.js
  .pipe(uglify()) // Сжимаем JS файл
  .pipe( gulp.dest('./dist/js') )
  .pipe(browserSync.reload({stream: true}))
);

gulp.task('img', () =>
  gulp.src('./app/img/**/*.*')
  .pipe(gulp.dest('./dist/img'))
);

gulp.task('fonts', () =>
  gulp.src('./app/fonts/**/*.*')
  .pipe(gulp.dest('./dist/fonts'))
  .pipe(browserSync.reload({stream: true}))
);

gulp.task( 'clean', () => gulp.src( './dist/*', { read: false } )
	.pipe( clean( ) )
);

gulp.task( 'watch-scss', () => gulp.watch( './app/**/*.scss', gulp.series( 'scss' )));
gulp.task( 'watch-css', () => gulp.watch('./app/**/*css', gulp.series( 'css' )));
gulp.task( 'watch-img', () => gulp.watch('./app/img/**/*.*',  gulp.series( 'img' )));
gulp.task( 'watch-fonts', () => gulp.watch('./app/fonts/**/*.*', gulp.series( 'fonts' )));
gulp.task( 'watch-html', () => gulp.watch('./app/*.html', gulp.series( 'html' )));
gulp.task( 'watch-js', () => gulp.watch('./app/js/**/*.js', gulp.series( 'js' )));

gulp.task( 'start', gulp.parallel( 'html', 'scss', 'css', 'js', 'img', 'fonts', 'browser-sync', 'watch-html', 'watch-scss', 'watch-css', 'watch-js' ) );

gulp.task( 'build', gulp.series( 'clean', 'html', 'scss', 'css', 'js', 'img', 'fonts'  ) );

