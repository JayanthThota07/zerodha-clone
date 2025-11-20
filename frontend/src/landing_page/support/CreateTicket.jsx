import React, { useState } from "react";
import {
  CirclePlus,
  Rocket,
  IndianRupee,
  MonitorCog,
  History,
  ChevronDown,
  CircleUser,
} from "lucide-react";
const items = [
  {
    title: "Acount Opening",
    icon: <CirclePlus className="w-6 h-6 text-[#397dd0]" />,
    content: [
      <a href="">Resident individual</a>,
      <a href="">Minor</a>,
      <a href="">Non Resident (NRI)</a>,
      <a href="">Company, Partnership, HUF and LLP</a>,
      <a href="">Glossary</a>,
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: <CircleUser className="w-6 h-6 text-[#397dd0]" />,
    content: [
      <a href="">Your Profile</a>,
      <a href="">Account Modification</a>,
      <a href="">Client Master Report (CMR) and Depository Participant (DP)</a>,
      <a href="">Nomination</a>,
      <a href="">Transfer and conversion of securities</a>,
    ],
  },
  {
    title: "Kite",
    icon: <Rocket className="w-6 h-6 text-[#397dd0]" />,
    content: [
      <a href="">IPO</a>,
      <a href="">Trading FAQs</a>,
      <a href="">Margin Trading Facility (MTF) and Margins</a>,
      <a href="">Charts and orders</a>,
      <a href="">Alerts and Nudges</a>,
      <a href="">General</a>,
    ],
  },
  {
    title: "Funds",
    icon: <IndianRupee className="w-6 h-6 text-[#397dd0]" />,
    content: [
      <a href="">Add Money</a>,
      <a href="">Withdraw Money</a>,
      <a href="">Add bank account</a>,
      <a href="">eMandates</a>,
    ],
  },
  {
    title: "Console",
    icon: <MonitorCog className="w-6 h-6 text-[#397dd0]" />,
    content: [
      <a href="#">Portfolio</a>,
      <a href="#">Corporate action</a>,
      <a href="#">Fund statement</a>,
      <a href="#">Reports</a>,
      <a href="#">Profile</a>,
      <a href="#">Segment</a>,
    ],
  },
  {
    title: "Coin",
    icon: <History className="w-6 h-6 text-[#397dd0]" />,
    content: [
      <a href="">Mutual Funds</a>,
      <a href="">National pension Scheme (NPS)</a>,
      <a href="">Features on coin</a>,
      <a href="">Payments and Order</a>,
      <a href="">General</a>,
    ],
  },
];

function CreateTicket() {
  const [openIndex, setOpenIndex] = useState(null);
  const toogle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <div className="space-y-4 px-6 py-6 m-auto max-w-7xl md:py-10">
      {items.map((items, i) => (
        <div key={i} className="border rounded-md ">
          <button
            onClick={() => toogle(i)}
            className={`w-full flex items-center justify-between px-4 py-4 text-lg
              transition-colors duration-150 border rounded-md
              ${
                openIndex === i
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-sm">
                {items.icon}
              </div>

              <span className="font-medium">{items.title}</span>
            </div>

            {/* RIGHT SIDE ICON */}
            {openIndex === i ? (
              <ChevronDown className="text-[#397dd0] rotate-180" />
            ) : (
              <ChevronDown className="text-[#397dd0]" />
            )}
          </button>

          {openIndex === i && (
            <ul className="px-12 py-4 space-y-2 text-[#397dd0] list-disc">
              {items.content.map((c, index) => (
                <li key={index}>{c}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      
    </div>

  );
  
}

export default CreateTicket;
