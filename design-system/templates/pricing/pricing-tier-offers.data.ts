import { IPricing } from "@design-system/types";

// Offers per pricing Tier
export const teir_one_offers = [
  "Identity verification (KYC and Onboarding)",
  "Wallet and Account Screening",
  "Identify Suspicious Transactions",
  "Monitor client transaction activities ",
  "Crypto assets fraud mitigation ",
  "Wallet Risk Score",
  "Consultation service",
];

export const teir_two_offers = [
  "All Tier 1 Services included",
  "Build Compliance Policy",
  "Build a Compliance Unit",
  "Report Filing- SARs, STRs",
  "KYV and KYT",
  "Transaction Monitoring Alerts",
  "Assist with hiring in-house Certified Cryptocurrency Compliance Officer",
  "Periodical training of company staff on AML Compliance and possible risks",
];

export const teir_three_offers = [
  "All Tier 1 Services included",
  "All Tier 2 Services included Regular update of compliance program and policy documents in line with new rules and regulations.",
  "Travel Rule Compliance (Inclusive & Exclusive)",
  "One Compliance Officer Certification Training [Certified Cryptocurrency Compliance Specialist (3CS)]",
  "Investigation Consultation Service Assist in Educating Customers on New Crimes and Fraud",
  "Platform Vulnerability Assessment",
  "Cryptocurrency Investigation Training",
];

export const monthlyPricing: IPricing[] = [
  {
    tierOne: "1,689.9", // Tier 1
    tierTwo: "9,030", // Tier 2
    tierThree: "16,950.6", // Tier 3
  },
];

export const biAnnualPricing: IPricing[] = [
  {
    tierOne: "2,760.5", // Tier 1
    tierTwo: "15,757", // Tier 2
    tierThree: "30,708", // Tier 3
  },
];
export const annualPricing: IPricing[] = [
  {
    tierOne: "13,628", // Tier 1
    tierTwo: "66,493", // Tier 2
    tierThree: "127,034", // Tier 3
  },
];