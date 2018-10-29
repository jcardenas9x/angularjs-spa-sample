const { src, dest, series } = require('gulp');

function copyAngularJS() {
    return src('node_modules/angular/*.js')
        .pipe(src('node_modules/angular-animate/*.js'))
        .pipe(src('node_modules/angular-aria/*.js'))
        .pipe(src('node_modules/angular-messages/*.js'))
        .pipe(src('node_modules/angular-material/*.js'))
        .pipe(dest('app/assets/js/angular/'));
};

function copyLokiJS() {
    return src('node_modules/lokijs/src/*.js')
        .pipe(dest('app/assets/js/lokijs/'));
}

function copyCSS() {
    return src('node_modules/angular-material/*.css')
        .pipe(dest('app/assets/css/'));
}

exports.default = series(copyAngularJS, copyLokiJS, copyCSS);