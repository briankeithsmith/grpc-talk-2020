
const crypto = require('crypto');
const redis = require('redis');
const users_proto = require('./proto');

const client = redis.createClient({
    port: 6379,               // replace with your port
    host: process.env.REDIS_HOST ? process.env.REDIS_HOST : 'localhost',
});


const USER_HASH_KEY = 'users';

/*
service Users {
    rpc CreateUser (UserRequest) returns (CreateUserReusers_proto.User.sponse);
    rpc UserExists (UserRequest) returns (UserResponse);
    rpc ValidateUser (User) returns (UserResponse);
}
*/


const createUser = function CreateUser(call, callback) {
    try {
        const userName = call.request.Name;
        const userCode = Buffer.from(crypto.randomBytes(64)).toString('base64');

        if (userName == null || userName == undefined || userName == "") {
            callback(null, { Error: true });
            return;
        }

        const user = {
            Name: userName,
            Code: userCode,
            IsAdmin: false,
        };


        client.hsetnx(USER_HASH_KEY, userName, JSON.stringify(user), function (err, res) {
            if (err) {
                callback(err, null);
                console.error('error response - ' + err);
                return
            }

            if (res === 0) {
                callback(null, {
                    Error: true,
                    ErrorMessage: 'User already exists',
                    User: null
                });
            } else if (res === 1) {
                callback(null, {
                    Error: false,
                    ErrorMessage: '',
                    User: user
                });
            } else {
                callback(null, {
                    Error: true,
                    ErrorMessage: 'Unknown error',
                    User: null
                });
            }
        });
    } catch (err) {
        console.log('Error error while handling CreateUser', err);
        callback(err, null);
    }

}

const userExists = function UserExists(call, callback) {
    try {
        const userName = call.request.Name;

        if (userName == null || userName == undefined) {
            callback(null, {
                Error: true
            });
            return;
        }
        client.hget(USER_HASH_KEY, userName, function (err, res) {
            if (err) {
                console.log("Error while calling redis for user exists", err);
                callback(null, {
                    Error: true
                });
                return;
            }

            callback(null, {
                Error: false,
                Value: !(res == null || res === "") 
            });

        });
    } catch (e) {
        console.log('Error while handling UserExists', e);
        callback(e, null);
    }
}

const validateUser = function ValidateUser(call, callback) {
    try {
        const userName = call.request.Name;
        const userCode = call.request.Code;
        const userIsAdmin = call.request.IsAdmin;

        if (userName == null || userName == undefined) {
            callback(null, {
                Error: true,
            });
            return
        }

        client.HGET(USER_HASH_KEY, userName, function (err, res) {
            if (err) {
                console.log("Error while calling redis for user exists", err);
                callback(nil, {
                    Error: true
                });
                return
            }

            if (res === "" || res === null) {
                callback(null, {
                    Error: false,
                    Value: false
                });
                return
            }

            const dbUser = JSON.parse(res);
            if (dbUser === null) {
                console.log("Error parsing dbUser from json", res);
                callback(null, {Error: true, Value: false});
                return;
            }

            callback(null, {
                Error: false,
                Value: (dbUser.Name == userName) && (dbUser.Code == userCode) && (!userIsAdmin || dbUser.IsAdmin)
            });

        });
    } catch (e) {
        console.log('Error while handling ValidateUser', e);
        callback(err, null);
    }
}

module.exports = {
    validateUser: validateUser,
    userExists: userExists,
    createUser: createUser,
};