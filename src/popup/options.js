function loadOptions() {
	browser.storage.local.get().then((res) => {
		showOption(res.InvertColorsState, res.ImgColorNoInvert, res.urlList);
	});
}

function showOption(state, imgNoInvert, urlList) {
	document.querySelector("#InvertColorsState").checked = state;
	document.querySelector('#ImgColorNoInvert').checked = imgNoInvert;

	document.querySelector('#listOfURLsToExclude').innerText = "";

	for (let [url, action] of Object.entries(urlList)) {
		let li = document.createElement("li");

		var clear = document.createElement("span");
		clear.setAttribute("id", url);
		clear.setAttribute("class", "urlToClear");
		clear.innerText = "[✗]";
		clear.onclick = clearURLToExclusionList;

		var urlSpan = document.createElement("span");
		urlSpan.innerText = url;

		li.appendChild(clear);
		li.appendChild(urlSpan);

		document.querySelector('#listOfURLsToExclude').appendChild(li);
	}
}

function updateOptions(e) {
	browser.storage.local.set({
		InvertColorsState: document.querySelector('#InvertColorsState').checked,
		ImgColorNoInvert: document.querySelector('#ImgColorNoInvert').checked
	});

	e.preventDefault();
}

function addURLToExclusionList(e) {
	browser.storage.local.get("urlList").then(function (res) {
		res.urlList = res.urlList || {}
		res.urlList[document.querySelector('#urlToExclude').Value] = 'Exclude';
		browser.storage.local.set({
			"urlList": res.urlList
		});

	})
}

function clearURLToExclusionList(e) {
	var url = e.target.id;

	browser.storage.local.get("urlList").then(function (res) {
		res.urlList = res.urlList || {}

		if (url in res.urlList) {
			delete res.urlList[url];
			browser.storage.local.set({
				"urlList": res.urlList
			});

			loadOptions();
		}

	})
}

browser.tabs.query({
	active: true,
	currentWindow: true
}).then(function (tabs) {
	document.querySelector("#urlToExclude").Value = toBaseURL(tabs[0].url);
});

function toBaseURL(fullURL) {
	return fullURL.replace(/(http(s)?:\/\/)|(\/.*){1}/g, '');
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector("#mainForm").addEventListener("submit", updateOptions);

document.querySelector("#excludeURL").addEventListener("submit", addURLToExclusionList);