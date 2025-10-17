import React, { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    const openButtons = document.querySelectorAll<HTMLButtonElement | HTMLDivElement>(
      ".openModalBtn, #openModalBtnTop"
    );
    const premiumModal = document.getElementById("premiumModal");
    const closePremiumModal = document.getElementById("closePremiumModal");
    const subscribePremiumBtn = document.getElementById("subscribePremiumBtn");

    const openModal = () => {
      if (!premiumModal) return;
      premiumModal.classList.add("show");
      setTimeout(() => {
        const modalContent = premiumModal.querySelector(".modal-content");
        modalContent?.classList.add("pop");
      }, 10);
    };

    const closeModal = () => {
      if (!premiumModal) return;
      const modalContent = premiumModal.querySelector(".modal-content");
      modalContent?.classList.remove("pop");
      setTimeout(() => premiumModal.classList.remove("show"), 250);
    };

    const redirectToPlan = () => {
      window.location.href = "plan.html";
    };

    openButtons.forEach((btn) => btn.addEventListener("click", openModal));
    closePremiumModal?.addEventListener("click", closeModal);
    subscribePremiumBtn?.addEventListener("click", redirectToPlan);

    return () => {
      openButtons.forEach((btn) => btn.removeEventListener("click", openModal));
      closePremiumModal?.removeEventListener("click", closeModal);
      subscribePremiumBtn?.removeEventListener("click", redirectToPlan);
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#1d1a25] text-white font-sans overflow-x-hidden min-h-screen">
      {/* HEADER */}
      <nav className="w-full bg-[#1d1b21] border-b border-[#2c2a2f] fixed top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-3">
            <img
              src="Youfanlogo.png"
              alt="You Fan Stream Logo"
              className="w-10 h-10 rounded-full shadow-lg object-cover"
            />
            <span className="text-xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
              You Fan Stream
            </span>
          </a>

          <ul className="hidden sm:flex space-x-8 text-sm font-medium text-gray-300">
            <li>
              <a href="#" className="hover:text-purple-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="broadcasts.html" className="hover:text-purple-400 transition duration-300">
                Broadcasts
              </a>
            </li>
            <li>
              <a href="profile.html" className="hover:text-purple-400 transition duration-300">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition duration-300">
                Settings
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300">
              Go Live
            </button>
            <button
              id="openModalBtnTop"
              className="px-5 py-2 text-sm font-semibold rounded-full border-2 border-purple-600 text-purple-300 hover:text-white hover:bg-purple-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      <div className="h-16" />

      <main className="max-w-7xl mx-auto w-full flex gap-6 mt-8 px-6">
        {/* LEFT MAIN CONTENT */}
        <div className="flex-1">
          <div className="flex space-x-10 border-b border-[#2c2a2f] pb-3 mb-6">
            <button className="tab-active text-[#caa3ff] font-bold border-b-2 border-[#caa3ff]">
              All
            </button>
            <button className="text-gray-400 hover:text-purple-300 transition">Subscribed</button>
            <button className="text-gray-400 hover:text-purple-300 transition">For You</button>
          </div>

          <h2 className="text-xl font-bold mb-4 text-[#caa3ff]">Made For You</h2>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="thumb openModalBtn relative rounded-xl overflow-hidden bg-[#0f0f13] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(155,94,255,0.3)]">
                <img
                  src={`thumb${num}.jpg`}
                  alt={`Video ${num}`}
                  className="w-full h-[200px] object-cover filter blur-[6px] brightness-75 hover:blur-[3px] hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
                  ▶
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar bg-[#0f0f13] border-l border-[#2a1a4a] p-5 w-[300px] rounded-xl">
          <h3 className="text-lg font-bold text-[#caa3ff] mb-4">Suggestions</h3>
          <div className="space-y-3 mb-8">
            {[
              { img: 12, name: "@MikaZee" },
              { img: 25, name: "@LiveKay" },
            ].map((user) => (
              <div key={user.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={`https://i.pravatar.cc/50?img=${user.img}`}
                    className="w-10 h-10 rounded-full border border-purple-500"
                    alt={user.name}
                  />
                  <span>{user.name}</span>
                </div>
                <button className="neon-btn text-xs py-1 px-3 rounded-full openModalBtn bg-gradient-to-r from-[#6b21a8] to-[#9f5cff] shadow-[0_6px_24px_rgba(155,94,255,0.25),_0_0_40px_rgba(155,94,255,0.18)_inset] hover:scale-105 transition-transform">
                  Follow
                </button>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#caa3ff] mb-4">Streams You Might Like</h3>
          <div className="space-y-3">
            {[
              { img: 47, name: "@JayFire" },
              { img: 19, name: "@NovaX" },
            ].map((stream) => (
              <div key={stream.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={`https://i.pravatar.cc/50?img=${stream.img}`}
                    className="w-10 h-10 rounded-full border-2 border-red-500 animate-pulse"
                    alt={stream.name}
                  />
                  <span>{stream.name}</span>
                </div>
                <button className="neon-btn text-xs py-1 px-3 rounded-full openModalBtn bg-gradient-to-r from-[#6b21a8] to-[#9f5cff] shadow-[0_6px_24px_rgba(155,94,255,0.25),_0_0_40px_rgba(155,94,255,0.18)_inset] hover:scale-105 transition-transform">
                  Watch
                </button>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* MODAL */}
      <div
        id="premiumModal"
        className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] hidden items-center justify-center"
      >
        <div className="modal-content rounded-2xl p-6 bg-[#0f0f12] border border-[#2a1a4a] relative transform scale-75 opacity-0 transition-all duration-300 shadow-[0_0_40px_10px_rgba(155,94,255,0.4)]">
          <button
            id="closePremiumModal"
            className="absolute top-3 right-3 text-slate-300 hover:text-white text-2xl"
          >
            &times;
          </button>
          <h3 className="text-2xl font-extrabold text-white/95 text-center">
            Oops! For Premium Users Only
          </h3>
          <p className="mt-3 text-slate-300 text-center">
            Unlock full live streams and exclusive content by subscribing.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <button
              id="subscribePremiumBtn"
              className="neon-btn py-3 px-6 rounded-full text-white font-semibold bg-gradient-to-r from-[#6b21a8] to-[#9f5cff]"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
