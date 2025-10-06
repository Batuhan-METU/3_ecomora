"use client";

import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  async function handleAddSubscriber() {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Thanks for signing up! Check your inbox!");
        setEmail("");
      } else {
        alert("❌ Failed: " + (data.error?.message || "Unknown error"));
      }
    } catch (err) {
      console.log("Failed to add subscriber: ", err.message);
      alert("⚠️ Network error: " + err.message);
    }
  }

  return (
    <div className="sign-up">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address..."
      />
      <button onClick={handleAddSubscriber} className="button-card">
        Sign Up!
      </button>
    </div>
  );
}
