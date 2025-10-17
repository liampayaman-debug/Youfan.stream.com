// ===== TypeScript version of your login page logic =====

// Safe DOM element lookups with proper typing
const signupModal = document.getElementById("signupModal") as HTMLElement | null;
const loginModal = document.getElementById("loginModal") as HTMLElement | null;

const signupBtn = document.getElementById("signupBtn") as HTMLButtonElement | null;
const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement | null;

const closeSignup = document.getElementById("closeSignup") as HTMLElement | null;
const closeLogin = document.getElementById("closeLogin") as HTMLElement | null;

const switchToLogin = document.getElementById("switchToLogin") as HTMLAnchorElement | null;
const switchToSignup = document.getElementById("switchToSignup") as HTMLAnchorElement | null;

// Utility to show or hide modals
function showModal(modal: HTMLElement | null): void {
  if (modal) modal.style.display = "flex";
}

function hideModal(modal: HTMLElement | null): void {
  if (modal) modal.style.display = "none";
}

// ====== Event Listeners ======
signupBtn?.addEventListener("click", () => {
  showModal(signupModal);
  hideModal(loginModal);
});

loginBtn?.addEventListener("click", () => {
  showModal(loginModal);
  hideModal(signupModal);
});

closeSignup?.addEventListener("click", () => hideModal(signupModal));
closeLogin?.addEventListener("click", () => hideModal(loginModal));

switchToLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal(signupModal);
  showModal(loginModal);
});

switchToSignup?.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal(loginModal);
  showModal(signupModal);
});

// Optional: Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === signupModal) hideModal(signupModal);
  if (e.target === loginModal) hideModal(loginModal);
});
