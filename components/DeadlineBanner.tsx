"use client";
import { useState, useEffect } from "react";

// May 18 2026 23:59:59 AEST = May 18 2026 13:59:59 UTC
const DEADLINE = new Date("2026-05-18T13:59:59Z").getTime();

function getTimeLeft() {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function DeadlineBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  const { days, hours, minutes, seconds } = timeLeft;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full bg-orange-500 text-white text-center py-2.5 px-4">
      <p className="text-sm font-semibold">
        ⏰ Introductory pricing ends{" "}
        <span className="font-bold">May 18</span>
        {" — "}
        <span className="font-mono font-bold tracking-wide">
          {days > 0 ? `${days}d ` : ""}{pad(hours)}h {pad(minutes)}m {pad(seconds)}s
        </span>
        {" remaining"}
      </p>
    </div>
  );
}
