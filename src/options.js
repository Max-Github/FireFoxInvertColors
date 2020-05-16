function loadOptions() {
	browser.storage.local.get().then((res) => {
		showOption(res.InvertColorsState, res.InvertPage, res.InvertImage);
	});
}

function showOption(state, invertPage, invertImage) {
	document.querySelector("#InvertColorsState").checked = state;
        if (invertPage && !invertImage || !invertPage && !invertImage)
            document.querySelector('input[name=InvertItems]:checked').value = "InvertPageOnly";
        if (invertPage && invertImage)
            document.querySelector('input[name=InvertItems]:checked').value = "InvertPageAndImage";
        if (!invertPage && invertImage)
            document.querySelector('input[name=InvertItems]:checked').value = "InvertImageOnly";
}


function updateOptions(e) {
	browser.storage.local.set({
		InvertColorsState: document.querySelector('#InvertColorsState').checked,
		InvertPage: document.querySelector('input[name=InvertItems]:checked').value == "InvertPageAndImage"
                         || document.querySelector('input[name=InvertItems]:checked').value == "InvertPageOnly",
		InvertImage: document.querySelector('input[name=InvertItems]:checked').value == "InvertPageAndImage"
                          || document.querySelector('input[name=InvertItems]:checked').value == "InvertImageOnly"
	});
	e.preventDefault();
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector("form").addEventListener("submit", updateOptions);
