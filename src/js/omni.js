'use strict';

(() => {

    var virtualOmni = document.getElementsByTagName('om-cron')
    
    const evaluateApp = () => {
        function Omni(cronSettings) {
            var _this = this;
            _this.application = new Object();
            Object.assign(_this.application, cronSettings);

            _this.virtualElements = document.getElementsByTagName('om-cron');

            for (let index = 0; index < _this.virtualElements.length; index++) {
                const element = _this.virtualElements[index];
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

window.onload = (event) => {
    // DEFINE TAGS OF LIBRARY
    var Omni = document.registerElement('om-cron');
}
