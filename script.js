const slider = document.querySelector(".slider");

function updateSliderBackground(el) {
  const value = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.background = `linear-gradient(to right, var(--soft-cyan) ${value}%, var(--light-grayish-blue-slider) ${value}%)`;
}

updateSliderBackground(slider);

slider.addEventListener("input", () => updateSliderBackground(slider));
