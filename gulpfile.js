
//Thanks to https://forum.ionicframework.com/t/building-ionic-2-beta-7-apps-with-phonegap-build/53253
//Run the following commands 
//$ npm install --save-dev gulp-replace gulp-zip merge-stream
//PS: Dont forget to add source="npm" tag in all plugins saved in config.xml
var replace = require('gulp-replace');
var zip = require('gulp-zip');
var destFolder = 'platforms/phonegap';
var merge = require('merge-stream');

gulp.task('phonegap',['build'], function () {

  var moveWww = gulp.src(['www/**/*.*'])
    .pipe(gulp.dest(destFolder));
  var moveResources = gulp.src(['resources/**/*.*'])
    .pipe(gulp.dest(destFolder + '/resources'));

  var moveConfig = gulp.src('config.xml')
    .pipe(replace('xmlns:cdv="http://cordova.apache.org/ns/1.0"', 'xmlns:gap="http://phonegap.com/ns/1.0"'))
    .pipe(replace(/(<\/?)plugin/g, '$1gap:plugin'))
    .pipe(gulp.dest(destFolder));

  return merge(moveWww, moveResources, moveConfig);
});
gulp.task('phonegap-zip', ['phonegap'], function () {
  gulp.src(destFolder+'/**/*.*')
    .pipe(zip('phonegap.zip'))
    .pipe(gulp.dest('phonegap'));
});