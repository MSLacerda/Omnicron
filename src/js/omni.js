'use strict';

(function () {

    var virtualOmni = document.getElementsByTagName('om-cron');

    // Normalize PATHS
    function normalizePath(string) {
        if (string !== "") return string;
        else return false
    }

    // HTTP Quest Object
    function HttpQuest(path) {
        var _this = this;
        _this.URL = new String();
        _this.URL = normalizePath(path);

        if (window.XMLHttpRequest)
            _this.xhr = new XMLHttpRequest();
        else if (window.ActiveXObject) {
            _this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (!_this.URL) {
            console.error("Invalid path when creating XHR");
            return;
        }
    }

    // HTTP Quest GET Method    
    HttpQuest.prototype.GET = function (callback) {
        var _this = this;                
        try {
            _this.xhr.onreadystatechange = function () {
                if (_this.xhr.readyState == 4) {
                    callback(_this.xhr.responseText);
                }
            }
            _this.xhr.open("GET", _this.URL, true);
            _this.xhr.send();
        } catch (error) {
            console.error("Error in XHR: " + error.toString())
        }
    }

    function findApp(name, elements) {
        for (var index = 0; index < elements.length; index++) {
            var element = elements[index];
            if (name === element.attributes['om-name'].textContent)
                return element;
        }

        return false;
    }

    var evaluateApp = function () {
        function Omni(cronSettings) {
            // THIS FUNCTION TEST AND EXECUTES THE RUN METHOD IF THE ELEMENT WITH THAM CRON NAME EXISTS

            var _this = this;
            _this.application = new Object();
            Object.assign(_this.application, cronSettings);


            _this.virtualElements = document.getElementsByTagName('om-cron');
            for (var index = 0; index < _this.virtualElements.length; index++) {
                var element = _this.virtualElements[index];
                if (cronSettings.app === element.attributes['om-name'].textContent)
                    if (!!_this.application.before) {
                        new Promise(function (resolve, reject) {
                            _this.application.before(resolve)
                        }).then(function () {
                            _this.application.run();
                        })
                    } else {
                        _this.application.run();
                    }
            }

            if (!!cronSettings.render) {
                var http = new HttpQuest(cronSettings.render.url);
                http.GET(function(element) {
                    var el = findApp(_this.application.app, _this.virtualElements)
                    if (el) {
                        el.innerHTML = element;
                        cronSettings.render.onSuccess();
                    }
                });
            }   

        }
        return Omni;
    }

    if (virtualOmni.length > 0) {
        window.Omnicron = evaluateApp();
    }
})()

window.onload = function (event) {
    // DEFINE TAGS OF LIBRARY
    var Omni = document.registerElement('om-cron');
}
