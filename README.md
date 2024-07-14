# angularjs-spa-sample

Example SPA built with very old version of AngularJS (1.5.11)

This repo and SPA was created as part of a take-home assessment for a job interview.

## running / impl. details

### foreword

* For `localhost` usage, you would need to install [Allow-Control-Allow-Origin:*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) made by vitvad for CORS
* It would be useful if your system already had `node` and `gulp` prepared.
* If not, navigating to the root of this project and running `npm start` would do.
* It is also possible to use `ngrok` to tunnel to `localhost:8000`!
* It used `LokiJS` as in memory database, but for simplicity and for verification, the serialized data is in `LocalStorage`
* Admin session credentials are stored utilizing `$cookieStore` with admin's username as key. Persists even if you close the tab

### steps

* Clone or download this repo
* Navigate to root, then `npm start` on a machine with `npm` and `node` installed.
* Website will run locally via `http-server`
* When the command prompt says the app is listening, access the site at `http://localhost:8000`

### what made this possible

* in-memory database using [LokiJS](https://github.com/techfort/LokiJS)
* ui using [AngularJS Material](https://material.angularjs.org/1.1.0/) - version `1.1.0` is used due to angular compatibility issues.
* angular version is `1.5.11` to comply
* populated modular assets thanks to `gulp`!
