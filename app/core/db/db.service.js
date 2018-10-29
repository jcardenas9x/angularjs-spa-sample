'use strict';

var app = angular.module('core.db');

app.factory('CoreDB', ['Loki', 
    function (Loki) {
        var feedbackDB;
        var users;
        var comments; 
        var resultSet;

        var dbService = {
            initDB: initializeDb,
            loadHandler: loadHandler,
            addComments: addComments,
            getComments: getComments,
            getUser: getUser
        }

        return dbService;

        function initializeDb () {
            feedbackDB = new Loki('feedback.db', {
                autoload: true,
                autoloadCallback: loadHandler,
                autosave: true,
                autosaveInterval: 4000
            });
        }

        function loadHandler () {
            users = feedbackDB.getCollection('users');
            comments = feedbackDB.getCollection('comments') || feedbackDB.addCollection('comments');
            if (!users) {
                users = feedbackDB.addCollection('users');
                users.insert({username:"root",password:"123"});
                feedbackDB.saveDatabase();
            }
        };

        function addComments (comment) {
            if (!comment.email || !comment.content) {
                return false;
            } else {
                comments.insert(comment);
                feedbackDB.saveDatabase();
                return true;
            }
        }

        function getComments ($q) {
            resultSet = comments.chain().simplesort("date", true).data();
            return resultSet;
        }

        function getUser (user) {
            var checkUser;
            checkUser = users.chain().findOne({
                username: user["username"], password: user["password"]
            });
            return checkUser;
        }

    }
]);

