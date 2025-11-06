"use client";
import React, { useState } from "react";

const PricingTableWebDesign = () => {
  // Track which cards have their value breakdown expanded
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {},
  );

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const plans = [
    {
      title: "Starter",
      price: "$3,000.00",
      typicalValue: "$8,425",
      description: "Included in Starter",
      features: [
        { name: "6 weeks timeline", value: null },
        { name: "SSL Certificate", value: "$75" },
        { name: "Ideal Client Focused Copy", value: "$1,750" },
        { name: "On-Page SEO optimization", value: "$1,000" },
        { name: "Mobile Optimization", value: "$500" },
        { name: "Google Analytics Setup", value: "$200" },
        { name: "Google Search Console Setup", value: "$200" },
        { name: "ADA Compliance Setup", value: "$1,500" },
        { name: "Conversion-Focused Design", value: "$2,000" },
        { name: "Schema Markup", value: "$225" },
        { name: "Sitemap", value: "$225" },
        { name: "6 Pages Including Homepage", value: "$750" },
      ],
      color: "text-[#b5539f]",
      border: "border-[#b5539f]",
      headerBg: "bg-[#b5539f]",
      headerColor: "text-black",
      buttonBg: "bg-[#b5539f]",
      buttonHover: "hover:bg-[#9a4587]",
      link: "https://buy.stripe.com/fZu3cufnW2xj2Qj9At7wA1j",
    },
    {
      title: "Intermediate",
      price: "$6,000.00",
      typicalValue: "$13,425",
      description: "Included in Intermediate",
      features: [
        { name: "10 weeks timeline", value: null },
        { name: "SSL Certificate", value: "$75" },
        { name: "Ideal Client Focused Copy", value: "$2,000" },
        { name: "On-Page SEO optimization", value: "$1,200" },
        { name: "Mobile Optimization", value: "$500" },
        { name: "Google Analytics Setup", value: "$200" },
        { name: "Google Search Console Setup", value: "$200" },
        { name: "ADA Compliance Setup", value: "$1,500" },
        { name: "Conversion-Focused Design", value: "$2,500" },
        { name: "Schema Markup", value: "$300" },
        { name: "Sitemap", value: "$300" },
        { name: "15 Pages Including Homepage", value: "$4,650" },
      ],
      note: "For Experts with 10+ Years Experience",
      color: "text-[#fdb716]",
      border: "border-[#fdb716]",
      headerBg: "bg-[#fdb716]",
      headerColor: "text-black",
      buttonBg: "bg-[#fdb716]",
      buttonHover: "hover:bg-[#e0a614]",
      link: "https://buy.stripe.com/fZueVcejS3Bn1MfeUN7wA1o",
    },
    {
      title: "Signature",
      price: "$9,000.00",
      typicalValue: "$20,925",
      description: "Included in Signature",
      features: [
        { name: "14 weeks timeline", value: null },
        { name: "SSL Certificate", value: "$75" },
        { name: "Ideal Client Focused Copy", value: "$2,500" },
        { name: "On-Page SEO optimization", value: "$1,500" },
        { name: "Mobile Optimization", value: "$500" },
        { name: "Google Analytics Setup", value: "$200" },
        { name: "Google Search Console Setup", value: "$200" },
        { name: "ADA Compliance Setup", value: "$2,000" },
        { name: "Conversion-Focused Design", value: "$3,000" },
        { name: "Schema Markup", value: "$400" },
        { name: "Sitemap", value: "$400" },
        { name: "Directory Cleanup & Optimization", value: "$650" },
        { name: "30 Pages Including Homepage", value: "$9,500" },
      ],
      note: "For Experts with 20+ Years Experience",
      color: "text-[#1f184a]",
      border: "border-[#1f184a]",
      headerBg: "bg-[#1f184a]",
      headerColor: "text-white",
      buttonBg: "bg-[#1f184a]",
      buttonHover: "hover:bg-[#15102e]",
      link: "https://buy.stripe.com/8x2cN45Nm7RD2Qj6oh7wA1n",
    },
  ];

  const formatPrice = (price: string, color: string) => {
    const [main, decimal] = price.split(".");
    return (
      <div className="flex items-baseline justify-start gap-2">
        <div
          className={`text-3xl font-bold ${color} flex items-start relative`}
        >
          <span>{main}</span>
          <sup className="text-sm align-super absolute top-1 -right-5">
            .{decimal}
          </sup>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-4 ${plan.border} rounded-lg overflow-hidden flex flex-col h-full`}
          >
            {/* Header */}
            <div className={`${plan.headerBg} p-4`}>
              <h2 className={`text-4xl font-bold mt-1 ${plan.headerColor}`}>
                {plan.title}
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold my-2">{plan.description}</h3>
              {/* Features List */}
              <ul className="mb-4 pl-0 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-between gap-2 before:content-none text-sm p-0"
                  >
                    <div className="flex items-start gap-2 flex-grow">
                      <span className={`text-xl ${plan.color} flex-shrink-0`}>
                        ✔
                      </span>
                      <span>{feature.name}</span>
                    </div>
                    {expandedCards[index] && feature.value && (
                      <span className="text-sm text-gray-500 flex-shrink-0 ml-2">
                        {feature.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Value Summary when expanded */}
              {expandedCards[index] && (
                <div className="border-t-2 border-gray-200 pt-3 mb-4">
                  <div className="flex justify-between items-center font-bold">
                    <span>Typical Total Value:</span>
                    <span className={plan.color}>{plan.typicalValue}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg mt-1">
                    <span>Your Price:</span>
                    <span className="text-green-600">{plan.price}</span>
                  </div>
                </div>
              )}

              {plan.note && (
                <p className="text-red-500 font-bold text-base mb-4">
                  {plan.note}
                </p>
              )}
              {/* Price with strikethrough value */}
              <div className="pricing">
                <div className="mb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl text-gray-400 line-through">
                      {plan.typicalValue}
                    </span>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      Save{" "}
                      {(
                        ((parseFloat(plan.typicalValue.replace(/[$,]/g, "")) -
                          parseFloat(plan.price.replace(/[$,]/g, ""))) /
                          parseFloat(plan.typicalValue.replace(/[$,]/g, ""))) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </div>
                  {formatPrice(plan.price, plan.color)}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className={`${plan.buttonBg} ${plan.buttonHover} text-white px-4 py-2 rounded text-sm font-semibold mb-4 transition-colors`}
                >
                  {expandedCards[index] ? "Hide" : "Show"} Value Breakdown
                </button>
                <p style={{fontSize:"14px"}}>Half Now. Half at Completion.</p>
              </div>

              {/* Subscribe Link */}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${plan.buttonBg} ${plan.buttonHover} text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors block`}
              >
                Make First Payment
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTableWebDesign;
