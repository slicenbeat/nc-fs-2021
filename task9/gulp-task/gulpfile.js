const gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  pipeline = require("readable-stream").pipeline,
  concat = require("gulp-concat");

gulp.task("concat-task", () => {
  return pipeline(
    gulp.src("./src/*.js"),
    uglify(),
    concat("main.js"),
    gulp.dest("./dist/")
  );
});
