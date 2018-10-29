const { src, dest, series } = require('gulp');

function copyAngularJS() {
    return src('node_modules/angular/*')
        .pipe(src('node_modules/angular-animate/*'))
        .pipe(src('node_modules/angular-aria/*.'))
        .pipe(src('node_modules/angular-messages/*'))
        .pipe(src('node_modules/angular-material/*'))
        .pipe(src('node_modules/angular-route/*'))
        .pipe(src('node_modules/angular-resource/*'))
        .pipe(src('node_modules/angular-cookies/*'))
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