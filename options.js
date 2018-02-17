function loadOptions() {
	browser.storage.local.get().then((res) => {
		showOption(res.InvertColorsState, res.ImgColorNoInvert);
	});
}

function showOption(state, imgNoInvert) {
	document.querySelector("#InvertColorsState").checked = state;
	document.querySelector('#ImgColorNoInvert').checked = imgNoInvert;
}


function updateOptions(e) {
	browser.storage.local.set({
		InvertColorsState: document.querySelector('#InvertColorsState').checked,
		ImgColorNoInvert: document.querySelector('#ImgColorNoInvert').checked
	});

	e.preventDefault();
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector("form").addEventListener("submit", updateOptions);
