import React from "react";
import "./style.css";

interface Plan {
  name: string;
  price: string;
  description: string;
}

const plans: Record<string, Plan> = {
  pro: {
    name: "Pro",
    price: "79.99",
    description:
      "Unlimited access to live streams, chat directly with streamers, exclusive private content, save photos & clips",
  },
  vip: {
    name: "VIP",
    price: "99.99",
    description:
      "All Pro features, early content access, private 1-on-1 sessions, VIP supporter badge",
  },
  grand: {
    name: "Grand",
    price: "159.99",
    description:
      "All VIP features, exclusive Grand content, priority support & shoutouts, custom perks for top fans",
  },
};

const PlanPage: React.FC = () => {
  const subscribe = (planKey: keyof typeof plans) => {
    const selectedPlan = plans[planKey];
    localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
    window.location.href = "Payment.html";
  };

  return (
    <div style={{ backgroundColor: "#0d0d0d", color: "#fff" }}>
      {/* Hero Section */}
      <section className="hero">
        <h1>Unlock Premium Access</h1>
        <p>
          Choose the plan that fits your needs and enjoy exclusive content, live
          streams, and VIP perks.
        </p>
      </section>

      <h2 className="section-title">Choose Your Plan</h2>

      {/* Plans Section */}
      <section className="plans">
        <div className="plan">
          <h2>Pro</h2>
          <div className="price">$79.99</div>
          <ul className="features">
            <li>Unlimited access to live streams</li>
            <li>Chat directly with streamers</li>
            <li>Exclusive private content</li>
            <li>Save photos & clips</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => subscribe("pro")}
          >
            Subscribe Now
          </button>
        </div>

        <div className="plan vip">
          <div className="ribbon">Most Popular</div>
          <h2>VIP</h2>
          <div className="price">$99.99</div>
          <ul className="features">
            <li>All Pro features</li>
            <li>Early content access</li>
            <li>Private 1-on-1 sessions</li>
            <li>VIP supporter badge</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => subscribe("vip")}
          >
            Subscribe Now
          </button>
        </div>

        <div className="plan grand">
          <div className="ribbon">Premium Access</div>
          <h2>Grand</h2>
          <div className="price">$159.99</div>
          <ul className="features">
            <li>All VIP features</li>
            <li>Exclusive Grand content</li>
            <li>Priority support & shoutouts</li>
            <li>Custom perks for top fans</li>
          </ul>
          <button
            className="subscribe-btn"
            onClick={() => subscribe("grand")}
          >
            Subscribe Now
          </button>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="why-upgrade">
        <h2>Why Upgrade?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>🔥 Unlock Premium Content</h3>
            <p>
              Get full, uncut access to your favorite streamers’ live moments
              and behind-the-scenes clips.
            </p>
          </div>
          <div className="benefit">
            <h3>💬 Engage in Real Time</h3>
            <p>
              Chat, react, and connect personally during live broadcasts — not
              just as a viewer, but as part of the community.
            </p>
          </div>
          <div className="benefit">
            <h3>🎁 Exclusive Rewards</h3>
            <p>
              Receive special badges, shout-outs, and VIP recognition from your
              favorite creators.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonial">
          “The best platform to connect with streamers. I’ve never felt this
          close to the people I watch — the upgrade is 100% worth it.”
          <strong>— Emily, Subscriber</strong>
        </div>

        <div className="testimonial">
          “I upgraded to VIP and it changed my experience completely. Worth
          every penny!”
          <strong>— Ryan, VIP Member</strong>
        </div>
      </section>

      <footer>© 2025 StreamWorld. All Rights Reserved.</footer>
    </div>
  );
};

export default PlanPage;
