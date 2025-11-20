import React, { useState } from "react";
function Tables() {
  const [activeTab, setActiveTab] = useState("equity");
  return (
    <section className="max-w-6xl mx-auto my-12 font-sans">
      {/*Tabs*/}

      <div className="flex border border-gray-300">
        {["equity", "currency", "commodity"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-mediam text-[#666]transition-colors duration-200
                ${
                  activeTab === tab
                    ? "text-[#387ed1] border-b-2 border-[#387ed1]"
                    : "hover:text-[#387ed1]"
                }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {/* Tables */}
      <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
        {activeTab === "equity" && (
          <table className="w-full broder-collapse">
            <thead>
              <tr className=" border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  &nbsp;
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Equity delivery
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Equity intraday
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  F&O - Futures
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  F&O - Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  Brokerage
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  Zero Brokerage
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  Flat Rs. 20 per executed order
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  STT/CTT
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  0.1% on buy & sell
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  0.025% on the sell side
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  0.02% on the sell side
                </td>
                <td className="text- sm px-[15px] py-[12px] text-[#424242] border-none">
                  <ul className="list-disc  pl-[20px]">
                    <li className="mb-[5px]">
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li className="mb-[5px]">0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  Transaction charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  NSE: 0.00297%
                  <br />
                  BSE: 0.00375%
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  NSE: 0.00173%
                  <br />
                  BSE: 0
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  NSE: 0.03503% (on premium)
                  <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  GST
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="text- sm px-[15px] py-[12px] text-[#424242] border-none">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  Transaction charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  ₹10 / crore
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹10 / crore
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹10 / crore
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹10 / crore
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  Stamp charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  0.015% or ₹1500 / crore on buy side
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  0.003% or ₹300 / crore on buy side
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="text- sm px-[15px] py-[12px] text-[#424242] border-none">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "currency" && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  &nbsp;
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  {" "}
                  Currency futures
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Currency options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  Brokerage
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  0.03% or ₹ 20/executed order whichever is lower
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹ 20/executed order
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  STT/CTT
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  No STT
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  0No STT
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  Transaction charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  NSE: 0.00035%
                  <br />
                  BSE: 0.00045%
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  NSE: 0.0311%
                  <br />
                  BSE: 0.001%
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  GST
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  SEBI charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  ₹10 / crore
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹10 / crore
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  Stamp charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  0.0001% or ₹10 / crore on buy side
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  0.0001% or ₹10 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        )}
        {activeTab === "commodity" && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  &nbsp;
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  {" "}
                  Commodity futures
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Currency options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  Brokerage
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹ 20/executed order
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  Transaction charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  MCX: 0.0021%
                  <br />
                  NSE: 0.0001%
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  MCX: 0.0418%
                  <br />
                  NSE: 0.001%
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none ">
                  {" "}
                  GST
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  SEBI charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  Agri:
                  <br />
                  ₹1 / crore
                  <br />
                  Non-agri:
                  <br />
                  ₹10 / crore
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  ₹10 / crore
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  {" "}
                  Stamp charges
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242]border-none ">
                  {" "}
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="px-[15px] py-[12px] text- sm text-[#424242] border-none">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        )}
        
      </div>
    </section>
  );
}
export default Tables;
