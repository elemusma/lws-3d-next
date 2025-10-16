import React from "react";

const PricingTable = () => {
  const plans = [
    {
      title: "Starter",
      price: "$1,500.00",
      description: "Included on Starter",
      features: [
        "8 articles",
        "Internal Links",
        "Outbund Links",
        "Google Analytics",
        "Google Search Console",
        "Free Website",
        "Mobile-Friendly",
        "1,500 word articles",
      ],
      // note: "Save $500/mo Two spots left",
      color: "text-[#b5539f]",
      border: "border-[#b5539f]",
      headerBg: "bg-[#b5539f]",
      headerColor: "text-black",
      link: "https://buy.stripe.com/00gdST08wbWPbjq292",
    },
    {
      title: "Intermediate",
      price: "$2,000.00",
      description: "Included on Intermediate",
      features: [
        "Everything in Starter",
        "16 articles",
        "Backlinks / Outreach",
      ],
      note: "Special offer: Save $500/mo. Two spots left. Get it now for the price of the Starter Plan.",
      color: "text-[#fdb716]",
      border: "border-[#fdb716]",
      headerBg: "bg-[#fdb716]",
      headerColor: "text-black",
      link: "https://buy.stripe.com/5kAdST1cA7Gz9bi5lf",
    },
    {
      title: "Signature",
      price: "$2,500.00",
      description: "Included on Premium",
      features: [
        "Everything in Intermediate",
        "25 articles",
        "Directory Cleanup & Optimization",
        "News Feed Implementation",
        "Unlimited CRM Workflows",
      ],
      // note: "Save $7,500",
      color: "text-[#1f184a]",
      border: "border-[#1f184a]",
      headerBg: "bg-[#1f184a]",
      headerColor: "text-white",
      link: "https://buy.stripe.com/3cs9CD3kI9OHevCfZU",
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
        <span className="text-sm text-gray-500 leading-[0.8] pl-[15px]">
          /mo
        </span>
      </div>
    );
  };

  return (
    <div className="">
      <div className="grid md:grid-cols-3 items-start">
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
            <div className="p-6 pb-[5rem] flex flex-col flex-grow relative">
              {formatPrice(plan.price, plan.color)}
              <h3 className="text-lg font-semibold my-2">{plan.description}</h3>
              <ul className="mb-4 pl-0">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 before:content-none text-base"
                  >
                    <span className={`text-xl ${plan.color}`}>✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-red-500 font-bold text-xl">{plan.note}</p>
              )}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link absolute bottom-10"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
