import React from "react";

const PricingTableWebDesign = () => {
  const plans = [
    {
      title: "Starter",
      price: "$3,000.00",
      description: "Included in Starter",
      features: [
        "4 weeks timeline",
        "SSL Certificate",
        "Attorney-Focused Copy",
        "On-Page SEO optimization",
        "Mobile Optimization",
        "Google Analytics Setup",
        "Google Search Console Setup",
        "ADA Compliance Setup",
        "Conversion-Focused Design",
        "Schema Markup",
        "Sitemap",
        "6 Pages Including Homepage",
      ],
      color: "text-[#b5539f]",
      border: "border-[#b5539f]",
      headerBg: "bg-[#b5539f]",
      headerColor: "text-black",
      link: "https://buy.stripe.com/8x2dR8b7G3Bn9eH5kd7wA1a",
    },
    {
      title: "Intermediate",
      price: "$6,000.00",
      description: "Included in Intermediate",
      features: [
        "8 weeks timeline",
        "SSL Certificate",
        "Attorney-Focused Copy",
        "On-Page SEO optimization",
        "Mobile Optimization",
        "Google Analytics Setup",
        "Google Search Console Setup",
        "ADA Compliance Setup",
        "Conversion-Focused Design",
        "Schema Markup",
        "Sitemap",
        "15 Pages Including Homepage",
      ],
      note: "For Experts with 10+ Years Experience",
      color: "text-[#fdb716]",
      border: "border-[#fdb716]",
      headerBg: "bg-[#fdb716]",
      headerColor: "text-black",
      link: "https://buy.stripe.com/8x28wO7Vu6Nz3UnaEx7wA1b",
    },
    {
      title: "Signature",
      price: "$9,000.00",
      description: "Included in Signature",
      features: [
        "12 weeks timeline",
        "SSL Certificate",
        "Attorney-Focused Copy",
        "On-Page SEO optimization",
        "Mobile Optimization",
        "Google Analytics Setup",
        "Google Search Console Setup",
        "ADA Compliance Setup",
        "Conversion-Focused Design",
        "Schema Markup",
        "Sitemap",
        "Directory Cleanup & Optimization",
        "30 Pages Including Homepage",
      ],
      note: "Save $3,000",
      color: "text-[#1f184a]",
      border: "border-[#1f184a]",
      headerBg: "bg-[#1f184a]",
      headerColor: "text-white",
      link: "https://buy.stripe.com/dRm7sKgs02xjduX9At7wA1c",
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

export default PricingTableWebDesign;
