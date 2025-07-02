"use client";
import { useState } from "react";

export function useEbitdaCalculator() {
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
    setEbitda(total.toFixed(2));
  };

  return {
    formData,
    ebitda,
    handleInputChange,
    calculateEBITDA,
  };
}
