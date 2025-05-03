import { useState } from "react";

interface TrackingEvent {
  status: string;
  date: string;
  time: string;
  location: string;
  from?: string;
}

const PackageStatusSection: React.FC = () => {
  const [showTextUpdates, setShowTextUpdates] = useState(false);
  const [showTravelHistory, setShowTravelHistory] = useState(true);

  const trackingEvents: TrackingEvent[] = [
    {
      status: "Package On-Hold",
      date: "April 24 Thursday, 2025",
      time: "01:10PM",
      location: "SAN FRANCISCO, CA 94102, USA",
    },
    {
      status: "Shipment Information Recieved",
      date: "April 24 Thursday, 2025",
      time: "04:45pm",
      location: "SAN FRANCISCO, CA 94102, USA",
      from: "SAN FRANCISCO, CA 94102, USA",
    },
  ];

  return (
    <div className="container bg-gray-200 py-6 px-6 mx-auto">
      {/* Alert Section */}
      <div className="flex mb-6">
        <div className="w-1 bg-red-700"></div>
        <div className="flex-1 bg-red-100 p-4">
          <h3 className="text-red-600 font-bold text-lg mb-2">Alert</h3>
          <p className="text-gray-800">
            Package On Hold BY The Bullion Van. Kindly Contact your sender for
            more information.
          </p>
        </div>

        {/* Package Status */}
        <div className="ml-4 w-1/3">
          <h3 className="text-gray-800 font-medium mb-3">Package Status</h3>
          <div className="flex items-start mb-2">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                i
              </div>
            </div>
            <div className="ml-2">
              <p className="font-medium">Package On-Hold</p>
              <p className="text-gray-600 text-sm">
                April 24 Thursday, 2025 AT 01:10PM
              </p>
              <p className="text-gray-600 text-sm">
                SAN FRANCISCO, CA 94102, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-gray-300 mb-8">
        <div className="flex h-full">
          <div className="bg-red-600 w-1/4"></div>
          <div className="bg-red-600 w-1/4"></div>
          <div className="bg-red-600 w-1/4"></div>
          <div className="bg-gray-400 w-1/4"></div>
        </div>
      </div>

      {/* Text & Email Updates Section */}
      <div className="border-t border-b border-gray-300">
        <button
          className="w-full py-4 px-2 flex justify-between items-center"
          onClick={() => setShowTextUpdates(!showTextUpdates)}
        >
          <h3 className="text-blue-900 font-medium text-lg">
            Text & Email Updates
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${
              showTextUpdates ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showTextUpdates && (
          <div className="py-4 px-6">
            {/* Content for text & email updates would go here */}
            <p>Sign up for text and email updates about your package.</p>
          </div>
        )}
      </div>

      {/* Travel History Section */}
      <div className="border-b border-gray-300">
        <button
          className="w-full py-4 px-2 flex justify-between items-center"
          onClick={() => setShowTravelHistory(!showTravelHistory)}
        >
          <h3 className="text-blue-900 font-medium text-lg">Travel History</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${
              showTravelHistory ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {showTravelHistory && (
          <div className="py-4 px-6">
            {trackingEvents.map((event, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                      i
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="font-medium">{event.status}</p>
                    <p className="text-gray-600 text-sm">
                      {event.date} AT {event.time}
                    </p>
                    {event.from ? (
                      <p className="text-gray-600 text-sm">
                        FROM: {event.from}
                      </p>
                    ) : (
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageStatusSection;
