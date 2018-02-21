function setColors(tabId) {
    browser.storage.local.get().then((res) => {
        setColorsToState(tabId, res.InvertColorsState, res.ImgColorNoInvert);
    });
}

function setColorsToState(tabId, state, imgNoInvert) {
    if (state == true) {
        invertColors(tabId, imgNoInvert);
    } else {
        revertColors(tabId);
    }
}

function toggleColors(obj) {
    browser.storage.local.get().then((res) => {
        var state = res.InvertColorsState ? res.InvertColorsState : false;
        state = obj != false ? !state : state;

        if (state) {
            browser.browserAction.setIcon({ path: "icons/on.svg" });
            browser.browserAction.setTitle({ title: "Revert Colors" });
        } else {
            browser.browserAction.setIcon({ path: "icons/off.svg" });
            browser.browserAction.setTitle({ title: "Invert Colors" });
        }

        browser.storage.local.set({ InvertColorsState: state, ImgColorNoInvert: res.ImgColorNoInvert });

        browser.tabs.query({}).then((tabs) => {
            for (var tab of tabs) {
                setColorsToState(tab.id, state, res.ImgColorNoInvert);
            };
        });
    });
}

function invertImg(tabId, imgNoInvert) {
    if (imgNoInvert)
      browser.tabs.insertCSS(tabId, { file: "image.css", allframes: true });
    else
      browser.tabs.removeCSS(tabId, { file: "image.css", allframes: true });
}

function invertColors(tabId, imgNoInvert) {
    browser.tabs.insertCSS(tabId, {
        file: "style.css", allframes: true });
    invertImg(tabId, imgNoInvert);
}

function revertColors(tabId) {
    invertImg(tabId, false);
    browser.tabs.removeCSS(tabId, {
        file: "style.css", allframes: true });
}


function handleUpdated(tabId, changeInfo, tabInfo) {

    if (changeInfo.status) {
        setColors(tabId);
    }
}

function handleStorageUpdate(changes, area) {
    if (area == "local") {
        for (var item of Object.keys(changes)) {
            if (item == "InvertColorsState" || item == "ImgColorNoInvert") {
                browser.storage.local.get().then((res) => {
                    var state = res.InvertColorsState ? res.InvertColorsState : false;

                    browser.tabs.query({}).then((tabs) => {
                        for (var tab of tabs) {
                            setColorsToState(tab.id, state, res.ImgColorNoInvert);
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
browser.storage.onChanged.addListener(handleStorageUpdate);
browser.browserAction.onClicked.addListener(toggleColors);
browser.contextMenus.onClicked.addListener(toggleColors);

toggleColors(false);
