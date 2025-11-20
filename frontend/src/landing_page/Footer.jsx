import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600 text-sm">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10">
  {/* Logo and Socials */}
  <div className="md:pr-10">
    <img src="/media/logo.svg" alt="Zerodha Logo" className="w-32 mb-3" />
    
    <p className="text-gray-500 mb-4 text-sm leading-relaxed">
      © 2010 - 2025, Zerodha Broking Ltd.
      <br /> All rights reserved.
    </p>
    
    {/* Social Icons */}
  <div className="mt-6">
  <div className="flex justify-start flex-wrap gap-x-5 gap-y-5 text-[20px] text-gray-500">
    {/* Row 1 */}
    <div className="flex gap-3 w-full sm:w-auto justify-start">
      <a href="#" aria-label="X">
        <i className="fa-brands fa-x-twitter hover:text-gray-700 transition"></i>
      </a>
      <a href="#" aria-label="Facebook">
        <i className="fa-brands fa-facebook-f hover:text-gray-700 transition"></i>
      </a>
      <a href="#" aria-label="Instagram">
        <i className="fa-brands fa-instagram hover:text-gray-700 transition"></i>
      </a>
      <a href="#" aria-label="LinkedIn">
        <i className="fa-brands fa-linkedin-in hover:text-gray-700 transition"></i>
      </a>
    </div>

    {/* Divider Line */}
    <div className="w-full border-t border-gray-200 my-2"></div>

    {/* Row 2 */}
    <div className="flex gap-3 w-full sm:w-auto justify-start">
      <a href="#" aria-label="YouTube">
        <i className="fa-brands fa-youtube hover:text-gray-700 transition"></i>
      </a>
      <a href="#" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp hover:text-gray-700 transition"></i>
      </a>
      <a href="#" aria-label="Telegram">
        <i className="fa-brands fa-telegram hover:text-gray-700 transition"></i>
      </a>
    </div>
  </div>
</div>





  </div>


        {/* Account */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Open demat account</a></li>
            <li><a href="#" className="hover:text-blue-600">Minor demat account</a></li>
            <li><a href="#" className="hover:text-blue-600">NRI demat account</a></li>
            <li><a href="#" className="hover:text-blue-600">Commodity</a></li>
            <li><a href="#" className="hover:text-blue-600">Dematerialisation</a></li>
            <li><a href="#" className="hover:text-blue-600">Fund transfer</a></li>
            <li><a href="#" className="hover:text-blue-600">MTF</a></li>
            <li><a href="#" className="hover:text-blue-600">Referral program</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
            <li><a href="#" className="hover:text-blue-600">Support portal</a></li>
            <li><a href="#" className="hover:text-blue-600">How to file a complaint?</a></li>
            <li><a href="#" className="hover:text-blue-600">Status of your complaints</a></li>
            <li><a href="#" className="hover:text-blue-600">Bulletin</a></li>
            <li><a href="#" className="hover:text-blue-600">Circular</a></li>
            <li><a href="#" className="hover:text-blue-600">Z-Connect blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Downloads</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Philosophy</a></li>
            <li><a href="#" className="hover:text-blue-600">Press & media</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Zerodha Cares (CSR)</a></li>
            <li><a href="#" className="hover:text-blue-600">Zerodha.tech</a></li>
            <li><a href="#" className="hover:text-blue-600">Open source</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Quick links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Upcoming IPOs</a></li>
            <li><a href="#" className="hover:text-blue-600">Brokerage charges</a></li>
            <li><a href="#" className="hover:text-blue-600">Market holidays</a></li>
            <li><a href="#" className="hover:text-blue-600">Economic calendar</a></li>
            <li><a href="#" className="hover:text-blue-600">Calculators</a></li>
            <li><a href="#" className="hover:text-blue-600">Markets</a></li>
            <li><a href="#" className="hover:text-blue-600">Sectors</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom Legal Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-xs text-gray-500 leading-relaxed space-y-3">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository
          services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha
          Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru –
          560078, Karnataka, India. For any complaints pertaining to securities broking please write to{" "}
          <a href="#" className="text-blue-600 hover:underline">complaints@zerodha.com</a>, for DP related queries to{" "}
          <a href="#" className="text-blue-600 hover:underline">dp@zerodha.com</a>.
        </p>

        <p>
          Procedure to file a complaint on{" "}
          <a href="#" className="text-blue-600 hover:underline">SEBI SCORES</a>: Register on SCORES portal. Mandatory
          details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of grievances.
        </p>

        <p>
          <a href="#" className="text-blue-600 hover:underline">Smart Online Dispute Resolution</a> |{" "}
          <a href="#" className="text-blue-600 hover:underline">Grievances Redressal Mechanism</a>
        </p>

        <p>
          Investments in securities market are subject to market risks; read all related documents carefully before
          investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins only by way of pledge in the depository
          system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository
          participant and receive OTP directly from the depository to create pledge. 3) Check your securities / MF /
          bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India’s largest broker based on net worth as per NSE.{" "}
          <a href="#" className="text-blue-600 hover:underline">NSE broker factsheet</a>
        </p>

        <p>
          “Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock
          brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets.
          Once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo
          the same process again when you approach another intermediary.” For any fraudulent activity, please{" "}
          <a href="#" className="text-blue-600 hover:underline">create a ticket here</a>.
        </p>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-200">
        <ul className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-6 text-gray-500 text-xs">
          {["NSE", "BSE", "MCX", "Terms & conditions", "Policies & procedures", "Privacy policy", "Disclosure", "For investor’s attention", "Investor charter"].map(
            (link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-600">{link}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
