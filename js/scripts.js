// Custom Scripts
// Custom scripts
let blockChapterButton = document.querySelectorAll('.block-chapter__button');
blockChapterButton.forEach(element => {
	element.addEventListener("click", openHelp);
});


function openHelp(e) {
	let clickElement = e.target;
	let clickParent = clickElement.closest(".block-chapter")
	let blockChapterDisplay = clickParent.querySelector(".block-chapter__display")
	toggleClass(blockChapterDisplay)
}

function toggleClass(element) {
	element.classList.toggle("-active")
};