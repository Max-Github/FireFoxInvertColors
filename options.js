function loadOption() {
	browser.storage.local.get('InvertColorsState').then((res) => {
		showOption(res.InvertColorsState);
	});
}

function showOption(state) {

	if (state == true) {
		document.querySelector("#InvertColorsState").innerHTML = "On";
	}
	else {
		document.querySelector("#InvertColorsState").innerHTML = "Off";
	}
}

function toggleOption(e) {
	browser.storage.local.get('InvertColorsState').then((res) => {

		var state = res.InvertColorsState;

		var newStat = true;
		if (state == true) {
			newStat = false;
		}

		browser.storage.local.set({
			InvertColorsState: newStat
		});

		showOption(newStat);
	});

	e.preventDefault();
}

document.addEventListener('DOMContentLoaded', loadOption);
document.querySelector("form").addEventListener("submit", toggleOption);
