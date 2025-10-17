// profile.ts — TypeScript version of your inline <script>

document.addEventListener("DOMContentLoaded", () => {
  // === Generate Posts Dynamically ===
  const container = document.getElementById("postsContainer");
  if (container) {
    const imgs = Array.from({ length: 12 }, (_, i) =>
      `https://source.unsplash.com/800x900/?hot-men,portrait&sig=${i}`
    );

    container.innerHTML = imgs
      .map(
        (src, i) => `
        <article class="post">
          <img src="${src}" alt="post ${i + 1}">
          <div class="overlay">
            <h4>🔥 Subscribe now for full access</h4>
            <p>Members-only exclusive content</p>
            <button class="subscribe-btn openModalBtn">Subscribe Now</button>
          </div>
          <div class="post-info">
            <div>❤️ ${Math.floor(Math.random() * 5 + 1)}K &nbsp; 💬 ${Math.floor(
          Math.random() * 300
        )}</div>
            <div>${Math.floor(Math.random() * 24 + 1)}h ago</div>
          </div>
        </article>
      `
      )
      .join("");
  }

  // === Redirect for Subscribe Buttons ===
  const openButtons = document.querySelectorAll<HTMLButtonElement>(
    "#openModalBtnTop, .openModalBtn"
  );
  openButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      window.location.href = "plan.html";
    })
  );

  // === Premium Modal Logic ===
  const watchLiveBtn = document.getElementById("openModalBtnTop2");
  const premiumModal = document.getElementById("premiumModal");
  const closePremiumModal = document.getElementById("closePremiumModal");
  const subscribePremiumBtn = document.getElementById("subscribePremiumBtn");

  if (watchLiveBtn && premiumModal && closePremiumModal && subscribePremiumBtn) {
    const modalContent = premiumModal.querySelector<HTMLElement>(".modal-content");

    watchLiveBtn.addEventListener("click", () => {
      premiumModal.classList.add("show");
      setTimeout(() => modalContent?.classList.add("pop"), 10);
    });

    closePremiumModal.addEventListener("click", () => {
      modalContent?.classList.remove("pop");
      setTimeout(() => premiumModal.classList.remove("show"), 250);
    });

    subscribePremiumBtn.addEventListener("click", () => {
      window.location.href = "plan.html";
    });
  }
});
