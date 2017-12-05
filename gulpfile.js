var gulp = require("gulp");
var gulpmin = require("gulp-uglify");
gulp.task("jsmin",function(){
gulp.src("./main.js").pipe(gulp.dest("./test"));
})