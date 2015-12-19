//var self = require('sdk/self');
var tabs = require("sdk/tabs");
var { attach, detach } = require('sdk/content/mod');
var { Style } = require('sdk/stylesheet/style');
var { ToggleButton } = require("sdk/ui/button/toggle");
var SStore = require("sdk/simple-storage");

var style = Style({
  uri: './style.css'
});

if (!SStore.storage.GlobalState) {
    SStore.storage.GlobalState = false;
}

var TabStatesArray = ['open', 'activate', 'ready'];
for (var i = 0; i < TabStatesArray.length; i++)
{
    tabs.on(TabStatesArray[i], function(tab) {
        HandleState();
    });
}    

var button = ToggleButton({
  id: "invert-colors",
  label: "Invert Page",
  icon: "./contrast_high.svg",
  onChange: function(state) {
      SStore.storage.GlobalState = state.checked;
      HandleState();
  }
});

function HandleState() {
    if (SStore.storage.GlobalState) {
      attach(style, tabs.activeTab);
    }
    else {
      detach(style, tabs.activeTab);
    }
}

exports.onUnload = function(reason) {
    //called when add-on is
    //    uninstalled
    //    disabled
    //    shutdown
    //    upgraded
    //    downgraded
    button.destroy();
    delete SStore.storage.GlobalState;
};
