'use client';

import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const tierStyles = [
  {
    nameColor: "text-black",
    priceColor: "text-black",
    descColor: "text-black",
    roundBg: "bg-green-800 text-lime-100 border-2 border-lime-100",
    tam: "text-black",
  },
  {
    nameColor: "text-green-800",
    priceColor: "text-green-800",
    descColor: "text-green-800",
    roundBg: "bg-lime-100 text-green-800 border-2 border-lime-500",
    tam: "text-green-600",
  },
];

const tiers = [
  {
    name: "Standard Access",
    id: "tier-basic",
    href: "#",
    price: "₦10,000 - ₦25,000",
    description: "(per course depending on the topic)",
    introFeatures: ["Pay once and get lifetime", "access to that course"],
    round: ["Best for Learners who want to buy only the courses they need"],
    tam: ["What You Get:"],
    features: [
      "Access to the full content of the course you purchased",
      "Quizzes and assignments",
      "Downloadable resources",
      "Certificate of Completion",
      "Ai Resume Creator",
      "Access to course community group",
      "Lifetime access to purchased course",
    ],
    featured: false,
    cta: "Upgrade",
  },
  {
    name: "Premium All-Access Pass",
    id: "tier-premium",
    href: "#",
    price: "₦150,000",
    description: "(3 Months Subscription)",
    round: [
      "Best for Serious learners who want full access to multiple courses and career support",
    ],
    tam: ["What You Get:"],
    features: [
      "Everything in Basic",
      "Ad-free experience",
      "Exclusive premium articles",
      "Priority support",
      "Monthly analytics report",
      "Access to all blog articles",
      "Weekly newsletter",
      "Commenting privileges",
      "Ad-supported experience",
    ],
    featured: true,
    cta: "Subscribe",
  },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Subscription() {
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowContent(true), 400);
    const timeout2 = setTimeout(() => setShowCards(true), 600);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubscribed(false);

    try {
      const res = await fetch("https://api.example.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed. Please try again.");
      setSubscribed(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden w-full top-0 bg-lime-50 relative">
      {/* Top animated curve */}
      <div
        className="absolute top-0 left-0 w-full h-[75vh] bg-lime-100 z-10 animate-slide-down-curve max-sm:h-[50vh]"
        style={{
          clipPath: "polygon(0 0, 0 60%, 50% 100%, 100% 60%, 100% 0)",
        }}
      ></div>

      <div className="relative isolate px-6 py-14 sm:py-32 lg:px-8 z-20 max-sm:px-4 max-sm:py-10 max-md:py-16">
        {/* Header */}
        <div
          className={classNames(
            "mx-auto max-w-4xl text-center transition-opacity duration-500",
            showContent ? "animate-fade-in opacity-100" : "opacity-0"
          )}
        >
          <h1 className="text-4xl font-bold mb-10 text-black max-sm:text-2xl max-md:text-3xl">
            Our Pricing
          </h1>
          <h3 className="text-lg text-black font-semibold max-w-2xl mx-auto mt-4 max-sm:text-base max-md:text-md">
            We offer two flexible options for learning
          </h3>
          <p className="font-light text-black max-sm:text-sm">
            Pay-as-you-go or Premium All-Access
          </p>
          <p className="font-light text-black max-sm:text-sm">
            Pass – choose what works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-6 lg:max-w-4xl max-sm:mt-10 max-md:gap-y-6">
          {tiers.map((tier, index) => {
            const style = tierStyles[index] || {};
            return (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-white text-sm shadow-xl"
                    : "bg-lime-100 text-sm ring-1 ring-lime-200",
                  "rounded-sm p-8 transition-transform duration-300 ease-in-out hover:scale-105 opacity-0 max-sm:p-4 max-md:p-6",
                  showCards
                    ? index === 0
                      ? "animate-slide-in-left opacity-100"
                      : "animate-slide-in-right opacity-100"
                    : ""
                )}
              >
                <h3
                  className={classNames(
                    "text-lg font-semibold max-sm:text-md max-md:text-base",
                    style.nameColor
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      "text-md font-bold max-sm:text-sm",
                      style.priceColor
                    )}
                  >
                    {tier.price}
                  </span>
                </p>
                <p
                  className={classNames(
                    "mt-1 max-sm:text-xs max-md:text-sm",
                    style.descColor
                  )}
                >
                  {tier.description}
                </p>

                <div className="mt-6 max-sm:mt-3">
                  {tier.introFeatures &&
                    tier.introFeatures.map((line, i) => (
                      <p
                        key={i}
                        className="text-lime-100 flex justify-center max-sm:text-xs"
                      >
                        {line}
                      </p>
                    ))}
                </div>

                {tier.round?.map((line, i) => (
                  <div
                    key={i}
                    className={classNames(
                      "flex items-center gap-2 w-full relative rounded-md py-4 px-3 font-semibold max-sm:py-2 max-sm:px-2 max-sm:text-xs",
                      style.roundBg
                    )}
                  >
                    <span className="p-1 absolute top-5 -left-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 640 640">
                <path fill="#b7f34b" d="M320 80C452.5 80 560 187.5 560 320C560 452.5 452.5 560 320 560C187.5 560 80 452.5 80 320C80 187.5 187.5 80 320 80zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM272 416C267.6 416 264 419.6 264 424C264 428.4 267.6 432 272 432L368 432C372.4 432 376 428.4 376 424C376 419.6 372.4 416 368 416L328 416L328 280C328 275.6 324.4 272 320 272L272 272C267.6 272 264 275.6 264 280C264 284.4 267.6 288 272 288L312 288L312 416L272 416zM320 240C328.8 240 336 232.8 336 224C336 215.2 328.8 208 320 208C311.2 208 304 215.2 304 224C304 232.8 311.2 240 320 240z"/>
                 </svg>
                    </span>
                    <p className="flex-1 text-center justify-center">{line}</p>
                  </div>
                  
                ))}

                <ul className="mt-12 space-y-3 max-sm:mt-6">
                  <h3
                    className={classNames(
                      "text-sm font-semibold mb-4 max-sm:text-xs",
                      style.tam
                    )}
                  >
                    {tier.tam}
                  </h3>
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start space-x-3 max-sm:text-xs"
                    >
                      <CheckIcon
                        className={classNames(
                          tier.featured
                            ? "text-white bg-green-800"
                            : "text-green-800 bg-white",
                          "h-4 w-4 flex-none rounded p-0.5 max-sm:h-3 max-sm:w-3"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          tier.featured
                            ? "text-green-800"
                            : "text-black",
                          "ml-1"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  className={classNames(
                    tier.featured
                      ? "bg-gradient-to-r from-green-950 via-green-800 to-lime-500 text-white"
                      : "bg-green-100 text-black hover:bg-green-200",
                    "mt-9 mb-12 block w-full rounded-md py-2 px-4 text-center font-semibold hover:scale-105 transition-transform duration-200 max-sm:py-2 max-sm:px-3 max-sm:text-sm"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`You selected the ${tier.name}`);
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Newsletter Subscription Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubscribe}
            className="bg-white py-20 px-5 sm:px-10 xl:px-20 mt-32 rounded-lg shadow-md text-center w-full max-w-6xl mx-auto transition-all duration-700 max-sm:py-10 max-sm:px-4 max-md:py-14"
          >
            <h2 className="text-2xl font-bold mb-4 max-sm:text-lg max-md:text-xl">
              STAY UPDATED WITH OUR NEWSLETTER
            </h2>
            <p className="pb-6 text-sm text-gray-700 max-sm:text-xs">
              Get the latest news and updates in your inbox.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-3xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="sm:flex-1 w-full px-5 py-3 border border-lime-200 rounded-md shadow-sm bg-lime-100 placeholder-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-green-950 via-green-800 to-lime-500 text-white rounded-md font-semibold hover:brightness-105 transition max-sm:px-4 max-sm:py-2 max-sm:text-sm"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {subscribed && (
              <p className="mt-4 text-green-600 max-sm:text-xs">
                Thank you for subscribing!
              </p>
            )}
            {error && (
              <p className="mt-4 text-red-500 max-sm:text-xs">{error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
