var gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


gulp.task('default', function() {
    browserSync.init({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['docs']
        }
    });

    gulp.watch("docs/**").on('change', browserSync.reload);
});