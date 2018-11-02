'use strict';

var app = angular.module('core.db');

app.factory('CoreDB', ['$q', 'Loki', 
    function ($q, Loki) {
        var _feedbackDB;
        var users;
        var comments; 
        var resultSet;

        var dbService = {
            initDB: initializeDb,
            loadHandler: loadHandler,
            addComment: addComment,
            getComments: getComments,
            getUser: getUser
        }

        return dbService;

        function initializeDb () {
            _feedbackDB = new Loki('feedback.db', {
                autoload: true,
                autoloadCallback: loadHandler,
                autosave: true,
                autosaveInterval: 4000
            });
        }

        function loadHandler () {
            users = _feedbackDB.getCollection('users');
            comments = _feedbackDB.getCollection('comments') || _feedbackDB.addCollection('comments');
            if (!users || users.count() === 0) {
                users = _feedbackDB.addCollection('users');
                users.insert({username:"root",password:"123"});
                _feedbackDB.saveDatabase();
            }
        };

        function getComments () {
            return $q(function (resolve, reject) {
                var opts = {};
                _feedbackDB.loadDatabase(opts, function () {
                    comments = _feedbackDB.getCollection('comments') || _feedbackDB.addCollection('comments');
                    resultSet = comments.chain().simplesort('senddate', true);
                    resolve(resultSet.data());
                });
            });
        }

        function getUser (user) {
            return $q(function (resolve, reject) {
                var opts = {};
                _feedbackDB.loadDatabase(opts, function () {
                    users = _feedbackDB.getCollection('users');
                    resultSet = users.findOne({username:user["username"], password:user["password"]});
                    resolve(resultSet);
                });
            })
        }

        function addComment (comment) {
            comments.insert(comment);
        }

    }
]);

