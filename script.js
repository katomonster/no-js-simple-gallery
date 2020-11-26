const state = {
	currentIndex: 0,
}

window.addEventListener('resize', () => {
	const currentRadioBtn = document.getElementById(`image-${state.currentIndex + 1}`);
    document.querySelector('.thumb-slider').scrollLeft = window.innerWidth * state.currentIndex;
    if (currentRadioBtn) currentRadioBtn.click();
});

document.querySelector('.thumb-slider').addEventListener('scroll', (e) => {
  const forNextFigs = Array.from(e.target.querySelectorAll('figure.for-next'));
  const filtered = (forNextFigs.filter((fig, i) => {
    return fig.offsetLeft === e.target.scrollLeft;
  }));
  const slideIndex = filtered.length === 1 ?(forNextFigs.indexOf(filtered[0]) ) : null;


  if (slideIndex && slideIndex >  -1) {
    state.currentIndex = slideIndex;
  }

}, false);

document.querySelectorAll('label.arrow-btn').forEach((btn, i) => {
	btn.addEventListener('click', () => {
		state.currentIndex = parseInt(btn.getAttribute('for').replace('image-', '')) - 1;
	}, false);
});