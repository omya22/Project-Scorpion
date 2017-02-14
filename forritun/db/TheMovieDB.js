var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
class TheMovieDB  {
    constructor() {
        this.api_key = '5caf95feed570ed071f7cb0839668613';
        this.base_uri = 'https://api.themoviedb.org/3/';
    }
    generateQuery(options) {
        'use strict';
        let myOptions, query, option;
        myOptions = options || {}
        query = "?api_key=" + this.api_key;

        if (Object.keys(myOptions).length > 0) {
            for (option in myOptions) {
                if (myOptions.hasOwnProperty(option) && option !== "id" && option !== "body") {
                    query = query + "&" + option + "=" + myOptions[option];
                }
            }
        }
        return query;

    }
    validateCallbacks(callbacks) {
        'use strict';
        if (typeof callbacks[0] !== "function" || typeof callbacks[1] !== "function") {
            throw "Success and error parameters must be functions!";
        }
    }
    validateRequired(args, argsReq, opt, optReq, allOpt) {
        'use strict';
        var i, allOptional;

        allOptional = allOpt || false;

        if (args.length !== argsReq) {
            throw "The method requires  " + argsReq + " arguments and you are sending " + args.length + "!";
        }

        if (allOptional) {
            return;
        }

        if (argsReq > 2) {
            for (i = 0; i < optReq.length; i = i + 1) {
                if (!opt.hasOwnProperty(optReq[i])) {
                    throw optReq[i] + " is a required parameter and is not present in the options!";
                }
            }
        }
    }
    client(options, callback) {
        'use strict';
        var method, status, xhr;

        method = options.method || "GET";
        status = options.status || 200;
        xhr = new XMLHttpRequest();

        xhr.ontimeout = function () {
            error('{"status_code":408,"status_message":"Request timed out"}');
        };

        xhr.open(method, this.base_uri + options.url, true);

        if(options.method === "POST") {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/json");
        }

        xhr.timeout = this.timeout;

        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === status) {
                    var jData = JSON.parse(xhr.responseText);
                    callback(xhr.responseText);
                    return xhr.responseText;
                } else {
                    callback(xhr.responseText);
                }
            } else {
                callback(xhr.responseText);
            }
        };

        xhr.onerror = function (e) {
            error(xhr.responseText);
        };
        if (options.method === "POST") {
            xhr.send(JSON.stringify(options.body));
        } else {
            xhr.send(null);
        }
    }
}
module.exports = TheMovieDB;