interface Plan {
  name: string;
  price: string;
  description: string;
}

// Load selected plan from localStorage
const selectedPlan: Plan =
  JSON.parse(localStorage.getItem("selectedPlan") || "null") || {
    name: "No Plan Selected",
    price: "0.00",
    description: "No features",
  };

// Update plan summary
const planNameEl = document.getElementById("planName") as HTMLElement;
const planPriceEl = document.getElementById("planPrice") as HTMLElement;
const planFeaturesEl = document.getElementById("planFeatures") as HTMLElement;

planNameEl.textContent = selectedPlan.name;
planPriceEl.textContent = `$${selectedPlan.price}`;

// Populate features
planFeaturesEl.innerHTML = "";
if (selectedPlan.description) {
  selectedPlan.description.split(", ").forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    planFeaturesEl.appendChild(li);
  });
}

// Tabs and form switching
const tabs = document.querySelectorAll<HTMLDivElement>(".tab");
const forms = document.querySelectorAll<HTMLFormElement>("form");

function activateForm(targetId: string): void {
  tabs.forEach((tab) => tab.classList.remove("active"));
  forms.forEach((form) => form.classList.remove("active"));

  const targetForm = document.getElementById(targetId);
  targetForm?.classList.add("active");

  // Highlight correct tab
  tabs.forEach((tab) => {
    if (tab.dataset.target === targetId) {
      tab.classList.add("active");
    }
  });
}

// Tab click handler
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.dataset.target) {
      activateForm(tab.dataset.target);
    }
  });
});

// Icon click handler
const icons = document.querySelectorAll<HTMLImageElement>(
  ".payment-icons img"
);
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.dataset.target) {
      activateForm(icon.dataset.target);
    }
  });
});

// Payment form submissions
const cardForm = document.getElementById("cardForm") as HTMLFormElement;
const paypalBtn = document.getElementById("paypalPay") as HTMLButtonElement;
const cashappBtn = document.getElementById("cashappPay") as HTMLButtonElement;

cardForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    `Thank you for purchasing the ${selectedPlan.name} via Credit Card!`
  );
  localStorage.removeItem("selectedPlan");
  window.location.href = "index.html";
});

paypalBtn?.addEventListener("click", () => {
  alert(`Redirecting to PayPal for ${selectedPlan.name}...`);
  localStorage.removeItem("selectedPlan");
  window.location.href = "index.html";
});

cashappBtn?.addEventListener("click", () => {
  alert(`Redirecting to Cash App for ${selectedPlan.name}...`);
  localStorage.removeItem("selectedPlan");
  window.location.href = "index.html";
});
