/*
 * View model for OctoPrint-VeSync
 *
 * Author: Anthony Cho
 * License: AGPLv3
 */
$(function() {
    function OctoprintVesyncViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
        self.devices = ko.observableArray([])

        // MOCK MODEL
        var devices = [
            {
                "name": 'printer',
                "action": "turn On"
            },
            {
                "name": 'lamp',
                "action": "turnn off"
            }
        ]
        for (i = 0; i< devices.length; i++) {
            self.devices.push(devices[i])
        }
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: OctoprintVesyncViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ "loginStateViewModel", "settingsViewModel" ],
        // Elements to bind to, e.g. #settings_plugin_OctoPrint-VeSync, #tab_plugin_OctoPrint-VeSync, ...
        elements: [ "#tab_plugin_octoprint_vesync" ]
    });
});
