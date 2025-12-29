"use client";
import React, { useState } from "react";

const PricingTableSEO = () => {
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
      price: "$1,500.00",
      typicalValue: "$3,000",
      description: "Included in Starter",
      features: [
        { name: "8 SEO Articles (750-1000 words)", value: "$1,200" },
        { name: "Internal & Outbound Linking", value: "$200" },
        { name: "Image Optimization + Embeds", value: "$200" },
        { name: "Copyright-Free Images/Videos", value: "$150" },
        { name: "Content Strategy & Topic Planning", value: "$300" },
        { name: "Keyword Research", value: "$300" },
        { name: "Google Search Console Monitoring", value: "$200" },
        { name: "Monthly Site Audit & 404 Check", value: "$250" },
        { name: "Mobile-Responsive Website", value: "$200" },
        { name: "90+ Accessibility Score", value: "$300" },
        { name: "Web Hosting & Domain Renewal Support", value: "$250" },
      ],
      note: "Save $1,500",
      color: "text-[#b5539f]",
      border: "border-[#b5539f]",
      headerBg: "bg-[#b5539f]",
      headerColor: "text-black",
      buttonBg: "bg-[#b5539f]",
      buttonHover: "hover:bg-[#9a4587]",
      link: "https://buy.stripe.com/00gdST08wbWPbjq292",
    },
    {
      title: "Intermediate",
      price: "$3,000.00",
      typicalValue: "$5,100",
      description: "Included in Intermediate",
      features: [
        { name: "Everything in Starter", value: "$1,500" },
        { name: "16 SEO Articles", value: "$2,400" },
        {
          name: "Backlink Strategy & Outreach (1,000 emails/mo)",
          value: "$600",
        },
        { name: "Competitive Analysis", value: "$300" },
        { name: "More Aggressive Keyword Research", value: "$300" },
      ],
      note: "Save $2,100",
      color: "text-[#fdb716]",
      border: "border-[#fdb716]",
      headerBg: "bg-[#fdb716]",
      headerColor: "text-black",
      buttonBg: "bg-[#fdb716]",
      buttonHover: "hover:bg-[#e0a614]",
      link: "https://buy.stripe.com/3cI8wO2Bafk5ez16oh7wA1l",
    },
    {
      title: "Signature",
      price: "$4,500.00",
      typicalValue: "$9,000",
      description: "Included in Signature",
      features: [
        { name: "Everything in Intermediate", value: "$3,000" },
        { name: "25 SEO Articles", value: "$3,750" },
        { name: "Directory Cleanup & Optimization", value: "$500" },
        { name: "News Feed Implementation", value: "$300" },
        { name: "Unlimited CRM Workflows", value: "$1,000" },
        { name: "Server Config (SSH, FTP Security)", value: "$450" },
      ],
      note: "Save $4,500",
      color: "text-[#1f184a]",
      border: "border-[#1f184a]",
      headerBg: "bg-[#1f184a]",
      headerColor: "text-white",
      buttonBg: "bg-[#1f184a]",
      buttonHover: "hover:bg-[#15102e]",
      link: "https://buy.stripe.com/14AdR8cbK7RD4Yr9At7wA1m",
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
            <div className={`${plan.headerBg} p-4`}>
              <h2 className={`text-4xl font-bold mt-1 ${plan.headerColor}`}>
                {plan.title}
              </h2>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold my-2">{plan.description}</h3>
              <ul className="mb-4 pl-0 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-between gap-2 before:content-none text-sm"
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

              {/* {plan.note && <p className="text-red-500 font-bold text-xl mb-4">{plan.note}</p>} */}

              <div className="pricing">
                <div className="mb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl text-gray-400 line-through">
                      {plan.typicalValue}
                    </span>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {plan.note}
                    </span>
                  </div>
                  {formatPrice(plan.price, plan.color)}
                </div>

                <button
                  onClick={() => toggleExpanded(index)}
                  className={`${plan.buttonBg} ${plan.buttonHover} text-white px-4 py-2 rounded text-sm font-semibold mb-4 transition-colors`}
                >
                  {expandedCards[index] ? "Hide" : "Show"} Value Breakdown
                </button>
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${plan.buttonBg} ${plan.buttonHover} text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors block`}
              >
                Subscribe Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTableSEO;
