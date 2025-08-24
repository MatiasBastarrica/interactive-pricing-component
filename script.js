const slider = document.querySelector(".slider");

function updateSliderBackground(el) {
  const value = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.background = `linear-gradient(to right, var(--soft-cyan) ${value}%, var(--light-grayish-blue-slider) ${value}%)`;
}

updateSliderBackground(slider);

slider.addEventListener("input", () => {
  updateSliderBackground(slider);
  switch (slider.value) {
    case "0":
      pageview.textContent = "10K";
      price.textContent = "$8";
      break;
    case "25":
      pageview.textContent = "50K";
      price.textContent = "$12";
      break;
    case "50":
      pageview.textContent = "100K";
      price.textContent = "$16";
      break;
    case "75":
      pageview.textContent = "500K";
      price.textContent = "$24";
      break;
    case "100":
      pageview.textContent = "1M";
      price.textContent = "$36";
      break;

    default:
      break;
  }
});

const pageview = document.querySelector(".pageview-number");
const price = document.querySelector(".price");
