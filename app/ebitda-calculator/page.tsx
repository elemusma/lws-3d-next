"use client";
import Head from "next/head";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    netIncome: "",
    interest: "",
    taxes: "",
    depreciation: "",
    amortization: "",
  });
  const [ebitda, setEbitda] = useState("0.00");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateEBITDA = (e: React.FormEvent) => {
    e.preventDefault();
    const values = Object.values(formData).map((val) => parseFloat(val) || 0);
    const total = values.reduce((acc, curr) => acc + curr, 0);

    setEbitda(
      total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );
  };

  return (
    <>
      {/* ✅ Dynamically set metadata in a Client Component */}
      <Head>
        <title>EBITDA Calculator - What Is Your Business Worth?</title>
        <meta
          name="description"
          content="Built by Tadeo Martinez. Investor. Entrepreneur. Programmer."
        />
        <meta
          property="og:title"
          content="EBITDA Calculator - What Is Your Business Worth?"
        />
        <meta
          property="og:description"
          content="Built by Tadeo Martinez. Investor. Entrepreneur. Programmer."
        />
        <meta
          property="og:url"
          content="https://latinowebstudio.com/ebitda-calculator"
        />
        <meta
          property="og:image"
          content="https://latinowebstudio.com/photos/ebitda-calculator.jpg"
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "EBITDA Calculator - What Is Your Business Worth?",
            description:
              "An easy-to-use EBITDA calculator to estimate business value. Built by Tadeo Martinez.",
            url: "https://latinowebstudio.com/ebitda-calculator",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "EBITDA Calculator",
              applicationCategory: "FinancialApplication",
              operatingSystem: "All",
              creator: {
                "@type": "Person",
                name: "Tadeo Martinez",
                url: "https://latinowebstudio.com/about",
              },
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
            },
            author: {
              "@type": "Person",
              name: "Tadeo Martinez",
            },
            publisher: {
              "@type": "Organization",
              name: "Latino Web Studio",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50 pt-[100px] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              EBITDA Calculator
            </h1>
            <p className="text-sm block md:hidden">
              Click calculate button below to see results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex md:flex-nowrap flex-wrap gap-x-4">
            <form
              onSubmit={calculateEBITDA}
              className="md:space-y-6 lg:w-1/2 w-full flex md:block sm:flex md:flex-nowrap flex-wrap"
            >
              {[
                { label: "Net Income ($):", name: "netIncome" },
                { label: "Interest Expense ($):", name: "interest" },
                { label: "Taxes Paid ($):", name: "taxes" },
                { label: "Depreciation ($):", name: "depreciation" },
                { label: "Amortization ($):", name: "amortization" },
              ].map((field) => (
                <div
                  key={field.name}
                  className={`flex lg:flex-nowrap flex-wrap items-center justify-between ${
                    field.name === "amortization"
                      ? "w-full"
                      : "w-1/2 sm:w-1/2 md:w-full"
                  } mt-2 mb-2 pr-2`}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 lg:w-1/2 w-full"
                  >
                    {field.label}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="mt-1 block lg:w-1/2 w-full rounded-md border border-[var(--accent-secondary)] bg-[#f7f7f7] p-4 shadow-md focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[var(--accent-secondary)] focus:outline-none sm:text-sm"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="lg:block md:hidden w-full bg-[var(--accent-tertiary)] text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Calculate EBITDA
              </button>
            </form>

            <div className="bg-gray-50 rounded-md p-4 lg:w-1/2 w-full">
              <div className="bg-white rounded-md p-4 shadow-sm mb-4">
                <h2 className="text-center text-[var(--accent-secondary)] font-medium">
                  EBITDA:
                </h2>
                <p className="text-center text-2xl font-semibold mt-1">
                  ${ebitda}
                </p>
              </div>
              <button
                type="submit"
                onClick={calculateEBITDA} // Call function manually
                className="hidden md:block lg:hidden w-full bg-[var(--accent-tertiary)] text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Calculate EBITDA
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
