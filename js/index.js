const body = document.querySelector("body");
const pageviewsRangeInput = document.querySelector("#pageviews");
const billingmethodRangeInput = document.querySelector("#billing-method");
const pageviewValueDiv = document.querySelector(".pageview-value");
const priceValueDiv = document.querySelector(".price-value");
const startBtn = document.querySelector(".start");
const overlay = document.querySelector(".overlay");

window.addEventListener("load", () => {
	pageviewValueDiv.innerHTML = pageviewsFromInput();
	priceValueDiv.innerHTML = `<i class="fas fa-dollar-sign"></i
						>${pricing()}.00`;
});

let pageviews;
let discount = false;
pageviewsRangeInput.addEventListener("input", (e) => {
	let pageviewsInput = e.target.value;
	pageviews = pageviewsFromInput(pageviewsInput);
	pageviewValueDiv.innerHTML = pageviews;

	priceValueDiv.innerHTML = `<i class="fas fa-dollar-sign"></i
						>${pricing(pageviews, discount)}.00`;
});

billingmethodRangeInput.addEventListener("input", (e) => {
	let billingmethodInput = e.target.value;
	discount = isDiscountApplied(billingmethodInput);

	priceValueDiv.innerHTML = `<i class="fas fa-dollar-sign"></i
						>${pricing(pageviews, discount)}.00`;
});

let pageviewsFromInput = (pgvIn = 3) => {
	if (pgvIn == 1) return "10K";
	if (pgvIn == 2) return "50K";
	if (pgvIn == 3) return "100K";
	if (pgvIn == 4) return "500K";
	if (pgvIn == 5) return "1M";
};

let pricing = (pgv = "100K", dsc) => {
	let price;
	if (pgv == "10K") price = 8;
	if (pgv == "50K") price = 12;
	if (pgv == "100K") price = 16;
	if (pgv == "500K") price = 24;
	if (pgv == "1M") price = 36;

	if (dsc) return price * (1 - 0.25);
	return price;
};

let isDiscountApplied = (bmIn) => {
	if (bmIn == 1) return true;
	return false;
};

startBtn.addEventListener("click", (e) => {
	e.preventDefault();
	overlay.classList.remove("hide");
	setTimeout(() => {
		overlay.classList.add("hide");
	}, 2000);
});
