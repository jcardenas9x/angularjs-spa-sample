# angularjs-spa-sample

Example SPA built with very old version of AngularJS (1.5.11)

## running / impl. details

### foreword

* For `localhost` usage, you would need to install [Allow-Control-Allow-Origin:*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) made by vitvad for CORS
* It would be useful if your system already had `node` and `gulp` prepared.
* If not, navigating to the root of this project and running `npm start` would do.

### steps

* Clone or download this repo
* Navigate to root, then `npm start` on a machine with `npm` and `node` installed.
* Website will run locally via `http-server`

### what made this possible

* in-memory database using [LokiJS](https://github.com/techfort/LokiJS)
* ui using [AngularJS Material](https://material.angularjs.org/1.1.0/) - version `1.1.0` is used due to angular compatibility issues.
* angular version is `1.5.11` to comply
* populated modular assets thanks to `gulp`!