# ionic-phonegap-zip
Generates phonegap build zip file from an ionic 2 Project

 - Paste the code inside your gulpfile.js
 - Install the dependencies
 `npm install --save-dev gulp-replace gulp-zip merge-stream`
 - Run the gulp task
 `gulp phonegap-zip`
 - The zip file has been generated inside the phonegap folder

 PS: Dont forget to add the source="npm" attribute in all your plugins in config.xml