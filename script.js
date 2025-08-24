const slider = document.querySelector(".slider");
const pageview = document.querySelector(".pageview-number");
const price = document.querySelector(".price");
const toggle = document.querySelector("input[type='checkbox']");

function updateSliderBackground(el) {
  const value = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.background = `linear-gradient(to right, var(--soft-cyan) ${value}%, var(--light-grayish-blue-slider) ${value}%)`;
}

function switchBillingInfo() {
  if (!toggle.checked) {
    switch (slider.value) {
      case "0":
        pageview.textContent = "10K";
        price.textContent = "$8.00";
        break;
      case "25":
        pageview.textContent = "50K";
        price.textContent = "$12.00";
        break;
      case "50":
        pageview.textContent = "100K";
        price.textContent = "$16.00";
        break;
      case "75":
        pageview.textContent = "500K";
        price.textContent = "$24.00";
        break;
      case "100":
        pageview.textContent = "1M";
        price.textContent = "$36.00";
        break;

      default:
        break;
    }
  } else {
    switch (slider.value) {
      case "0":
        pageview.textContent = "10K";
        price.textContent = "$6.00";
        break;
      case "25":
        pageview.textContent = "50K";
        price.textContent = "$9.00";
        break;
      case "50":
        pageview.textContent = "100K";
        price.textContent = "$12.00";
        break;
      case "75":
        pageview.textContent = "500K";
        price.textContent = "$18.00";
        break;
      case "100":
        pageview.textContent = "1M";
        price.textContent = "$27.00";
        break;

      default:
        break;
    }
  }
}

updateSliderBackground(slider);

slider.addEventListener("input", () => {
  updateSliderBackground(slider);
  switchBillingInfo();
});

toggle.addEventListener("input", () => {
  switchBillingInfo();
});
