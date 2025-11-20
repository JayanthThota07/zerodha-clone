import CreateTicket from "./CreateTicket";

function Support() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 py-10">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2">
        <CreateTicket />
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-1 space-y-6">

        {/* NOTIFICATIONS */}
        <div className="bg-orange-50 border-l-4 border-orange-500  px-5 py-3 rounded-md">
          <ul className="list-disc list-inside text-[#397dd0] space-y-3">
            <li>
              <a href="#" className="hover:underline">
                MCX Crude option contract expiry – November 2025
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                MCX Base metals contract expiry – November 2025
              </a>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="border rounded-md">
          <div className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
            Quick links
          </div>

          <ul className="divide-y">
            {[
              "Track account opening",
              "Track segment activation",
              "Intraday margins",
              "Kite user manual",
              "Learn how to create a ticket",
            ].map((text, i) => (
              <li key={i} className="px-4 py-3">
                <a href="#" className="text-[#397dd0] hover:underline">
                  {i + 1}. {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Support;
