const { src, dest, series } = require('gulp');
const del = require('del');

function clean() {
  return del([
    "dist/*"
  ]);
}

function transpile() {
  return src('src/*.js')
    .pipe(dest('dist/'));
}

exports.build = series(clean, transpile);
// https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#splitting-a-gulpfile
