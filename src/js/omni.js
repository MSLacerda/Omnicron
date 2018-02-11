'use strict';

(function () {

    var virtualOmni = document.getElementsByTagName('om-cron');
    
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
                    _this.application.run();
            }

        }
        return Omni;
    }

    if (virtualOmni.length > 0) {
        window.Omnicron = evaluateApp();
    }
})()

window.onload = function(event) {
    // DEFINE TAGS OF LIBRARY
    var Omni = document.registerElement('om-cron');
}
