var gulp = require("gulp");

gulp.task('testTask', function (done) {
    console.log('This is a test task!');
    done();
});

gulp.task("default", gulp.series("testTask"));
