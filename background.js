function setColors(tabId) {
    var state = browser.storage.local.get("InvertColorsState");
    state.then((res) => {
        setColorsToState(tabId, res.InvertColorsState);
    });
}

function setColorsToState(tabId, state) {
    if (state == true) {
        invertColors(tabId);
    } else {
        revertColors(tabId);
    }
}

function toggleColors() {
    browser.storage.local.get("InvertColorsState").then((res) => {
        var state = res.InvertColorsState;
        var newStat = !state;
        browser.storage.local.set({ InvertColorsState: newStat });
    });
}

function invertColors(tabId) {
    browser.tabs.insertCSS(tabId, {
        file: "style.css"
    });
}

function revertColors(tabId) {
    browser.tabs.removeCSS(tabId, {
        file: "style.css"
    });
}

function handleUpdated(tabId, changeInfo, tabInfo) {

    if (changeInfo.status) {
        setColors(tabId);
    }
}

function handleStorageUpdate(changes, area) {
    if (area == "local") {
        for (var item of Object.keys(changes)) {
            if (item == "InvertColorsState") {
                browser.storage.local.get("InvertColorsState").then((res) => {
                    var state = res.InvertColorsState;
		    if (state != true) {
			browser.browserAction.setIcon({ path: "icons/off.svg" });
			browser.browserAction.setTitle({ title: "Invert Colors" });
		    } else {
			browser.browserAction.setIcon({ path: "icons/on.svg" });
			browser.browserAction.setTitle({ title: "Revert Colors" });
		    }


                    if (state != true) {
                        state = false;
                    }

                    browser.tabs.query({}).then((tabs) => {
                        for (var tab of tabs) {
                            setColorsToState(tab.id, state);
                        };
                    });
                });
            }
        }
    }
}


browser.contextMenus.create({
    id: "InvertColors",
    title: "Invert Colors"
});

browser.tabs.onUpdated.addListener(handleUpdated);
browser.storage.onChanged.addListener(handleStorageUpdate)
browser.browserAction.onClicked.addListener(toggleColors);
browser.contextMenus.onClicked.addListener(toggleColors);