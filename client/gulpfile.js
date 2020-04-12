const gulp = require("gulp");
const argv = require("minimist")(process.argv.slice(2));
const path = require("path");
const replace = require("gulp-replace");

gulp.task("ng-bump-version", function() {
  const ng_env = argv["configuration"];
  const env_dir_path = path.resolve(__dirname, `./src/environments`);
  const env_file_path = path.join(env_dir_path,  `environment.${ng_env}.ts`);
  return gulp
    .src([env_file_path]).pipe(gulp.dest(env_dir_path));
});