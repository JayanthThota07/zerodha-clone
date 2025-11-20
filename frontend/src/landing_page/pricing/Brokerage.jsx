import React from "react";

function Brokerage() {
  return (
    <>
      <section className="max-w-6xl mx-auto my-12 font-sans">
        <p className="text-center text-base leading-[1.8] font-medium mb-[20px]">
          <a
            className="text-[#387ed1] hover:text-[#424242]"
            href="https://zerodha.com/brokerage-calculator#tab-equities"
          >
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>

        <h2 className="text-2xl font-medium leading-[1.5] mb-[20px] text-[#424242]">
          Charges for account opening
        </h2>

        {/*tables-1*/}
        <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Type of account
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Online account
                </td>
                <td className="px-[15px] py-[12px]">
                  <span className="text-xs  rounded-[2px] front-medium px-[10px] py-[4px]  text-white bg-[#4caf50;]">
                    FREE
                  </span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Offline account
                </td>
                <td className="px-[15px] py-[12px]">
                  <span className="text-xs  rounded-[2px] front-medium px-[10px] py-[4px]  text-white bg-[#4caf50;]">
                    FREE
                  </span>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  NRI account (offline only)
                </td>
                <td className="px-[15px] py-[12px]">₹ 500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="px-[15px] py-[12px]">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-medium leading-[1.5] mt-[80px] mb-[20px] text-[#424242]">
          Demat AMC (Annual Maintenance Charge)
        </h2>

        {/*tables-1*/}
        <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Value of holdings
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  AMC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Up to ₹4 lakh
                </td>
                <td className="px-[15px] py-[12px]">
                  <span className="text-xs  rounded-[2px] front-medium px-[10px] py-[4px]  text-white bg-[#4caf50;]">
                    FREE
                  </span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  ₹4 lakh - ₹10 lakh
                </td>
                <td className="px-[15px] py-[12px]">
                  ₹ 100 per year, charged quarterly*
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Above ₹10 lakh
                </td>
                <td className="px-[15px] py-[12px]">
                  ₹ 300 per year, charged quarterly
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base leading-[1.8] mb-[15px] mt-[12px] text-[#424242] ">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA, click here.
        </p>

        <h2 className="text-2xl font-medium leading-[1.5] mt-[80px] mb-[20px] text-[#424242]">
          Charges for optional value added services
        </h2>

        {/*tables-2*/}
        <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  Billing Frquency
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#424242] font-semibold">
                  {" "}
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Tickertape
                </td>
                <td className="px-[15px] py-[12px]">Monthly / Annual</td>
                <td className="px-[15px] py-[12px]">Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Smallcase
                </td>
                <td className="px-[15px] py-[12px]">Per transaction</td>
                <td className="px-[15px] py-[12px]">
                  Buy & Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-[15px] py-[12px]  text-[#424242] border-none">
                  Kite Connect
                </td>
                <td className="px-[15px] py-[12px]">Monthly</td>
                <td className="px-[15px] py-[12px]">
                  Connect: 500 | Personal: Free
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-medium leading-[1.5] mt-[80px] mb-[20px] text-[#424242]">
          Charges explained
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="text-left   ">
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Securities/Commodities transaction tax
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="text-xs leading-[1.8] mb-[15px]">
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Transaction/Turnover Charges
            </p>

            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="text-xs leading-[1.8]  mt-[12px] mb-[15px]">
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            {/*head*/}

            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Call & trade
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            {/*head*/}

            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Stamp charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              NRI brokerage charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              <ul>
                <li>
                  For a non-PIS account, 0.5% or ₹50 per executed order for
                  equity and F&O (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Account with debit balance
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </p>
            <p className="text-xs leading-[1.8] mb-[15px] mt-[12px]">
              <ul className="list-disc pl-[20px] mb-[5px]">
                <li>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Margin Trading Facility (MTF)
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              <ul className="list-disc pl-[20px] mb-[5px]">
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹15 + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </p>
          </div>
          {/*col2*/}

          <div className="text-left ">
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">GST</p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              SEBI Charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              DP (Depository participant) charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Pledging charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              ₹30 + GST per pledge request per ISIN.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              AMC (Account maintenance charges)
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, Click here
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Corporate action order charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Off-market transfer charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              ₹25 per transaction.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Physical CMR request
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Payment gateway charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            {/*head*/}
            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Delayed Payment Charges
            </p>
            <p className="text-xs leading-[1.8] mt-[12px] mb-[15px]">
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>
            {/*head*/}

            <p className="text-base leading-[1.8] mt-[16px] mb-[15px]">
              Trading using 3-in-1 account with block functionality
            </p>
            <p className="text-xs leading-[1.8] mb-[15px]">
              <ul className="list-disc pl-[20px] mb-[5px]">
                <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                <li>Intraday Brokerage: 0.05% per executed order.</li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <p className=" mt-[16px] mb-[15px] leading-[1.8] text-base">
            Disclaimer
          </p>
          <p className=" mt-[12px] mb-[15px] leading-[1.8] text-xs">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.<br/>
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and<br/>
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </section>
    </>
  );
}
export default Brokerage;
